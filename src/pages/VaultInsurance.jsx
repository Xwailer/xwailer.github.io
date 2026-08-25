import React from 'react';
import SeoMeta from '../components/SeoMeta';
import AdBanner from '../components/AdBanner';
import ProtocolRadar from '../components/ProtocolRadar';
import RiskCalculator from '../components/RiskCalculator';
import { Lock, Shield, Key, CheckCircle, Server } from 'lucide-react';

export default function VaultInsurance() {
  return (
    <>
      <SeoMeta
        title="Institutional Crypto Vault & Cold Storage Insurance Guide 2026"
        description="Comprehensive analysis of institutional multi-sig digital asset custody, air-gapped cold storage underwriting, and private key indemnity."
      />

      <AdBanner type="leaderboard" />

      <main className="container main-layout">
        <div>
          <article className="editorial-card">
            
            <div style={{ position: 'relative', width: '100%', maxHeight: '420px', overflow: 'hidden', background: '#000' }}>
              <img
                src="vault_hero.jpg"
                alt="Institutional Cold Storage Vault"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ padding: '36px 40px' }} className="article-body-inner">
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span className="badge-tier">Custodial Risk &amp; Underwriting</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Institutional Standard
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
                Institutional Crypto Vault &amp; Cold Storage Insurance Guide 2026
              </h1>

              <div style={{ color: '#d1d5db', fontSize: '1.02rem', lineHeight: 1.75 }}>
                <p style={{ marginBottom: '20px' }}>
                  Institutional digital asset cold storage insurance provides definitive indemnity against private key compromise, physical hardware destruction, and insider malfeasance within multi-signature (multi-sig) custodial facilities.
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
                  <Key size={20} color="var(--primary-teal)" />
                  Underwriting Requirements for Institutional Vaults
                </h2>

                <p style={{ marginBottom: '20px' }}>
                  Before an insurance syndicate underwrites a digital asset cold vault, underwriters perform strict penetration testing and key ceremony verifications:
                </p>

                <ul style={{ marginLeft: '24px', marginBottom: '24px' }}>
                  <li style={{ marginBottom: '10px' }}>
                    <strong>Air-Gapped Key Generation:</strong> Sharded seed generation conducted in Faraday cages with zero network connectivity.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <strong>Geographic Multi-Sig Distribution:</strong> 3-of-5 or 4-of-7 threshold signing quorum distributed across distinct jurisdictions.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <strong>MPC (Multi-Party Computation):</strong> Cryptographic secret sharing eliminating single points of key compromise.
                  </li>
                </ul>

                <div className="table-container">
                  <table className="fintech-table">
                    <thead>
                      <tr>
                        <th>Covered Incident</th>
                        <th>Policy Indemnity</th>
                        <th>Standard Claim SLA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Private Key Theft via Physical Coercion</td>
                        <td>100% Capital Restoration</td>
                        <td>24 - 48 Hours</td>
                      </tr>
                      <tr>
                        <td>Hardware Security Module (HSM) Exploit</td>
                        <td>100% Capital Restoration</td>
                        <td>48 Hours</td>
                      </tr>
                      <tr>
                        <td>Insider Collusion &amp; Key Destruction</td>
                        <td>100% Capital Restoration</td>
                        <td>48 - 72 Hours</td>
                      </tr>
                      <tr>
                        <td>User Phishing / Negligent Key Leak</td>
                        <td>Excluded by Default</td>
                        <td>N/A</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <AdBanner type="in-article" />

                <RiskCalculator title="Cold Vault Insurance Premium Calculator" />

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
