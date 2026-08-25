import React from 'react';
import SeoMeta from '../components/SeoMeta';
import AdBanner from '../components/AdBanner';
import ProtocolRadar from '../components/ProtocolRadar';
import { Scale, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Claims() {
  const steps = [
    {
      num: '01',
      title: 'Submit Incident Claim Notice',
      desc: 'Policyholders submit the blockchain loss transaction hash, affected wallet address, and timestamp directly via the cryptographic claims interface.'
    },
    {
      num: '02',
      title: 'On-Chain Forensic Audit',
      desc: 'Independent blockchain risk analysts and certified security auditors verify the root cause and confirm policy active status.'
    },
    {
      num: '03',
      title: 'Multi-Sig Underwriting Disbursement',
      desc: 'Upon quorum validation, the collateralized liquidity pool automatically disburses the insured capital payout in stable digital assets (USDC / USDT).'
    }
  ];

  return (
    <>
      <SeoMeta
        title="Decentralized Insurance Claim Settlement Protocol"
        description="Learn how policyholders submit, verify, and receive reimbursement for insured digital asset losses through our decentralized claims settlement architecture."
      />

      <AdBanner type="leaderboard" />

      <main className="container main-layout">
        <div>
          <article className="editorial-card">
            
            <div style={{ padding: '36px 40px' }} className="article-body-inner">
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span className="badge-tier">⚖️ On-Chain Settlement Protocol</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  SLA 48 - 72 Hours
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
                Decentralized Insurance Claim Settlement Procedure
              </h1>

              <div style={{ color: '#d1d5db', fontSize: '1.02rem', lineHeight: 1.75 }}>
                <p style={{ marginBottom: '24px' }}>
                  VaultShield operates an automated, transparent claims processing framework designed to eliminate traditional insurance bureaucracy while ensuring rigorous forensic validation.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', margin: '30px 0' }}>
                  {steps.map((step) => (
                    <div
                      key={step.num}
                      style={{
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-glass)',
                        borderRadius: 'var(--radius-md)',
                        padding: '24px',
                        display: 'flex',
                        gap: '20px',
                        alignItems: 'flex-start'
                      }}
                    >
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid var(--border-glow)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        color: 'var(--primary-teal)',
                        flexShrink: 0
                      }}>
                        {step.num}
                      </div>

                      <div>
                        <h3 style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.15rem',
                          fontWeight: 700,
                          color: 'var(--text-white)',
                          marginBottom: '6px'
                        }}>
                          {step.title}
                        </h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <AdBanner type="in-article" />

                <div style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
                  border: '1px solid var(--border-glow)',
                  borderRadius: 'var(--radius-md)',
                  padding: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px',
                  marginTop: '32px'
                }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--text-white)', marginBottom: '4px' }}>
                      Ready to File a Claim or Request Verification?
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      Our dedicated on-chain forensic analysts are on standby 24/7.
                    </p>
                  </div>

                  <Link to="/contact" className="btn-primary">
                    <span>Contact Claims Desk</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>

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
