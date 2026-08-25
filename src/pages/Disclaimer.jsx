import React from 'react';
import SeoMeta from '../components/SeoMeta';
import AdBanner from '../components/AdBanner';
import ProtocolRadar from '../components/ProtocolRadar';
import { AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <>
      <SeoMeta
        title="Financial & Cryptocurrency Investment Disclaimer"
        description="Important regulatory disclosure regarding cryptocurrency volatility, smart contract risks, and financial advice disclaimers."
      />

      <AdBanner type="leaderboard" />

      <main className="container main-layout">
        <div>
          <article className="editorial-card">
            
            <div style={{ padding: '36px 40px' }} className="article-body-inner">
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span className="badge-tier" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent-amber)', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
                  ⚠️ Regulatory Notice
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Compliance Disclosure
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
                Financial &amp; Cryptocurrency Investment Disclaimer
              </h1>

              <div style={{ color: '#d1d5db', fontSize: '1.02rem', lineHeight: 1.75 }}>
                <div style={{
                  background: 'rgba(245, 158, 11, 0.08)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  margin: '20px 0',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}>
                  <AlertTriangle size={24} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--text-white)', marginBottom: '6px' }}>
                      Cryptocurrency Risk Warning
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Digital asset investments, decentralized finance staking, and liquidity pool allocations involve substantial financial risk, market volatility, and code vulnerability exposures. Never commit capital you cannot afford to lose entirely.
                    </p>
                  </div>
                </div>

                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: 'var(--text-white)',
                  margin: '30px 0 14px 0'
                }}>
                  No Financial or Investment Advice
                </h2>
                <p style={{ marginBottom: '16px' }}>
                  No content, calculation output, or security rating published on VaultShield constitutes financial, legal, tax, or investment advice. Always conduct independent due diligence with certified financial advisors prior to executing digital asset transactions.
                </p>

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
