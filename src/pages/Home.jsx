import React from 'react';
import { Link } from 'react-router-dom';
import SeoMeta from '../components/SeoMeta';
import AdBanner from '../components/AdBanner';
import RiskCalculator from '../components/RiskCalculator';
import ProtocolRadar from '../components/ProtocolRadar';
import { Shield, Lock, CheckCircle2, FileText, ArrowRight, Zap, Database } from 'lucide-react';

export default function Home() {
  return (
    <>
      <SeoMeta
        title="Institutional Crypto Insurance: The Definitive 2026 Guide"
        description="Comprehensive market intelligence, real-time risk calculators, and institutional underwriting benchmarks for cryptocurrency vaults, multi-sig custody, and DeFi protocols."
      />

      <AdBanner type="leaderboard" />

      <main className="container main-layout">
        
        {/* Left Main Editorial Column */}
        <div>
          <article className="editorial-card">
            
            {/* Hero Image */}
            <div style={{ position: 'relative', width: '100%', maxHeight: '420px', overflow: 'hidden', background: '#000', borderRadius: '12px' }}>
              <img
                src="vault_hero.jpg"
                alt="Institutional Cryptocurrency Vault"
                loading="eager"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ padding: '36px 40px' }} className="article-body-inner">
              
              {/* Category Pill & Read Meta */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <span className="badge-tier">Institutional Underwriting</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  ⏱️ 9 Min Read • Peer-Reviewed
                </span>
              </div>

              <h1 className="text-h1" style={{ marginBottom: '20px' }}>
                Institutional Crypto Insurance: The Definitive 2026 Guide to Protecting Digital Assets &amp; Smart Contracts
              </h1>

              {/* Author Profile */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 0',
                borderTop: '1px solid var(--border-glass)',
                borderBottom: '1px solid var(--border-glass)',
                marginBottom: '28px'
              }}>
                <img
                  src="author_harrison.jpg"
                  alt="Dr. Harrison Vance, Ph.D."
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--primary-teal)',
                    boxShadow: '0 0 12px rgba(16, 185, 129, 0.35)'
                  }}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>Dr. Harrison Vance, Ph.D.</span>
                    <span style={{ color: 'var(--primary-teal)' }}>✓</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Senior Underwriter • Certified Blockchain Auditor • Updated Today
                  </div>
                </div>
              </div>

              {/* Prose Content */}
              <div className="text-body">
                <p>
                  As institutional capital allocations into decentralized finance (DeFi) and digital custody solutions surpass historic highs, the necessity for robust, actuarially verified <strong>Cryptocurrency Asset Insurance</strong> has transitioned from a theoretical hedge to an essential corporate fiduciary requirement.
                </p>
                <p>
                  In traditional finance, banking deposits are insured through federal entities such as the FDIC or SIPC. However, in the decentralized blockchain landscape, insurance coverage is underwritten via collateralized capital pools, risk-rated smart contracts, and decentralized autonomous syndicates that offer compensation against contract exploits, oracle manipulation, and custodial insolvency.
                </p>

                {/* Interactive Actuarial Calculator */}
                <RiskCalculator />

                <h2 className="text-h2" style={{
                  margin: '34px 0 16px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Shield size={22} color="var(--primary-teal)" style={{ flexShrink: 0 }} />
                  Key Pillars of Digital Asset Underwriting
                </h2>

                <p style={{ marginBottom: '20px' }}>
                  When evaluating crypto insurance policies, underwriters analyze four critical vectors to quantify risk exposure and determine premium pricing:
                </p>

                <div className="table-container">
                  <table className="fintech-table">
                    <thead>
                      <tr>
                        <th>Protection Vector</th>
                        <th>Threat Covered</th>
                        <th>Deductible Benchmark</th>
                        <th>Claim Settlement SLA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Smart Contract Exploit</strong></td>
                        <td>Re-entrancy, flash-loan vulnerabilities</td>
                        <td>5.0% of loss</td>
                        <td>48 - 72 Hours</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Cold Vault Theft</strong></td>
                        <td>Private key exfiltration, insider collusion</td>
                        <td>2.5% of loss</td>
                        <td>24 - 48 Hours</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Stablecoin De-Pegging</strong></td>
                        <td>Collateral insolvency, algorithmic breakdown</td>
                        <td>10.0% of loss</td>
                        <td>7 - 14 Days</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Slashing Risk</strong></td>
                        <td>Validator downtime, double-signing penalties</td>
                        <td>1.0% of loss</td>
                        <td>Instant Automated</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* In-Article Ad */}
                <AdBanner type="in-article" />

                <h2 className="text-h2" style={{
                  margin: '34px 0 16px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Lock size={22} color="var(--primary-teal)" style={{ flexShrink: 0 }} />
                  Bitcoin &amp; Multi-Chain Cryptocurrency Cold Vault Protection
                </h2>

                <p>
                  Institutional cryptocurrency storage mandates multi-layered defense frameworks. For <strong>Bitcoin (BTC)</strong> and multi-chain digital assets, underwriters require air-gapped cryptographic signing ceremonies, sharded private seed generation, and Multi-Party Computation (MPC) custody architectures to eliminate single points of compromise.
                </p>
                <p>
                  VaultShield benchmarks digital asset underwriting across major blockchain networks including <strong>Bitcoin (BTC)</strong>, <strong>Ethereum (ETH)</strong>, <strong>Solana (SOL)</strong>, <strong>Avalanche (AVAX)</strong>, and <strong>Binance Smart Chain (BNB)</strong>.
                </p>

                <h2 className="text-h2" style={{
                  margin: '34px 0 16px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Zap size={22} color="var(--primary-teal)" style={{ flexShrink: 0 }} />
                  Ethereum &amp; DeFi Smart Contract Exploit Coverage
                </h2>

                <p>
                  Decentralized finance (DeFi) protocols and decentralized applications (dApps) execute billions in automated liquidity swaps. Smart contract insurance indemnifies liquidity providers and Web3 protocols against zero-day code vulnerabilities, re-entrancy bugs, oracle price manipulation, and flash-loan exploits.
                </p>

                <h2 className="text-h2" style={{
                  margin: '34px 0 16px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <CheckCircle2 size={22} color="var(--primary-teal)" style={{ flexShrink: 0 }} />
                  How Cryptocurrency Insurance Claims Are Verified On-Chain
                </h2>

                <ul style={{ marginLeft: '24px', marginBottom: '24px', lineHeight: 1.8 }}>
                  <li style={{ marginBottom: '10px' }}>
                    <strong>Automated Blockchain Event Verification:</strong> On-chain transaction hashes confirm asset loss, exploit block height, and affected smart contract addresses directly from the blockchain explorer.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <strong>Independent Web3 Security Consortium:</strong> Tier-1 blockchain security auditors (CertiK, OpenZeppelin, Halborn) inspect smart contract decompilations to certify that exploit origins were non-collusive.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <strong>Instant Stablecoin Reimbursement:</strong> Claim disbursements are released via automated smart contract escrow directly to the insured multi-sig wallet in stable digital currencies (USDC, USDT, DAI).
                  </li>
                </ul>

              </div>

            </div>

          </article>
        </div>

        {/* Right Sidebar Column */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <AdBanner type="sidebar-sticky" />
          <ProtocolRadar />
        </aside>

      </main>

      <AdBanner type="bottom-anchor" />

      <style>{`
        @media (max-width: 768px) {
          .article-body-inner { padding: 22px 18px !important; }
        }
      `}</style>
    </>
  );
}
