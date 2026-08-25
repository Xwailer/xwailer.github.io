import React from 'react';
import SeoMeta from '../components/SeoMeta';
import AdBanner from '../components/AdBanner';
import ProtocolRadar from '../components/ProtocolRadar';
import { Users, Award, Shield, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <>
      <SeoMeta
        title="About VaultShield: Web3 Security & Underwriting Research"
        description="Learn about the VaultShield research board, actuarial underwriting methodology, and our mission to secure the decentralized digital asset economy."
      />

      <AdBanner type="leaderboard" />

      <main className="container main-layout">
        <div>
          <article className="editorial-card">
            
            <div style={{ padding: '36px 40px' }} className="article-body-inner">
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span className="badge-tier">👥 Editorial &amp; Actuarial Board</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  E-E-A-T Verified
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
                About VaultShield: Web3 Security &amp; Underwriting Research
              </h1>

              <div style={{ color: '#d1d5db', fontSize: '1.02rem', lineHeight: 1.75 }}>
                <p style={{ marginBottom: '20px' }}>
                  VaultShield was established in 2026 by a consortium of blockchain security engineers, quantitative actuaries, and institutional risk officers with the objective of creating standardized, peer-reviewed benchmarks for decentralized asset risk underwriting.
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
                  <BookOpen size={20} color="var(--primary-teal)" />
                  Our Research Methodology
                </h2>

                <p style={{ marginBottom: '20px' }}>
                  Our editorial board reviews formal verification proofs, smart contract decompilations, and multi-sig security architectures to provide transparent, unbiased risk intelligence to institutional investors, Web3 protocols, and the wider cryptocurrency community.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '30px 0' }} className="about-grid">
                  <div style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: 'var(--radius-md)',
                    padding: '22px'
                  }}>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--text-white)', marginBottom: '8px' }}>
                      🛡️ Integrity &amp; Neutrality
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      We do not accept undisclosed endorsements. All risk indices and security audit reviews are conducted under open mathematical rubrics.
                    </p>
                  </div>

                  <div style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: 'var(--radius-md)',
                    padding: '22px'
                  }}>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--text-white)', marginBottom: '8px' }}>
                      ⚡ Real-Time Intelligence
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      Our mempool tracking sensors monitor decentralized bridge activities and smart contract states 24 hours a day, 365 days a year.
                    </p>
                  </div>
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

      <style>{`
        @media (max-width: 640px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
