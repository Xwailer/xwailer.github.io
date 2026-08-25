import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, CheckCircle2, ChevronRight, Activity, Cpu } from 'lucide-react';

export default function ProtocolRadar() {
  const protocols = [
    { name: 'Bitcoin Network Cold Multi-Sig', status: 'Secured', score: '99.9%', active: true },
    { name: 'Aave v3 Core Liquidity', status: 'Insured Pool', score: '100%', active: true },
    { name: 'Uniswap v4 Contracts', status: 'Underwritten', score: '98.5%', active: true },
    { name: 'Chainlink Cross-Chain (CCIP)', status: 'Verified', score: '99.4%', active: true },
    { name: 'LayerZero Endpoint Matrix', status: 'Elevated Gas', score: '95.2%', alert: true }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Resource Hub Panel */}
      <div style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-glass)',
        borderRadius: 'var(--radius-md)',
        padding: '22px'
      }}>
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.1rem',
          fontWeight: 700,
          color: 'var(--text-white)',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <span>📚 Protocol Resource Hub</span>
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { label: 'Vault Insurance Guide', path: '/vault-insurance' },
            { label: 'Smart Contract Protection', path: '/smart-contracts' },
            { label: 'Live Security Audits', path: '/security-audits' },
            { label: 'Claims Settlement Protocol', path: '/claims' },
            { label: 'Risk & Premium Calculator', path: '/calculator' }
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  background: 'var(--bg-page)',
                  border: '1px solid var(--border-glass)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)'
                }}
              >
                <span>{item.label}</span>
                <ChevronRight size={15} color="var(--primary-teal)" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Live Protocol Health */}
      <div style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-glass)',
        borderRadius: 'var(--radius-md)',
        padding: '22px'
      }}>
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.1rem',
          fontWeight: 700,
          color: 'var(--text-white)',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Activity size={18} color="var(--primary-teal)" />
            <span>Protocol Risk Radar</span>
          </div>
          <span style={{
            fontSize: '0.68rem',
            color: 'var(--primary-teal)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700
          }}>
            REAL-TIME
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {protocols.map((p) => (
            <div
              key={p.name}
              style={{
                background: 'var(--bg-page)',
                border: '1px solid var(--border-glass)',
                borderRadius: 'var(--radius-sm)',
                padding: '12px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: p.alert ? 'var(--accent-amber)' : 'var(--primary-teal)',
                  boxShadow: `0 0 6px ${p.alert ? 'var(--accent-amber)' : 'var(--primary-teal)'}`
                }}></span>
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-white)' }}>{p.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{p.status}</div>
                </div>
              </div>

              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: p.alert ? 'var(--accent-amber)' : 'var(--primary-teal)'
              }}>
                {p.score}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
