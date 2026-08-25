import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Vault Insurance', path: '/vault-insurance' },
    { name: 'Smart Contracts', path: '/smart-contracts' },
    { name: 'Security Audits', path: '/security-audits' },
    { name: 'Claims Flow', path: '/claims' },
    { name: 'Risk Calculator', path: '/calculator' },
    { name: 'About Us', path: '/about' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      background: 'rgba(7, 10, 18, 0.95)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      borderBottom: '1px solid var(--border-glass)',
      zIndex: 1000,
      padding: '14px 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            background: 'var(--primary-gradient)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)',
            flexShrink: 0
          }}>
            <Shield size={20} color="#070a12" strokeWidth={2.5} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.35rem',
              fontWeight: 800,
              color: 'var(--text-white)',
              lineHeight: 1.1,
              letterSpacing: '-0.3px'
            }}>
              VAULT<span style={{ color: 'var(--primary-teal)' }}>SHIELD</span>
            </span>
            <span style={{
              fontSize: '0.65rem',
              color: 'var(--text-muted)',
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Crypto Insurance Protocol
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontSize: '0.88rem',
                fontWeight: 600,
                padding: '6px 12px',
                borderRadius: 'var(--radius-sm)',
                color: isActive(link.path) ? 'var(--text-white)' : 'var(--text-secondary)',
                background: isActive(link.path) ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                border: isActive(link.path) ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent'
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div className="badge-tier" style={{ display: 'none' }}>
            <ShieldCheck size={14} />
            <span>Tier-1 Underwriting</span>
          </div>
          
          <Link to="/calculator" className="btn-primary hide-on-mobile" style={{ padding: '8px 18px', fontSize: '0.84rem' }}>
            <span>Get Coverage</span>
            <ArrowRight size={14} />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-white)',
              cursor: 'pointer',
              display: 'none',
              padding: '6px'
            }}
            className="mobile-toggle-btn"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          background: '#070a12',
          borderTop: '1px solid var(--border-glass)',
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              style={{
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: isActive(link.path) ? 'var(--primary-teal)' : 'var(--text-secondary)',
                background: isActive(link.path) ? 'rgba(16, 185, 129, 0.08)' : 'transparent'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
