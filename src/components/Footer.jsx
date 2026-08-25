import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: '#04060a',
      borderTop: '1px solid var(--border-glass)',
      padding: '60px 0 30px 0',
      marginTop: 'auto'
    }}>
      <div className="container">
        
        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '40px',
          marginBottom: '40px'
        }} className="footer-grid">
          
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: 'var(--primary-gradient)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Shield size={16} color="#070a12" strokeWidth={2.5} />
              </div>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: 800,
                color: 'var(--text-white)'
              }}>
                VAULT<span style={{ color: 'var(--primary-teal)' }}>SHIELD</span>
              </span>
            </div>
            
            <p style={{
              fontSize: '0.84rem',
              color: 'var(--text-muted)',
              lineHeight: 1.65,
              maxWidth: '360px',
              marginBottom: '20px'
            }}>
              VaultShield is the global open-access educational and market intelligence protocol dedicated to decentralized cryptocurrency asset protection, smart contract audits, and risk-underwriting analysis.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 size={13} color="var(--primary-teal)" /> Tier-1 Underwritten
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Lock size={13} color="var(--primary-teal)" /> Multi-Sig Verified
              </span>
            </div>
          </div>

          {/* Coverage Models */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.95rem',
              fontWeight: 700,
              color: 'var(--text-white)',
              marginBottom: '16px'
            }}>
              Coverage Models
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              <li><Link to="/vault-insurance">Cold Storage Underwriting</Link></li>
              <li><Link to="/smart-contracts">Smart Contract Exploit Shield</Link></li>
              <li><Link to="/security-audits">DeFi Yield Protection</Link></li>
              <li><Link to="/claims">Slashing Indemnity</Link></li>
              <li><Link to="/calculator">Actuarial Risk Engine</Link></li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.95rem',
              fontWeight: 700,
              color: 'var(--text-white)',
              marginBottom: '16px'
            }}>
              Legal &amp; Policy
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/disclaimer">Financial Disclaimer</Link></li>
              <li><Link to="/privacy">GDPR &amp; Cookie Compliance</Link></li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.95rem',
              fontWeight: 700,
              color: 'var(--text-white)',
              marginBottom: '16px'
            }}>
              Organization
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              <li><Link to="/about">About Editorial Board</Link></li>
              <li><Link to="/contact">Contact &amp; Underwriting Desk</Link></li>
              <li><Link to="/security-audits">Security Disclosure</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid var(--border-glass)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.78rem',
          color: 'var(--text-muted)',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            © {new Date().getFullYear()} VaultShield Digital Asset Protocol. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px', fontFamily: 'var(--font-mono)' }}>
            <span>Cloudflare Edge SSL</span>
            <span>•</span>
            <span>E-E-A-T Verified</span>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
