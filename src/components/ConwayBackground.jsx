import { useEffect, useRef, useCallback } from 'react';

export default function ConwayBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const lastMousePosRef = useRef({ x: -1, y: -1 });

  const stateRef = useRef({
    grid: null,
    nextGrid: null,
    cols: 0,
    rows: 0,
    cellSize: 20,
    lastTick: 0,
    interval: 110, // ms between generations
    populationHistory: [],
  });

  // Generate an initial random state on refresh
  const initGrid = useCallback((cols, rows) => {
    const grid = new Uint8Array(cols * rows);
    for (let i = 0; i < grid.length; i++) {
      grid[i] = Math.random() < 0.13 ? 1 : 0;
    }

    // Inject a few classic gliders across the screen
    const addGlider = (startX, startY) => {
      const coords = [[0, 1], [1, 2], [2, 0], [2, 1], [2, 2]];
      coords.forEach(([dx, dy]) => {
        const x = (startX + dx + cols) % cols;
        const y = (startY + dy + rows) % rows;
        grid[y * cols + x] = 1;
      });
    };

    for (let g = 0; g < 6; g++) {
      addGlider(
        Math.floor(Math.random() * cols),
        Math.floor(Math.random() * rows)
      );
    }

    return grid;
  }, []);

  // Window resize handler
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const cellSize = 20;
      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      stateRef.current.cols = cols;
      stateRef.current.rows = rows;
      stateRef.current.cellSize = cellSize;
      stateRef.current.grid = initGrid(cols, rows);
      stateRef.current.nextGrid = new Uint8Array(cols * rows);
      stateRef.current.populationHistory = [];
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initGrid]);

  // Main simulation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const computeNextGeneration = () => {
      const { grid, nextGrid, cols, rows } = stateRef.current;
      if (!grid || !nextGrid || cols === 0 || rows === 0) return 0;

      let aliveCount = 0;

      for (let y = 0; y < rows; y++) {
        const yUp = y > 0 ? y - 1 : rows - 1;
        const yDown = y < rows - 1 ? y + 1 : 0;

        for (let x = 0; x < cols; x++) {
          const xLeft = x > 0 ? x - 1 : cols - 1;
          const xRight = x < cols - 1 ? x + 1 : 0;

          const neighbors =
            grid[yUp * cols + xLeft] +
            grid[yUp * cols + x] +
            grid[yUp * cols + xRight] +
            grid[y * cols + xLeft] +
            grid[y * cols + xRight] +
            grid[yDown * cols + xLeft] +
            grid[yDown * cols + x] +
            grid[yDown * cols + xRight];

          const idx = y * cols + x;
          const current = grid[idx];

          if (current === 1) {
            nextGrid[idx] = (neighbors === 2 || neighbors === 3) ? 1 : 0;
          } else {
            nextGrid[idx] = neighbors === 3 ? 1 : 0;
          }

          if (nextGrid[idx] === 1) aliveCount++;
        }
      }

      stateRef.current.grid.set(nextGrid);
      return aliveCount;
    };

    const draw = () => {
      const { grid, cols, rows, cellSize } = stateRef.current;
      if (!grid) return;

      const dpr = window.devicePixelRatio || 1;
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      // Clean, elegant low opacity dot style
      ctx.fillStyle = 'rgba(28, 45, 82, 0.058)';
      const dotRadius = cellSize * 0.32;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          if (grid[y * cols + x] === 1) {
            const cx = x * cellSize + cellSize / 2;
            const cy = y * cellSize + cellSize / 2;
            ctx.beginPath();
            ctx.arc(cx, cy, dotRadius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      ctx.restore();
    };

    const loop = (timestamp) => {
      if (timestamp - stateRef.current.lastTick >= stateRef.current.interval) {
        stateRef.current.lastTick = timestamp;
        const alive = computeNextGeneration();

        // Keep the ecosystem active if it dies out
        const history = stateRef.current.populationHistory;
        history.push(alive);
        if (history.length > 20) history.shift();

        const isStagnant = history.length === 20 && history.every(v => v === history[0]);
        if (alive < (stateRef.current.cols * stateRef.current.rows * 0.02) || isStagnant) {
          const { cols, rows, grid } = stateRef.current;
          const cx = Math.floor(Math.random() * cols);
          const cy = Math.floor(Math.random() * rows);
          for (let dy = -4; dy <= 4; dy++) {
            for (let dx = -4; dx <= 4; dx++) {
              const nx = (cx + dx + cols) % cols;
              const ny = (cy + dy + rows) % rows;
              if (Math.random() < 0.35) grid[ny * cols + nx] = 1;
            }
          }
        }
      }

      draw();
      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Alter cells on mouse move or touch across the screen
  useEffect(() => {
    const alterAtPoint = (clientX, clientY) => {
      const { cols, rows, cellSize, grid } = stateRef.current;
      if (!grid || cols === 0 || rows === 0) return;

      const col = Math.floor(clientX / cellSize);
      const row = Math.floor(clientY / cellSize);

      // Only perturb if moved to a different cell or position
      if (col === lastMousePosRef.current.x && row === lastMousePosRef.current.y) {
        return;
      }
      lastMousePosRef.current = { x: col, y: row };

      // Alter local 3x3 neighborhood around mouse cursor
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const c = (col + dx + cols) % cols;
          const r = (row + dy + rows) % rows;
          const idx = r * cols + c;
          // Invert or activate cells dynamically as cursor glides
          grid[idx] = Math.random() < 0.65 ? 1 : 0;
        }
      }
    };

    const handlePointerMove = (e) => {
      alterAtPoint(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        alterAtPoint(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="conway-canvas-container">
      <canvas ref={canvasRef} className="conway-canvas" />
    </div>
  );
}
