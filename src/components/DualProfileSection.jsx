import { Building2, Cpu, Check } from 'lucide-react';

export default function DualProfileSection() {
  return (
    <section id="atuacao" className="section" style={{ background: 'rgba(244, 243, 237, 0.4)', padding: '4rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <span>Frentes de Trabalho</span>
          </div>
          <h2 className="serif-heading section-title" style={{ fontSize: 'clamp(1.9rem, 3vw, 2.5rem)' }}>
            Corporativo & Pesquisa
          </h2>
        </div>

        {/* 2 Clean Cards */}
        <div className="grid-2" style={{ gap: '1.75rem' }}>
          {/* Card 1: BNDES */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderTop: '3px solid var(--color-corporate)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'var(--color-corporate-light)',
                    color: 'var(--color-corporate)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Building2 size={18} />
                </div>
                <span className="badge badge-corporate">BNDES • Dev Web</span>
              </div>

              <h3 className="sans-heading" style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>
                Desenvolvimento Web & Corporativo
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                Atuação na área de desenvolvimento web do BNDES, construindo aplicações corporativas integradas a bancos de dados relacionais e modeladas com UML.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'Desenvolvimento full-stack com Java, Spring Boot, Node.js e React.',
                  'Modelagem de sistemas (UML), arquitetura e engenharia de requisitos.',
                  'Bancos de dados relacionais e versionamento profissional com Git.',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <Check size={14} color="var(--color-corporate)" style={{ flexShrink: 0, transform: 'translateY(2px)' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              <span className="badge badge-neutral">Java / Spring</span>
              <span className="badge badge-neutral">Node.js</span>
              <span className="badge badge-neutral">React</span>
              <span className="badge badge-neutral">SQL</span>
              <span className="badge badge-neutral">UML</span>
            </div>
          </div>

          {/* Card 2: Inmetro / CEFET */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderTop: '3px solid var(--color-academic)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'var(--color-academic-light)',
                    color: 'var(--color-academic)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Cpu size={18} />
                </div>
                <span className="badge badge-academic">Inmetro • IC/IT & CEFET/RJ</span>
              </div>

              <h3 className="sans-heading" style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>
                Pesquisa Científica & Tecnológica
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                Pesquisa continuada no Inmetro em cibersegurança automotiva e inteligência artificial distribuída, somada à formação acadêmica no CEFET/RJ.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'Projeto MobiCiber: Detecção e proteção contra intrusão em redes e protocolo CAN.',
                  'Sistemas Distribuídos com Aprendizagem Federada para estimativa de frotas.',
                  'TCC na área de Teoria dos Grafos: avaliações de algoritmos SSSP',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <Check size={14} color="var(--color-academic)" style={{ flexShrink: 0, transform: 'translateY(2px)' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              <span className="badge badge-neutral">Projeto MobiCiber</span>
              <span className="badge badge-neutral">Rede CAN</span>
              <span className="badge badge-neutral">Aprendizagem Federada</span>
              <span className="badge badge-neutral">Grafos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
