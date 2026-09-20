import { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { getCurrentYear } from '../utils/dateUtils';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = 'erickcefetbcc@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer id="contato" className="section" style={{ padding: '3.5rem 0 2.5rem 0' }}>
      <div className="container">
        {/* Main Contact Card */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem 2rem',
            textAlign: 'center',
            maxWidth: '720px',
            margin: '0 auto 3rem auto',
            border: '1px solid rgba(215, 211, 200, 0.95)',
          }}
        >
          <div className="section-tag" style={{ margin: '0 auto 0.85rem auto' }}>
            <MessageSquare size={12} color="var(--color-corporate)" />
            <span>Contato</span>
          </div>

          <h2 className="serif-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '0.65rem' }}>
            Entre em contato comigo!
          </h2>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 1.75rem auto', lineHeight: 1.55 }}>
            Estou aberto para oportunidades profissionais em desenvolvimento de software e para contribuir em projetos de pesquisa.
          </p>

          {/* Quick Email Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)',
              background: '#ffffff',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '1.5rem',
              maxWidth: '100%',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Mail size={15} color="var(--color-corporate)" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              {email}
            </span>
            <button
              onClick={handleCopyEmail}
              style={{
                background: copied ? '#10b981' : 'rgba(30, 58, 138, 0.08)',
                color: copied ? '#ffffff' : 'var(--color-corporate)',
                border: 'none',
                borderRadius: 'var(--radius-full)',
                padding: '0.3rem 0.65rem',
                fontSize: '0.72rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              title="Copiar e-mail"
            >
              {copied ? (
                <>
                  <Check size={11} />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy size={11} />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a
              href="https://www.linkedin.com/in/erick1618/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ background: '#0a66c2', borderColor: '#0a66c2', fontSize: '0.825rem', padding: '0.5rem 1rem' }}
            >
              <LinkedinIcon size={15} />
              LinkedIn
              <ArrowUpRight size={13} />
            </a>

            <a
              href="https://github.com/erick1-618"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ fontSize: '0.825rem', padding: '0.5rem 1rem' }}
            >
              <GithubIcon size={15} />
              GitHub (@erick1-618)
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Bottom Credits */}
        <div
          style={{
            borderTop: '1px solid var(--border-light)',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            <strong style={{ color: 'var(--text-primary)' }}>Erick Borba</strong> — CEFET/RJ • BNDES • Inmetro
          </div>
          <div>
            © {getCurrentYear()} • Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
