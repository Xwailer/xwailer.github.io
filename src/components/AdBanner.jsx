import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AdBanner({ type = 'leaderboard', customStyle = {} }) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  // 1. Top Leaderboard Banner - Fixed 1 (2453326)
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
          {/* BEGIN AADS AD UNIT 2453326 */}
          <div id="frame" style={{ width: '100%', margin: 'auto', position: 'relative', zIndex: 99998 }}>
            <iframe
              data-aa="2453326"
              src="//acceptable.a-ads.com/2453326/?size=Adaptive"
              style={{
                border: 0,
                padding: 0,
                width: '70%',
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
          {/* END AADS AD UNIT 2453326 */}
        </div>
      </div>
    );
  }

  // 2. Sidebar Sticky Banner - Ad Unit #2453325 (Fixed)
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
            data-aa="2453325"
            src="//acceptable.a-ads.com/2453325/?size=Adaptive"
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
            title="A-ADS Sidebar 2453325"
          />
          <a style={{ display: 'none' }} id="frame-link" href="https://a-ads.com/?partner=2453325">A-ADS</a>
        </div>
      </div>
    );
  }

  // 3. In-Article Native Banner - Ad Unit #2453325 (Fixed)
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
        {/* BEGIN AADS AD UNIT 2453325 */}
        <div id="frame" style={{ width: '100%', margin: 'auto', position: 'relative', zIndex: 99998 }}>
          <iframe
            data-aa="2453325"
            src="//acceptable.a-ads.com/2453325/?size=Adaptive"
            style={{
              border: 0,
              padding: 0,
              width: '70%',
              maxWidth: '728px',
              height: '90px',
              overflow: 'hidden',
              display: 'block',
              margin: 'auto'
            }}
            title="A-ADS Native 2453325"
          />
          <a style={{ display: 'none' }} id="frame-link" href="https://a-ads.com/?partner=2453325">A-ADS</a>
        </div>
        {/* END AADS AD UNIT 2453325 */}
      </div>
    );
  }

  // 4. Sticky Bottom Footer Banner - Ad Unit #2453328 (Sticky)
  if (type === 'bottom-anchor') {
    return (
      <div style={{ position: 'relative', zIndex: 99999, ...customStyle }}>
        {/* BEGIN AADS AD UNIT 2453328 */}
        <input autocomplete="off" type="checkbox" id="aadsstickymt8vcu41" hidden />
        <div style={{ paddingTop: 0, paddingBottom: 'auto' }}>
          <div style={{
            width: '100%',
            height: 'auto',
            position: 'fixed',
            textAlign: 'center',
            fontSize: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: 'auto',
            zIndex: 99999,
            background: 'rgba(7, 10, 18, 0.95)',
            backdropFilter: 'blur(10px)',
            borderTop: '1.5px solid var(--primary-teal)',
            padding: '4px 0'
          }}>
            <label
              htmlFor="aadsstickymt8vcu41"
              style={{
                top: '50%',
                transform: 'translateY(-50%)',
                right: '24px',
                position: 'absolute',
                borderRadius: '4px',
                background: 'rgba(248, 248, 249, 0.70)',
                padding: '4px',
                zIndex: 99999,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Close sponsor ad"
            >
              <svg fill="#000000" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">
                <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "/>
              </svg>
            </label>
            <div id="frame" style={{ width: '100%', margin: 'auto', position: 'relative', zIndex: 99998 }}>
              <iframe
                data-aa="2453328"
                src="//acceptable.a-ads.com/2453328/?size=Adaptive"
                style={{
                  border: 0,
                  padding: 0,
                  width: '70%',
                  height: '70px',
                  overflow: 'hidden',
                  margin: 'auto',
                  display: 'block'
                }}
                title="A-ADS Sticky Bottom 2453328"
              />
              <a style={{ display: 'none' }} id="frame-link" href="https://a-ads.com/?partner=2453328">A-ADS</a>
            </div>
          </div>
          <style>{`
            #aadsstickymt8vcu41:checked + div {
              display: none !important;
            }
          `}</style>
        </div>
        {/* END AADS AD UNIT 2453328 */}
      </div>
    );
  }

  return null;
}
