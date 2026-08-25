import React from 'react';
import SeoMeta from '../components/SeoMeta';
import AdBanner from '../components/AdBanner';
import ProtocolRadar from '../components/ProtocolRadar';
import RiskCalculator from '../components/RiskCalculator';

export default function CalculatorPage() {
  return (
    <>
      <SeoMeta
        title="Interactive Crypto Asset Insurance Premium Calculator"
        description="Estimate institutional digital asset and smart contract underwriting premiums in real time using our actuarial risk model."
      />

      <AdBanner type="leaderboard" />

      <main className="container main-layout">
        <div>
          <article className="editorial-card">
            
            <div style={{ padding: '36px 40px' }} className="article-body-inner">
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span className="badge-tier">📊 Actuarial Risk Engine</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Version 4.2 Release
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
                Interactive Crypto Asset Insurance Premium Calculator
              </h1>

              <div style={{ color: '#d1d5db', fontSize: '1.02rem', lineHeight: 1.75 }}>
                <p style={{ marginBottom: '20px' }}>
                  Use our real-time actuarial calculation tool to estimate annual coverage costs for Bitcoin, Ethereum, DeFi liquidity pools, and multi-sig custodial storage facilities.
                </p>

                <RiskCalculator title="Institutional Premium Pricing Engine" />

                <AdBanner type="in-article" />

                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: 'var(--text-white)',
                  margin: '32px 0 16px 0'
                }}>
                  How Actuarial Rates Are Computed
                </h2>

                <p style={{ marginBottom: '16px' }}>
                  Our quantitative models evaluate three primary risk weightings:
                </p>

                <ul style={{ marginLeft: '24px', marginBottom: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>
                    <strong>Custodial Hardware Score:</strong> Key generation security, geographic threshold distribution, and MPC configuration.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <strong>Smart Contract Complexity Index:</strong> Bytecode size, formal verification status, external oracle dependencies, and upgradeability permissions.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <strong>Liquidity &amp; Volatility Metrics:</strong> Historical drawdown exposure, daily trading volume, and protocol slippage buffers.
                  </li>
                </ul>

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
