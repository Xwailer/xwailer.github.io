import React from 'react';
import SeoMeta from '../components/SeoMeta';
import AdBanner from '../components/AdBanner';
import ProtocolRadar from '../components/ProtocolRadar';
import RiskCalculator from '../components/RiskCalculator';
import { Cpu, ShieldCheck, Zap, AlertTriangle } from 'lucide-react';

export default function SmartContracts() {
  return (
    <>
      <SeoMeta
        title="Smart Contract Exploit & DeFi Protocol Insurance: Risk Architecture"
        description="Detailed guide to smart contract vulnerability underwriting, re-entrancy attack protection, and automated on-chain claims settlement."
      />

      <AdBanner type="leaderboard" />

      <main className="container main-layout">
        <div>
          <article className="editorial-card">
            
            <div style={{ position: 'relative', width: '100%', maxHeight: '420px', overflow: 'hidden', background: '#000' }}>
              <img
                src="security_hero.jpg"
                alt="Smart Contract Security Network"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ padding: '36px 40px' }} className="article-body-inner">
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span className="badge-tier badge-cyan">Code Vulnerability &amp; Exploit Protection</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  EVM / Solana Underwriting
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
                Smart Contract Exploit &amp; DeFi Protocol Insurance: Risk Architecture
              </h1>

              <div style={{ color: '#d1d5db', fontSize: '1.02rem', lineHeight: 1.75 }}>
                <p style={{ marginBottom: '20px' }}>
                  Smart contract insurance safeguards decentralized finance liquidity providers, staking protocols, and automated market makers against code vulnerabilities, re-entrancy exploits, and flash-loan attacks.
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
                  <Zap size={20} color="var(--primary-teal)" />
                  Automated Actuarial Loss Verification
                </h2>

                <p style={{ marginBottom: '20px' }}>
                  Unlike bureaucratic legacy claims, DeFi smart contract insurance leverages on-chain state verification:
                </p>

                <ul style={{ marginLeft: '24px', marginBottom: '24px' }}>
                  <li style={{ marginBottom: '10px' }}>
                    <strong>Exploit Transaction Hash Confirmation:</strong> Automated mempool tracking verifies unauthorized capital draining.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <strong>Audit Consortium Consensus:</strong> Verified auditors ratify that the contract was executed within terms without governance collusion.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <strong>Direct Payout Execution:</strong> Underwriting pools release stablecoin payouts directly to the affected wallet address.
                  </li>
                </ul>

                <AdBanner type="in-article" />

                <RiskCalculator title="Smart Contract Exploit Premium Estimator" />

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
