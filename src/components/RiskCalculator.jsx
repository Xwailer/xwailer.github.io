import React, { useState } from 'react';
import { Calculator, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function RiskCalculator({ title = 'Crypto Insurance Premium Estimator' }) {
  const [assetRate, setAssetRate] = useState(0.018);
  const [duration, setDuration] = useState(1);
  const [amount, setAmount] = useState(250000);
  const [lockedModal, setLockedModal] = useState(false);
  const navigate = useNavigate();

  const totalPremium = Math.round(amount * assetRate * duration);

  return (
    <div style={{
      background: 'var(--bg-subtle)',
      border: '1px solid var(--border-glow)',
      borderRadius: 'var(--radius-md)',
      padding: '28px',
      margin: '32px 0',
      boxShadow: 'var(--shadow-teal)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        borderBottom: '1px solid var(--border-glass)',
        paddingBottom: '14px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calculator size={20} color="var(--primary-teal)" />
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--text-white)'
          }}>
            {title}
          </h3>
        </div>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--primary-teal)'
        }}>
          ACTUARIAL MODEL v4.2
        </span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '18px',
        marginBottom: '22px'
      }} className="calc-inputs-grid">
        
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--text-secondary)',
            marginBottom: '6px'
          }}>
            Target Asset / Custody Type
          </label>
          <select
            value={assetRate}
            onChange={(e) => setAssetRate(parseFloat(e.target.value))}
            style={{
              width: '100%',
              background: 'var(--bg-page)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-white)',
              padding: '10px 14px',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              outline: 'none'
            }}
          >
            <option value={0.018}>Bitcoin (BTC) Multi-Sig Cold Vault (1.8% / yr)</option>
            <option value={0.022}>Ethereum (ETH) Staking &amp; Validator Pool (2.2% / yr)</option>
            <option value={0.032}>DeFi Liquidity Pool / AMM (3.2% / yr)</option>
            <option value={0.045}>Cross-Chain Bridge &amp; Yield Optimizer (4.5% / yr)</option>
            <option value={0.024}>Institutional Exchange Hot Wallet (2.4% / yr)</option>
          </select>
        </div>

        <div>
          <label style={{
            display: 'block',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--text-secondary)',
            marginBottom: '6px'
          }}>
            Coverage Duration
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(parseFloat(e.target.value))}
            style={{
              width: '100%',
              background: 'var(--bg-page)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-white)',
              padding: '10px 14px',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              outline: 'none'
            }}
          >
            <option value={1}>12 Months (Full Annual Underwrite)</option>
            <option value={0.55}>6 Months Coverage</option>
            <option value={0.3}>3 Months Coverage</option>
          </select>
        </div>

      </div>

      {/* Slider */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.85rem',
          marginBottom: '8px'
        }}>
          <span style={{ color: 'var(--text-secondary)' }}>Protected Capital Value ($ USD):</span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.15rem',
            fontWeight: 700,
            color: 'var(--primary-teal)'
          }}>
            ${amount.toLocaleString()}
          </span>
        </div>
        <input
          type="range"
          min="10000"
          max="2000000"
          step="10000"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          style={{
            width: '100%',
            height: '6px',
            background: '#1f2937',
            borderRadius: '3px',
            outline: 'none',
            WebkitAppearance: 'none',
            cursor: 'pointer'
          }}
        />
      </div>

      {/* Summary Box */}
      <div style={{
        background: 'rgba(16, 185, 129, 0.08)',
        border: '1px solid rgba(16, 185, 129, 0.25)',
        borderRadius: 'var(--radius-sm)',
        padding: '18px 22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <div style={{
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '1px'
          }}>
            Estimated Underwritten Premium
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.85rem',
            fontWeight: 800,
            color: 'var(--primary-teal)'
          }}>
            ${totalPremium.toLocaleString()} <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>/ period</span>
          </div>
        </div>

        <button
          className="btn-primary"
          onClick={() => setLockedModal(true)}
        >
          <span>Lock Underwriting Rate</span>
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Lock Confirmation Modal */}
      {lockedModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          padding: '20px'
        }}>
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-glow)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px',
            maxWidth: '480px',
            width: '100%',
            boxShadow: 'var(--shadow-teal)'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              background: 'rgba(16, 185, 129, 0.15)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <ShieldCheck size={24} color="var(--primary-teal)" />
            </div>

            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.35rem',
              fontWeight: 800,
              color: 'var(--text-white)',
              marginBottom: '8px'
            }}>
              Rate Quote Locked
            </h3>
            
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              Your actuarial quote for <strong>${amount.toLocaleString()} USD</strong> has been reserved at <strong>${totalPremium.toLocaleString()} USD</strong>. Proceed to the institutional underwriting desk to finalize contract terms.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                className="btn-primary"
                style={{ flex: 1 }}
                onClick={() => {
                  setLockedModal(false);
                  navigate('/contact');
                }}
              >
                Continue to Submission
              </button>
              <button
                className="btn-secondary"
                onClick={() => setLockedModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .calc-inputs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
