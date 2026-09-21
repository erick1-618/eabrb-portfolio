import { useState } from 'react';
import { ExternalLink, Star, GitFork, Globe, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';

import orientaAiImg from '../assets/orienta-ai.png';
import automatonVerifyImg from '../assets/automaton-verify.png';
import cellularAutomataGif from '../assets/automatos-celulares.gif';
import chessImg from '../assets/chess.png';

export default function PinnedProjects() {
  const [filter, setFilter] = useState('featured');

  const featuredProjects = [
    {
      id: 'orienta-ai',
      name: 'orienta-ai',
      title: 'orienta-ai: Sistema de Seleção de Orientadores',
      description: 'Plataforma web para matching e alocação de orientadores acadêmicos por linhas de pesquisa e interesses temáticos dos estudantes.',
      language: 'JavaScript',
      languageColor: '#eab308',
      tags: ['React.js', 'FastAPI', 'Matching Algorítmico', 'Vercel'],
      githubUrl: 'https://github.com/erick1-618/orienta-ai',
      deployUrl: 'https://orienta-ai-brown.vercel.app/',
      image: orientaAiImg,
      badgeText: 'Deploy Ativo',
      badgeType: 'deploy',
    },
    {
      id: 'AutomatonVerify',
      name: 'AutomatonVerify',
      title: 'AutomatonVerify: Verificação com Autômatos Celulares',
      description: 'Aplicação web para armazenamento e validação de propriedades de software, utilizando funções de espalhamento (hash) baseadas em autômatos celulares.',
      language: 'JavaScript',
      languageColor: '#eab308',
      tags: ['React.js', 'Spring Boot', 'PostgresSQL', 'Função Hash'],
      githubUrl: 'https://github.com/erick1-618/AutomatonVerify',
      deployUrl: 'https://automaton-verify.vercel.app/',
      image: automatonVerifyImg,
      badgeText: 'Deploy Ativo',
      badgeType: 'deploy',
    },
    {
      id: 'Cellular-Automata',
      name: 'Cellular-Automata',
      title: 'Cellular-Automata: Simulação de Autômatos em Java',
      description: 'Motor de simulação de sistemas complexos discretos em Java, cobrindo regras uni, bi e tridimensionais com visualização interativa em tempo real.',
      language: 'Java',
      languageColor: '#b07219',
      tags: ['Java', 'Autômatos Celulares', 'Simulação', 'Java Swing'],
      githubUrl: 'https://github.com/erick1-618/Cellular-Automata',
      deployUrl: null,
      image: cellularAutomataGif,
      badgeText: 'Simulação (GIF)',
      badgeType: 'simulation',
      stars: 3,
      forks: 1,
    },
    {
      id: 'Chess',
      name: 'Chess',
      title: 'Chess: Jogo de Xadrez Orientado a Objetos',
      description: 'Motor e jogo de xadrez com interface gráfica Swing em Java, com objetivo de aplicar conceitos avançados de orientação a objetos.',
      language: 'Java',
      languageColor: '#b07219',
      tags: ['Java', 'OOP Avançado', 'Design Patterns (GoF)', 'Java Swing'],
      githubUrl: 'https://github.com/erick1-618/Chess',
      deployUrl: null,
      image: chessImg,
      badgeText: 'Destaque Java',
      badgeType: 'featured',
      stars: 2,
    },
  ];

  const otherProjects = [
    {
      id: 'tcc_graphs',
      name: 'tcc_graphs',
      title: 'tcc_graphs: Geração e Análise de Grafos',
      description: 'Rotinas computacionais para geração de instâncias de grafos e testes de benchmark (DIMACS) para o TCC no CEFET/RJ.',
      language: 'Python / Jupyter',
      languageColor: '#DA5B0B',
      tags: ['Python', 'Teoria dos Grafos', 'DIMACS', 'TCC'],
      githubUrl: 'https://github.com/erick1-618/tcc_graphs',
      deployUrl: null,
      image: null,
      badgeText: 'Pesquisa / TCC',
      badgeType: 'research',
    },
    {
      id: 'simple-rsa',
      name: 'simple-rsa',
      title: 'simple-rsa: Criptografia RSA com GUI',
      description: 'Implementação didática de chaves públicas/privadas, exponenciação modular e cifragem assimétrica em Java com interface gráfica.',
      language: 'Java',
      languageColor: '#b07219',
      tags: ['Java', 'Criptografia RSA', 'Segurança'],
      githubUrl: 'https://github.com/erick1-618/simple-rsa',
      deployUrl: null,
      image: null,
      badgeText: 'Segurança',
      badgeType: 'default',
    },
    {
      id: 'ant-simulator',
      name: 'ant-simulator',
      title: 'ant-simulator: Simulador de Formigas',
      description: 'Simulação computacional baseada em agentes com regras de feromônio e forrageamento, explorando inteligência de enxame.',
      language: 'Java',
      languageColor: '#b07219',
      tags: ['Java', 'Simulação', 'OOP'],
      githubUrl: 'https://github.com/erick1-618/ant-simulator',
      deployUrl: null,
      image: null,
      badgeText: 'Simulação',
      badgeType: 'default',
    },
  ];

  const displayedProjects = filter === 'featured'
    ? featuredProjects
    : filter === 'more'
    ? otherProjects
    : [...featuredProjects, ...otherProjects];

  return (
    <section id="projetos" className="section" style={{ padding: '4.5rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-tag">
                <FolderGit2 size={13} color="var(--color-corporate)" />
                <span>Portfólio</span>
              </div>
              <h2 className="serif-heading section-title" style={{ fontSize: 'clamp(1.9rem, 3vw, 2.5rem)', margin: '0.35rem 0' }}>
                Projetos em Destaque
              </h2>
            </div>

            {/* Filter Pills */}
            <div
              style={{
                display: 'inline-flex',
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-full)',
                padding: '0.2rem',
                gap: '0.25rem',
              }}
            >
              {[
                { id: 'featured', label: `Destaques (${featuredProjects.length})` },
                { id: 'all', label: `Todos (${featuredProjects.length + otherProjects.length})` },
                { id: 'more', label: `Outros (${otherProjects.length})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  style={{
                    border: 'none',
                    background: filter === tab.id ? 'var(--text-primary)' : 'transparent',
                    color: filter === tab.id ? '#ffffff' : 'var(--text-secondary)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(440px, 1fr))',
            gap: '1.75rem',
          }}
          className="projects-grid"
        >
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card project-card"
              style={{
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
            >
              <div>
                {/* Top Banner Image / Preview */}
                {project.image ? (
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '16 / 9',
                      maxHeight: '220px',
                      overflow: 'hidden',
                      background: 'linear-gradient(135deg, #1e293b, #0f172a)',
                      borderBottom: '1px solid var(--border-light)',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                      className="project-banner-img"
                    />

                    {/* Floating Overlay Badge (Top-Right) */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        right: '0.75rem',
                        zIndex: 2,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.3rem 0.7rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        background: project.badgeType === 'deploy'
                          ? 'rgba(4, 120, 87, 0.92)'
                          : project.badgeType === 'simulation'
                          ? 'rgba(30, 58, 138, 0.92)'
                          : 'rgba(15, 23, 42, 0.85)',
                        color: '#ffffff',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
                      }}
                    >
                      {project.badgeType === 'deploy' && (
                        <>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#34d399', display: 'inline-block' }} />
                          <span>{project.badgeText}</span>
                        </>
                      )}
                      {project.badgeType === 'simulation' && (
                        <>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#60a5fa', display: 'inline-block' }} />
                          <span>{project.badgeText}</span>
                        </>
                      )}
                      {project.badgeType === 'featured' && (
                        <>
                          <Star size={11} fill="#f59e0b" color="#f59e0b" />
                          <span>{project.badgeText}</span>
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Fallback subtle header for other projects without cover */
                  <div
                    style={{
                      padding: '1.25rem 1.5rem 0.5rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: project.languageColor,
                          display: 'inline-block',
                        }}
                      />
                      {project.language}
                    </span>
                    <span className="badge badge-neutral" style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem' }}>
                      {project.badgeText}
                    </span>
                  </div>
                )}

                {/* Card Body Content */}
                <div style={{ padding: '1.35rem 1.5rem 0 1.5rem' }}>
                  {/* Language & Subtitle bar if image is present */}
                  {project.image && (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          color: 'var(--text-muted)',
                        }}
                      >
                        <span
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: project.languageColor,
                            display: 'inline-block',
                          }}
                        />
                        {project.language}
                      </span>

                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-corporate)' }}>
                        erick1-618/{project.name}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      margin: '0 0 0.5rem 0',
                      lineHeight: 1.35,
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      marginBottom: '1rem',
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Area: Tags & Action Buttons */}
              <div style={{ padding: '0 1.5rem 1.4rem 1.5rem' }}>
                {/* Tech tags and repo stats */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '1.15rem',
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="badge badge-neutral"
                        style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(project.stars || project.forks) && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {project.stars !== undefined && project.stars !== null && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                          <Star size={12} fill="currentColor" color="var(--color-academic)" />
                          {project.stars}
                        </span>
                      )}
                      {project.forks && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                          <GitFork size={12} />
                          {project.forks}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Buttons (Reference Style: [Ver repositório] [Acessar Projeto]) */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: project.deployUrl ? '1fr 1fr' : '1fr',
                    gap: '0.65rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{
                      fontSize: '0.8rem',
                      padding: '0.55rem 0.85rem',
                      borderRadius: '8px',
                      justifyContent: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontWeight: 600,
                    }}
                  >
                    <GithubIcon size={14} />
                    Ver repositório
                  </a>

                  {project.deployUrl && (
                    <a
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{
                        fontSize: '0.8rem',
                        padding: '0.55rem 0.85rem',
                        borderRadius: '8px',
                        justifyContent: 'center',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontWeight: 600,
                        background: '#151d28',
                        borderColor: '#151d28',
                      }}
                    >
                      <Globe size={14} />
                      Acessar Projeto
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card:hover .project-banner-img {
          transform: scale(1.04);
        }
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
