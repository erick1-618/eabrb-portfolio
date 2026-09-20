/**
 * Utilitários para formatação e cálculo dinâmico de datas e períodos de experiências.
 */

const MONTH_NAMES_SHORT = [
  'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
  'jul', 'ago', 'set', 'out', 'nov', 'dez'
];

/**
 * Calcula a duração em meses entre duas datas (inclusivo, seguindo o padrão de mercado / LinkedIn).
 * Ex: Fev 2026 até Set 2026 = 8 meses (Fev, Mar, Abr, Mai, Jun, Jul, Ago, Set).
 * 
 * @param {{ year: number, month: number }} start Data de início (mês 1-12)
 * @param {{ year: number, month: number } | Date | null} [end] Data de fim ou nulo para data atual
 * @returns {number} Quantidade total de meses
 */
export function calculateDurationInMonths(start, end = null) {
  const now = new Date();
  
  const startYear = start.year;
  const startMonth = start.month;

  let endYear;
  let endMonth;

  if (!end) {
    endYear = now.getFullYear();
    endMonth = now.getMonth() + 1; // 1-indexed
  } else if (end instanceof Date) {
    endYear = end.getFullYear();
    endMonth = end.getMonth() + 1;
  } else {
    endYear = end.year;
    endMonth = end.month;
  }

  const diffMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  return Math.max(1, diffMonths);
}

/**
 * Formata a quantidade total de meses em string legível em português.
 * Exemplos:
 *   1 -> "1 mês"
 *   4 -> "4 meses"
 *   12 -> "1 ano"
 *   16 -> "1 ano e 4 meses"
 *   25 -> "2 anos e 1 mês"
 * 
 * @param {number} totalMonths 
 * @returns {string}
 */
export function formatDuration(totalMonths) {
  if (totalMonths <= 0) return '';

  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  if (years === 0) {
    return `${totalMonths} ${totalMonths === 1 ? 'mês' : 'meses'}`;
  }

  const yearLabel = `${years} ${years === 1 ? 'ano' : 'anos'}`;

  if (remainingMonths === 0) {
    return yearLabel;
  }

  const monthLabel = `${remainingMonths} ${remainingMonths === 1 ? 'mês' : 'meses'}`;
  return `${yearLabel} e ${monthLabel}`;
}

/**
 * Formata o período completo de uma experiência profissional ou acadêmica.
 * Calcula e atualiza automaticamente a duração sempre que a experiência for corrente (isCurrent: true).
 * 
 * @param {Object} exp
 * @param {number} exp.startYear
 * @param {number} exp.startMonth
 * @param {number} [exp.endYear]
 * @param {number} [exp.endMonth]
 * @param {boolean} [exp.isCurrent]
 * @param {boolean} [exp.showDuration=true]
 * @returns {string} Ex: "fev 2026 – Presente (8 meses)" ou "mar 2025 – jun 2026 (1 ano e 4 meses)"
 */
export function formatExperiencePeriod({
  startYear,
  startMonth,
  endYear,
  endMonth,
  isCurrent = false,
  showDuration = true,
}) {
  const startLabel = `${MONTH_NAMES_SHORT[startMonth - 1]} ${startYear}`;
  const endLabel = isCurrent ? 'Presente' : `${MONTH_NAMES_SHORT[endMonth - 1]} ${endYear}`;

  if (!showDuration) {
    return `${startLabel} – ${endLabel}`;
  }

  const totalMonths = calculateDurationInMonths(
    { year: startYear, month: startMonth },
    isCurrent ? null : { year: endYear, month: endMonth }
  );

  const durationStr = formatDuration(totalMonths);
  return `${startLabel} – ${endLabel} (${durationStr})`;
}

/**
 * Retorna o ano corrente dinâmico (ex: para copyright no rodapé).
 */
export function getCurrentYear() {
  return new Date().getFullYear();
}

