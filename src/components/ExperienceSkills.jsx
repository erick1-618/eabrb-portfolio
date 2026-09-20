import { 
  GraduationCap, 
  Building2, 
  Shield, 
  Award, 
  Languages, 
  Code2, 
  Wrench, 
  Server, 
  Database, 
  Layers, 
  GitBranch, 
  Cpu, 
  Terminal, 
  Network, 
  Car, 
  Activity, 
  FileCheck 
} from 'lucide-react';
import { formatExperiencePeriod } from '../utils/dateUtils';

export default function ExperienceSkills() {
  const timeline = [
    {
      period: formatExperiencePeriod({ startYear: 2026, startMonth: 2, isCurrent: true, showDuration: true }),
      title: 'Analista de Sistemas (Estagiário)',
      institution: 'BNDES',
      location: 'Rio de Janeiro, RJ',
      type: 'Corporativo',
      badgeClass: 'badge-corporate',
      icon: <Building2 size={18} color="var(--color-corporate)" />,
      summary: 'Atuação no desenvolvimento web com React.js, Node.js, Java, modelagem de sistemas, bancos relacionais. Além da utilização de ferramentas de CI/CD, versionamento e conteinerização com Docker'
    },
    {
      period: formatExperiencePeriod({ startYear: 2026, startMonth: 6, isCurrent: true, showDuration: true }),
      title: 'Bolsista IC – Projeto MobiCiber',
      institution: 'Inmetro',
      location: 'Duque de Caxias, RJ',
      type: 'Iniciação Científica (IC)',
      badgeClass: 'badge-academic',
      icon: <Shield size={18} color="var(--color-academic)" />,
      summary: 'Desenvolvimento de dispositivo para detecção e proteção contra intrusão em redes, sistemas e aplicações veiculares (cibersegurança automotiva e rede CAN).',
    },
    {
      period: formatExperiencePeriod({ startYear: 2025, startMonth: 3, endYear: 2026, endMonth: 6, showDuration: true }),
      title: 'Bolsista IT – Sistemas Distribuídos & Aprendizagem Federada',
      institution: 'Inmetro',
      location: 'Duque de Caxias, RJ',
      type: 'Iniciação Tecnológica (IT)',
      badgeClass: 'badge-academic',
      icon: <Network size={18} color="var(--color-academic)" />,
      summary: 'Projeto de sistema distribuído escalável para estimativa de demanda energética de frotas com aprendizagem federada, coleta de dados e simulação veicular.',
    },
    {
      period: formatExperiencePeriod({ startYear: 2025, startMonth: 4, endYear: 2025, endMonth: 12, showDuration: true }),
      title: 'Monitor de Programação Orientada a Objetos',
      institution: 'CEFET/RJ',
      location: 'Rio de Janeiro, RJ',
      type: 'Ensino Acadêmico',
      badgeClass: 'badge-neutral',
      icon: <Code2 size={18} color="var(--text-secondary)" />,
      summary: 'Tutoria e acompanhamento de alunos no paradigma de Orientação a Objetos e linguagem Java, com plantão de dúvidas e exercícios nos laboratórios e Teams.',
    },
    {
      period: formatExperiencePeriod({ startYear: 2023, startMonth: 3, isCurrent: true, showDuration: false }),
      title: 'Bacharelado em Ciência da Computação (BCC)',
      institution: 'CEFET/RJ',
      location: 'Rio de Janeiro, RJ',
      type: 'Graduação',
      badgeClass: 'badge-neutral',
      icon: <GraduationCap size={18} color="var(--color-corporate)" />,
      summary: 'Formação acadêmica integral com ênfase em algoritmos e sistemas complexos. TCC focado em Teoria dos Grafos e testes de benchmark DIMACS (tcc_graphs).',
    },
  ];

  const horizontalSkillGroups = [
    {
      category: 'Desenvolvimento Web Full-Stack',
      icon: <Server size={17} color="var(--color-corporate)" />,
      skills: [
        { name: 'Java', icon: <Code2 size={13} /> },
        { name: 'Spring Boot', icon: <Server size={13} /> },
        { name: 'Javascript', icon: <Code2 size={13} /> },
        { name: 'Node.js', icon: <Cpu size={13} /> },
        { name: 'React.js', icon: <Layers size={13} /> },
        { name: 'Python', icon: <Code2 size={13} /> },
        { name: 'FastAPI', icon: <Server size={13} /> },
        { name: 'PostgresSQL', icon: <Database size={13} /> },
        { name: 'MySQL', icon: <Database size={13} /> },
        { name: 'NoSQL', icon: <Database size={13} /> },
      ],
    },
    {
      category: 'Engenharia de Software & Arquitetura',
      icon: <Layers size={17} color="var(--color-corporate)" />,
      skills: [
        { name: 'Modelagem UML', icon: <GitBranch size={13} /> },
        { name: 'Padrões de Projeto (GoF)', icon: <Layers size={13} /> },
        { name: 'Engenharia de Requisitos', icon: <FileCheck size={13} /> },
        { name: 'APIs REST', icon: <Layers size={13} /> },
        { name: 'Design & Prototipação com Figma', icon: <Layers size={13} /> },
      ],
    },
    {
      category: 'Pesquisa Científica & Sistemas Veiculares',
      icon: <Cpu size={17} color="var(--color-academic)" />,
      skills: [
        { name: 'Protocolo & Rede CAN', icon: <Car size={13} /> },
        { name: 'Aprendizagem Federada', icon: <Network size={13} /> },
        { name: 'Sistemas Distribuídos', icon: <Network size={13} /> },
        { name: 'Simulação Automotiva', icon: <Activity size={13} /> },
        { name: 'Raspberry Pi', icon: <Cpu size={13} /> },
      ],
    },
    {
      category: 'Ambiente & Ferramentas',
      icon: <Wrench size={17} color="var(--color-accent-teal)" />,
      skills: [
        { name: 'Git & GitHub', icon: <GitBranch size={13} /> },
        { name: 'GNU/Linux', icon: <Terminal size={13} /> },
        { name: 'Jenkins', icon: <GitBranch size={13} /> },
        { name: 'Docker', icon: <Layers size={13} /> }
      ],
    },
  ];

  const certifications = [
    {
      title: 'OCI Generative AI Professional',
      issuer: 'Oracle Cloud Infrastructure',
      badge: 'Certificação Oficial',
      iconColor: 'var(--color-academic)',
    },
    {
      title: 'Java Completo: do Zero ao Profissional',
      issuer: 'Formação Especializada',
      badge: 'Desenvolvimento Java',
      iconColor: 'var(--color-corporate)',
    },
    {
      title: 'Data Science Essentials with Python',
      issuer: 'Python Científico & IA',
      badge: 'Ciência de Dados',
      iconColor: '#059669',
    },
  ];

  return (
    <section id="experiencia" className="section" style={{ background: 'rgba(244, 243, 237, 0.35)', padding: '4rem 0' }}>
      <div className="container">
        {/* Trajetória Timeline */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <div className="section-tag">
              <GraduationCap size={13} color="var(--color-academic)" />
              <span>Trajetória</span>
            </div>
            <h2 className="serif-heading section-title" style={{ fontSize: 'clamp(1.9rem, 3vw, 2.5rem)', margin: '0.35rem 0' }}>
              Experiência & Formação
            </h2>
            <p className="section-description">
              Destaque para a atuação corporativa no <strong>BNDES</strong>, duas pesquisas no <strong>Inmetro</strong> (Projeto MobiCiber e Aprendizagem Federada) e a formação no <strong>CEFET/RJ</strong>.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {timeline.map((item, index) => (
              <div
                key={index}
                className="glass-card timeline-row"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'grid',
                  gridTemplateColumns: '260px 1fr',
                  gap: '1.5rem',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                    {item.icon}
                    <span className={`badge ${item.badgeClass}`} style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem' }}>
                      {item.type}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {item.institution}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {item.period}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>
                    {item.location}
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.25rem 0' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competências Técnicas na Horizontal agrupadas por foco */}
        <div id="habilidades" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <div className="section-tag">
              <Wrench size={13} color="var(--color-corporate)" />
              <span>Competências</span>
            </div>
            <h2 className="serif-heading section-title" style={{ fontSize: 'clamp(1.9rem, 3vw, 2.5rem)', margin: '0.35rem 0' }}>
              Competências Técnicas
            </h2>
            <p className="section-description">
              Habilidades e ferramentas agrupadas por foco de atuação
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {horizontalSkillGroups.map((group, idx) => (
              <div
                key={idx}
                className="glass-card skill-row"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'grid',
                  gridTemplateColumns: '260px 1fr',
                  gap: '1.5rem',
                  alignItems: 'center',
                }}
              >
                {/* Group Title & Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(0, 0, 0, 0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {group.icon}
                  </div>
                  <h3 style={{ fontSize: '0.925rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                    {group.category}
                  </h3>
                </div>

                {/* Horizontal Skill Pills with individual icons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.35rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        background: '#ffffff',
                        border: '1px solid var(--border-light)',
                        boxShadow: 'var(--shadow-sm)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-corporate)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-light)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
                        {skill.icon}
                      </span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificações Apresentadas Separadamente + Idiomas */}
        <div>
          <div className="section-header" style={{ marginBottom: '1.75rem' }}>
            <div className="section-tag">
              <Award size={13} color="var(--color-academic)" />
              <span>Qualificações</span>
            </div>
            <h2 className="serif-heading" style={{ fontSize: '1.85rem', margin: '0.25rem 0' }}>
              Certificações & Idiomas
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(0, 0, 0, 0.04)',
                      color: cert.iconColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0, lineHeight: 1.3 }}>
                      {cert.title}
                    </h3>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.25rem 0 0 0' }}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <div>
                  <span className="badge badge-neutral" style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem' }}>
                    {cert.badge}
                  </span>
                </div>
              </div>
            ))}

            {/* Languages Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '0.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'var(--color-corporate-light)',
                    color: 'var(--color-corporate)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Languages size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                    Idiomas
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: '0.25rem 0 0 0' }}>
                    <strong>Português:</strong> Nativo / Bilíngue
                  </p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: '0.15rem 0 0 0' }}>
                    <strong>Inglês:</strong> Intermediário
                  </p>
                </div>
              </div>
              <div>
                <span className="badge badge-corporate" style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem' }}>
                  Comunicação Global
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .timeline-row, .skill-row {
            grid-template-columns: 1fr !important;
            gap: 0.85rem !important;
          }
        }
      `}</style>
    </section>
  );
}
