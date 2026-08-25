import React from 'react';
import SeoMeta from '../components/SeoMeta';
import AdBanner from '../components/AdBanner';
import ProtocolRadar from '../components/ProtocolRadar';
import { Search, ShieldCheck, CheckCircle2, AlertCircle, FileCode } from 'lucide-react';

export default function SecurityAudits() {
  const auditLogs = [
    { protocol: 'Aave v3 Core Protocol', auditor: 'CertiK / OpenZeppelin', date: '2026 Q1', score: '99/100', status: 'Passed' },
    { protocol: 'Uniswap v4 Hooks Architecture', auditor: 'Dedaub / Trail of Bits', date: '2026 Q1', score: '98/100', status: 'Passed' },
    { protocol: 'Lido Ethereum Staking Contracts', auditor: 'Sigma Prime', date: '2025 Q4', score: '97/100', status: 'Passed' },
    { protocol: 'Curve Finance Tricrypto Pools', auditor: 'MixBytes', date: '2025 Q4', score: '96/100', status: 'Passed' }
  ];

  return (
    <>
      <SeoMeta
        title="Blockchain Security Audits & Protocol Risk Intelligence 2026"
        description="Public repository of formal verification audits, penetration tests, and smart contract vulnerability disclosures across decentralized protocols."
      />

      <AdBanner type="leaderboard" />

      <main className="container main-layout">
        <div>
          <article className="editorial-card">
            
            <div style={{ position: 'relative', width: '100%', maxHeight: '420px', overflow: 'hidden', background: '#000' }}>
              <img
                src="security_hero.jpg"
                alt="Blockchain Security Auditing"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ padding: '36px 40px' }} className="article-body-inner">
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span className="badge-tier">Formal Verification &amp; Security Audits</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Live Audit Index
                </span>
              </div>

              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.3rem)',
                fontWeight: 800,
                color: 'var(--text-white)',
                lineHeight: 1.25,
                marginBottom: '20px'
              }}>
                Blockchain Security Audits &amp; Protocol Risk Intelligence 2026
              </h1>

              <div style={{ color: '#d1d5db', fontSize: '1.02rem', lineHeight: 1.75 }}>
                <p style={{ marginBottom: '20px' }}>
                  VaultShield maintains an open database of formal verification audits, smart contract penetration tests, and real-time security disclosures across Tier-1 blockchain ecosystems.
                </p>

                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: 'var(--text-white)',
                  margin: '32px 0 16px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <ShieldCheck size={20} color="var(--primary-teal)" />
                  Auditing Standards &amp; Methodology
                </h2>

                <p style={{ marginBottom: '20px' }}>
                  Every audited protocol listed on VaultShield undergoes rigorous static analysis, formal mathematical verification, and symbolic execution testing before receiving an underwriting score.
                </p>

                <div className="table-container">
                  <table className="fintech-table">
                    <thead>
                      <tr>
                        <th>Protocol Target</th>
                        <th>Lead Auditor</th>
                        <th>Audit Period</th>
                        <th>Health Score</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {auditLogs.map((log) => (
                        <tr key={log.protocol}>
                          <td><strong style={{ color: '#fff' }}>{log.protocol}</strong></td>
                          <td>{log.auditor}</td>
                          <td>{log.date}</td>
                          <td><span style={{ color: 'var(--primary-teal)', fontWeight: 700 }}>{log.score}</span></td>
                          <td>
                            <span style={{
                              background: 'rgba(16, 185, 129, 0.1)',
                              color: 'var(--primary-teal)',
                              padding: '2px 8px',
                              borderRadius: '4px',
                              fontSize: '0.75rem',
                              fontWeight: 700
                            }}>
                              {log.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <AdBanner type="in-article" />

              </div>

            </div>

          </article>
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <AdBanner type="sidebar-sticky" />
          <ProtocolRadar />
        </aside>
      </main>

      <AdBanner type="bottom-anchor" />
    </>
  );
}
