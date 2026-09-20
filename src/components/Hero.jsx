import { ArrowRight, Mail } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section id="sobre" className="section" style={{ paddingTop: '4rem', paddingBottom: '3.5rem' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.25fr 0.75fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column */}
          <div>
            {/* Tagline */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.85)',
                border: '1px solid var(--border-light)',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--color-corporate)',
                marginBottom: '1.25rem',
              }}
            >
              <span>BNDES</span>
              <span style={{ color: 'var(--border-strong)' }}>•</span>
              <span>Inmetro</span>
              <span style={{ color: 'var(--border-strong)' }}>•</span>
              <span>CEFET/RJ</span>
            </div>

            {/* Headline */}
            <h1
              className="serif-heading"
              style={{
                fontSize: 'clamp(2.3rem, 4.2vw, 3.6rem)',
                lineHeight: 1.12,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              Desenvolvedor Full-Stack &{' '}
              <span
                style={{
                  fontStyle: 'italic',
                  color: 'var(--color-corporate)',
                }}
              >
                Pesquisador IC
              </span>
              .
            </h1>

            {/* Tech stack inline */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                marginBottom: '1.25rem',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              <span>Java</span>
              <span>/</span>
              <span>Spring Boot</span>
              <span>/</span>
              <span>Python</span>
              <span>/</span>
              <span>Node.js</span>
              <span>/</span>
              <span>Sistemas Distribuídos</span>
            </div>

            {/* Clean, concise bio */}
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                marginBottom: '1.75rem',
                maxWidth: '560px',
              }}
            >
              Estudante de Ciência da Computação no <strong>CEFET/RJ</strong>. Atuo como estagiário em análise de sistemas no <strong>BNDES</strong> e como pesquisador IC em cibersegurança veicular no <strong>Inmetro</strong>.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                alignItems: 'center',
              }}
            >
              <a href="#projetos" className="btn btn-primary">
                Projetos em Destaque
                <ArrowRight size={15} />
              </a>

              <a href="#experiencia" className="btn btn-secondary">
                Ver Experiência
              </a>

              <a
                href="mailto:erickcefetbcc@gmail.com"
                className="btn btn-secondary"
                style={{ color: 'var(--text-secondary)' }}
                title="Enviar e-mail direto"
              >
                <Mail size={15} />
                Contato
              </a>
            </div>
          </div>

          {/* Right Column: Portrait Photo Only */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Subtle aesthetic backdrop offset */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                maxWidth: '290px',
                aspectRatio: '4 / 5',
                borderRadius: '26px',
                background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.1), rgba(180, 83, 9, 0.12))',
                transform: 'rotate(-3deg)',
                zIndex: 0,
              }}
            />

            {/* Image */}
            <img
              src={profileImg}
              alt="Erick Borba"
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '290px',
                aspectRatio: '4 / 5',
                borderRadius: '24px',
                objectFit: 'cover',
                objectPosition: 'center 20%',
                border: '4px solid #ffffff',
                boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.15), 0 0 0 1px rgba(215, 211, 200, 0.6)',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
