import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AdBanner({ type = 'leaderboard', customStyle = {} }) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  if (type === 'leaderboard') {
    return (
      <div style={{
        maxWidth: '1380px',
        margin: '18px auto',
        padding: '0 24px',
        ...customStyle
      }}>
        <div style={{
          background: 'var(--bg-subtle)',
          border: '1px solid var(--border-glass)',
          borderRadius: 'var(--radius-md)',
          padding: '10px 14px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '0.65rem',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            fontFamily: 'var(--font-mono)',
            marginBottom: '6px'
          }}>
            Advertisement / Verified Sponsor Directory
          </div>
          <div style={{ minHeight: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <iframe
              data-aa="2453243"
              src="//acceptable.a-ads.com/2453243/?size=Adaptive&background_color=0d121f"
              style={{
                border: 0,
                padding: 0,
                width: '100%',
                maxWidth: '728px',
                height: '90px',
                overflow: 'hidden',
                margin: 'auto'
              }}
              title="A-ADS Leaderboard Banner"
            />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'sidebar-sticky') {
    return (
      <div style={{
        position: 'sticky',
        top: '86px',
        background: 'var(--bg-subtle)',
        border: '1px solid var(--border-glass)',
        borderRadius: 'var(--radius-md)',
        padding: '16px',
        textAlign: 'center',
        ...customStyle
      }}>
        <div style={{
          fontSize: '0.65rem',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          fontFamily: 'var(--font-mono)',
          marginBottom: '10px'
        }}>
          Sponsored High-Impact (300x250)
        </div>
        <div style={{
          minHeight: '250px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--bg-page)',
          borderRadius: 'var(--radius-sm)',
          border: '1px dashed var(--border-glass)'
        }}>
          <iframe
            data-aa="2453243"
            src="//acceptable.a-ads.com/2453243/?size=300x250&background_color=0b0f19"
            style={{
              border: 0,
              padding: 0,
              width: '300px',
              height: '250px',
              overflow: 'hidden',
              margin: 'auto'
            }}
            title="A-ADS Sidebar Half-Page"
          />
        </div>
      </div>
    );
  }

  if (type === 'in-article') {
    return (
      <div style={{
        margin: '32px 0',
        background: 'var(--bg-subtle)',
        border: '1px solid var(--border-glass)',
        borderRadius: 'var(--radius-md)',
        padding: '14px',
        textAlign: 'center',
        ...customStyle
      }}>
        <div style={{
          fontSize: '0.65rem',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          fontFamily: 'var(--font-mono)',
          marginBottom: '8px'
        }}>
          Sponsored Editorial Directory
        </div>
        <iframe
          data-aa="2453243"
          src="//acceptable.a-ads.com/2453243/?size=Adaptive&background_color=0d121f"
          style={{
            border: 0,
            padding: 0,
            width: '100%',
            maxWidth: '728px',
            height: '90px',
            overflow: 'hidden',
            margin: 'auto'
          }}
          title="A-ADS Native Placement"
        />
      </div>
    );
  }

  if (type === 'bottom-anchor') {
    return (
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(7, 10, 18, 0.97)',
        backdropFilter: 'blur(12px)',
        borderTop: '1.5px solid var(--primary-teal)',
        padding: '8px 16px',
        zIndex: 99999,
        boxShadow: '0 -8px 24px rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...customStyle
      }}>
        <button
          onClick={() => setDismissed(true)}
          style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '26px',
            height: '26px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-white)'
          }}
          aria-label="Dismiss banner"
        >
          <X size={14} />
        </button>
        <div style={{ width: '100%', maxWidth: '728px', margin: 'auto' }}>
          <iframe
            data-aa="2453243"
            src="//acceptable.a-ads.com/2453243/?size=Adaptive&background_color=0b0f19"
            style={{
              border: 0,
              padding: 0,
              width: '100%',
              height: '60px',
              overflow: 'hidden',
              margin: 'auto'
            }}
            title="A-ADS Sticky Bottom Anchor"
          />
        </div>
      </div>
    );
  }

  return null;
}
