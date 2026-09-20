import { useState } from 'react';
import { ExternalLink, Star, GitFork, Globe, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function PinnedProjects() {
  const [filter, setFilter] = useState('featured');

  const featuredProjects = [
    {
      id: 'orienta-ai',
      name: 'orienta-ai',
      title: 'Sistema de Seleção de Orientadores',
      description: 'Plataforma web para matching e alocação de orientadores acadêmicos por linhas de pesquisa e interesses temáticos dos estudantes.',
      language: 'JavaScript',
      languageColor: '#eab308',
      tags: ['React.js', 'FastAPI', 'Matching Algorítmico'],
      githubUrl: 'https://github.com/erick1-618/orienta-ai',
      deployUrl: 'https://orienta-ai-brown.vercel.app/',
    },
    {
      id: 'AutomatonVerify',
      name: 'AutomatonVerify',
      title: 'Verificação com Autômatos Celulares',
      description: 'Aplicação web para armazenamento e validação de propriedades de software, utilizando funções de espalhamento (hash) baseadas em autômatos celulares.',
      language: 'JavaScript',
      languageColor: '#eab308',
      tags: ['React.js', 'SpringBoot', 'PostgresSQL', 'Função Hash'],
      githubUrl: 'https://github.com/erick1-618/AutomatonVerify',
      deployUrl: 'https://automaton-verify.vercel.app/',
    },
    {
      id: 'Cellular-Automata',
      name: 'Cellular-Automata',
      title: 'Simulação de Autômatos em Java',
      description: 'Motor de simulação de sistemas complexos discretos em Java, cobrindo regras uni, bi e tridimensionais.',
      language: 'Java',
      languageColor: '#b07219',
      tags: ['Java', 'Autômatos Celulares', 'Simulação', 'Java Swing'],
      githubUrl: 'https://github.com/erick1-618/Cellular-Automata',
      deployUrl: null,
      stars: 3,
      forks: 1,
    },
    {
      id: 'Chess',
      name: 'Chess',
      title: 'Jogo de Xadrez Orientado a Objetos',
      description: 'Motor e jogo de xadrez com interface gráfica Swing em Java, aplicando rigorosamente princípios SOLID e padrões de projeto (GoF).',
      language: 'Java',
      languageColor: '#b07219',
      tags: ['Java', 'OOP Avançado', 'Java Swing'],
      githubUrl: 'https://github.com/erick1-618/Chess',
      deployUrl: null,
      stars: 2,
    },
  ];

  const otherProjects = [
    {
      id: 'tcc_graphs',
      name: 'tcc_graphs',
      title: 'Geração e Análise de Grafos',
      description: 'Rotinas computacionais para geração de instâncias de grafos e testes de benchmark (DIMACS) para o TCC no CEFET/RJ.',
      language: 'Python / Jupyter',
      languageColor: '#DA5B0B',
      tags: ['Python', 'Teoria dos Grafos', 'DIMACS', 'TCC'],
      githubUrl: 'https://github.com/erick1-618/tcc_graphs',
      deployUrl: null,
    },
    {
      id: 'simple-rsa',
      name: 'simple-rsa',
      title: 'Criptografia RSA com GUI',
      description: 'Implementação didática de chaves públicas/privadas, exponenciação modular e cifragem assimétrica em Java com interface gráfica.',
      language: 'Java',
      languageColor: '#b07219',
      tags: ['Java', 'Criptografia RSA', 'Segurança'],
      githubUrl: 'https://github.com/erick1-618/simple-rsa',
      deployUrl: null,
    },
    {
      id: 'ant-simulator',
      name: 'ant-simulator',
      title: 'Simulador de Formigas',
      description: 'Simulação computacional baseada em agentes com regras de feromônio e forrageamento, explorando inteligência de enxame.',
      language: 'Java',
      languageColor: '#b07219',
      tags: ['Java', 'Simulação', 'OOP'],
      githubUrl: 'https://github.com/erick1-618/ant-simulator',
      deployUrl: null,
    },
  ];

  const displayedProjects = filter === 'featured'
    ? featuredProjects
    : filter === 'more'
    ? otherProjects
    : [...featuredProjects, ...otherProjects];

  return (
    <section id="projetos" className="section" style={{ padding: '4rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2rem' }}>
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
            gap: '1.5rem',
          }}
          className="projects-grid"
        >
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Header with language & badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
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

                  {project.deployUrl && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: '#047857',
                        background: '#ecfdf5',
                        padding: '0.2rem 0.55rem',
                        borderRadius: 'var(--radius-full)',
                      }}
                    >
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                      Deploy Ativo
                    </span>
                  )}
                </div>

                {/* Title & Monospace Repo */}
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.2rem 0' }}>
                  {project.title}
                </h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-corporate)', marginBottom: '0.75rem' }}>
                  erick1-618/{project.name}
                </div>

                {/* Concise Description */}
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.1rem' }}>
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

                {/* Actions */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {project.stars !== undefined && project.stars !== null && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        <Star size={12} fill="currentColor" color="var(--color-academic)" />
                        {project.stars}
                      </span>
                    )}
                    {project.forks && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        <GitFork size={12} />
                        {project.forks}
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {project.deployUrl && (
                      <a
                        href={project.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{
                          fontSize: '0.75rem',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '6px',
                          background: '#047857',
                          borderColor: '#047857',
                        }}
                      >
                        <Globe size={12} />
                        Acessar
                        <ExternalLink size={11} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '6px',
                      }}
                    >
                      <GithubIcon size={13} />
                      GitHub
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
