import React from 'react';
import SeoMeta from '../components/SeoMeta';
import AdBanner from '../components/AdBanner';
import ProtocolRadar from '../components/ProtocolRadar';
import { ShieldCheck, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <>
      <SeoMeta
        title="Privacy Policy & Data Protection Disclosure"
        description="VaultShield privacy statement, GDPR/CCPA data compliance, cookie usage policy, and programmatic advertising disclosures."
      />

      <AdBanner type="leaderboard" />

      <main className="container main-layout">
        <div>
          <article className="editorial-card">
            
            <div style={{ padding: '36px 40px' }} className="article-body-inner">
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span className="badge-tier">🔒 GDPR &amp; CCPA Compliance</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Effective 2026
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
                Privacy Policy &amp; Data Protection Disclosure
              </h1>

              <div style={{ color: '#d1d5db', fontSize: '1.02rem', lineHeight: 1.75 }}>
                <p style={{ marginBottom: '20px' }}>
                  VaultShield is dedicated to safeguarding user privacy and adhering strictly to international data protection statutes including the European Union General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
                </p>

                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: 'var(--text-white)',
                  margin: '30px 0 14px 0'
                }}>
                  1. Information We Do NOT Collect
                </h2>
                <p style={{ marginBottom: '16px' }}>
                  VaultShield never requests, logs, or stores private cryptographic keys, seed phrases, recovery passwords, or personal banking credentials. Any calculations conducted within our interactive tools execute entirely on client-side browser runtimes without remote server transmission.
                </p>

                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: 'var(--text-white)',
                  margin: '30px 0 14px 0'
                }}>
                  2. Cookies &amp; Programmatic Advertising
                </h2>
                <p style={{ marginBottom: '16px' }}>
                  Our website collaborates with reputable programmatic advertising partners (including Ezoic, NitroPay, Media.net, Google AdSense, and A-ADS) that may utilize standard HTTP cookies to serve contextual advertisements. Users may disable third-party cookies via standard browser settings at any time without impacting core site accessibility.
                </p>

                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: 'var(--text-white)',
                  margin: '30px 0 14px 0'
                }}>
                  3. Contacting the Data Protection Officer
                </h2>
                <p style={{ marginBottom: '16px' }}>
                  For inquiries concerning our privacy practices or data rights, please contact our compliance desk at <code>privacy@vaultshield.protocol</code>.
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
