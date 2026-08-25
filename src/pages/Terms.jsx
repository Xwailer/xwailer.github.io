import React from 'react';
import SeoMeta from '../components/SeoMeta';
import AdBanner from '../components/AdBanner';
import ProtocolRadar from '../components/ProtocolRadar';

export default function Terms() {
  return (
    <>
      <SeoMeta
        title="Terms of Service & Protocol Disclosures"
        description="Terms and conditions governing the access and usage of VaultShield educational and intelligence portal."
      />

      <AdBanner type="leaderboard" />

      <main className="container main-layout">
        <div>
          <article className="editorial-card">
            
            <div style={{ padding: '36px 40px' }} className="article-body-inner">
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span className="badge-tier">📜 Legal Framework</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Terms of Use
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
                Terms of Service &amp; Protocol Disclosures
              </h1>

              <div style={{ color: '#d1d5db', fontSize: '1.02rem', lineHeight: 1.75 }}>
                <p style={{ marginBottom: '20px' }}>
                  By accessing, browsing, or utilizing the information, calculators, and tools available on VaultShield, you signify your irrevocable acceptance of these Terms of Service.
                </p>

                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: 'var(--text-white)',
                  margin: '30px 0 14px 0'
                }}>
                  1. Analytical &amp; Educational Purpose
                </h2>
                <p style={{ marginBottom: '16px' }}>
                  All publications, data indices, risk weights, and actuarial calculators provided on VaultShield are intended strictly for educational, informational, and journalistic analysis. VaultShield is not an FDIC-insured banking institution and does not provide direct custodial storage of user funds.
                </p>

                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: 'var(--text-white)',
                  margin: '30px 0 14px 0'
                }}>
                  2. Intellectual Property &amp; Open Access
                </h2>
                <p style={{ marginBottom: '16px' }}>
                  All proprietary research frameworks, UI designs, and actuarial calculators are protected by international copyright laws. Non-commercial redistribution with explicit source attribution is permitted.
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
