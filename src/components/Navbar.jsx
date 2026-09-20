import { useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Competências', href: '#habilidades' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: '1rem',
        zIndex: 50,
        width: '100%',
        maxWidth: '1140px',
        margin: '0 auto',
        padding: '0 1.25rem',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1.4rem',
          background: 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-full)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#sobre"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1e3a8a, #0f172a)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '0.85rem',
              letterSpacing: '-0.02em',
              boxShadow: '0 2px 6px rgba(30, 58, 138, 0.25)',
            }}
          >
            EB
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.925rem',
                color: 'var(--text-primary)',
                lineHeight: 1.1,
              }}
            >
              Erick Borba
            </div>
            <div
              style={{
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.02em',
              }}
            >
              Desenvolvedor
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.25rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action icons / Quick Contacts */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
          }}
        >
          <a
            href="https://github.com/erick1-618"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub de Erick Borba"
            style={{
              padding: '0.45rem',
              borderRadius: '50%',
              color: 'var(--text-secondary)',
              background: 'rgba(0, 0, 0, 0.03)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#000000';
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.03)';
            }}
          >
            <GithubIcon size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/erick1618/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn de Erick Borba"
            style={{
              padding: '0.45rem',
              borderRadius: '50%',
              color: '#0a66c2',
              background: 'rgba(10, 102, 194, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(10, 102, 194, 0.16)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(10, 102, 194, 0.08)';
            }}
          >
            <LinkedinIcon size={17} />
          </a>

          <a
            href="mailto:erickcefetbcc@gmail.com"
            title="Enviar e-mail"
            className="btn btn-primary"
            style={{
              fontSize: '0.8rem',
              padding: '0.45rem 0.9rem',
              borderRadius: 'var(--radius-full)',
            }}
          >
            <Mail size={14} />
            <span className="hide-on-mobile">Contato</span>
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-nav-toggle"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.35rem',
              color: 'var(--text-primary)',
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          style={{
            marginTop: '0.65rem',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .mobile-nav-toggle {
            display: flex !important;
          }
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
