import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AdBanner({ type = 'leaderboard', customStyle = {} }) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  // 1. Top Leaderboard Banner (2453326)
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
          <div id="frame" style={{ width: '100%', margin: 'auto', position: 'relative', zIndex: 99998 }}>
            <iframe
              data-aa="2453326"
              src="//acceptable.a-ads.com/2453326/?size=Adaptive"
              style={{
                border: 0,
                padding: 0,
                width: '100%',
                maxWidth: '728px',
                height: '90px',
                overflow: 'hidden',
                display: 'block',
                margin: 'auto'
              }}
              title="A-ADS Leaderboard 2453326"
            />
            <a style={{ display: 'none' }} id="frame-link" href="https://a-ads.com/?partner=2453326">A-ADS</a>
          </div>
        </div>
      </div>
    );
  }

  // 2. Sidebar Sticky Banner (2453328)
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
          Sponsored High-Impact Placement
        </div>
        <div id="frame" style={{
          minHeight: '250px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--bg-page)',
          borderRadius: 'var(--radius-sm)',
          border: '1px dashed var(--border-glass)',
          position: 'relative',
          zIndex: 99998
        }}>
          <iframe
            data-aa="2453328"
            src="//acceptable.a-ads.com/2453328/?size=Adaptive"
            style={{
              border: 0,
              padding: 0,
              width: '100%',
              maxWidth: '300px',
              height: '250px',
              overflow: 'hidden',
              display: 'block',
              margin: 'auto'
            }}
            title="A-ADS Sidebar 2453328"
          />
          <a style={{ display: 'none' }} id="frame-link" href="https://a-ads.com/?partner=2453328">A-ADS</a>
        </div>
      </div>
    );
  }

  // 3. In-Article Native Banner (2453328)
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
        <div id="frame" style={{ width: '100%', margin: 'auto', position: 'relative', zIndex: 99998 }}>
          <iframe
            data-aa="2453328"
            src="//acceptable.a-ads.com/2453328/?size=Adaptive"
            style={{
              border: 0,
              padding: 0,
              width: '100%',
              maxWidth: '728px',
              height: '90px',
              overflow: 'hidden',
              display: 'block',
              margin: 'auto'
            }}
            title="A-ADS Native 2453328"
          />
          <a style={{ display: 'none' }} id="frame-link" href="https://a-ads.com/?partner=2453328">A-ADS</a>
        </div>
      </div>
    );
  }

  // 4. Sticky Bottom Footer Banner (2453325)
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
        padding: '6px 16px',
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
            background: 'rgba(255, 255, 255, 0.15)',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-white)'
          }}
          aria-label="Close sponsor ad"
        >
          <X size={14} />
        </button>
        <div id="frame" style={{ width: '100%', maxWidth: '728px', margin: 'auto', position: 'relative', zIndex: 99998 }}>
          <iframe
            data-aa="2453325"
            src="//acceptable.a-ads.com/2453325/?size=Adaptive"
            style={{
              border: 0,
              padding: 0,
              width: '100%',
              height: '70px',
              overflow: 'hidden',
              display: 'block',
              margin: 'auto'
            }}
            title="A-ADS Sticky Bottom 2453325"
          />
          <a style={{ display: 'none' }} id="frame-link" href="https://a-ads.com/?partner=2453325">A-ADS</a>
        </div>
      </div>
    );
  }

  return null;
}
