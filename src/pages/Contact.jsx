import React, { useState } from 'react';
import SeoMeta from '../components/SeoMeta';
import AdBanner from '../components/AdBanner';
import ProtocolRadar from '../components/ProtocolRadar';
import { Mail, Send, CheckCircle, Shield } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Smart Contract Coverage',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SeoMeta
        title="Contact Us & Institutional Underwriting Desk"
        description="Submit inquiries regarding institutional digital asset coverage, protocol security audits, or journalistic requests to the VaultShield team."
      />

      <AdBanner type="leaderboard" />

      <main className="container main-layout">
        <div>
          <article className="editorial-card">
            
            <div style={{ padding: '36px 40px' }} className="article-body-inner">
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span className="badge-tier">✉️ Communications &amp; Security Desk</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Response Time &lt; 24h
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
                Contact Us &amp; Institutional Underwriting Inquiries
              </h1>

              <div style={{ color: '#d1d5db', fontSize: '1.02rem', lineHeight: 1.75 }}>
                <p style={{ marginBottom: '24px' }}>
                  Have an inquiry regarding protocol underwriting, smart contract security reviews, or press coverage? Contact our research and underwriting desk below:
                </p>

                {submitted ? (
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid var(--border-glow)',
                    borderRadius: 'var(--radius-md)',
                    padding: '36px',
                    textAlign: 'center',
                    margin: '24px 0'
                  }}>
                    <CheckCircle size={48} color="var(--primary-teal)" style={{ margin: '0 auto 16px auto' }} />
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '8px' }}>
                      Inquiry Received
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto' }}>
                      Thank you for contacting VaultShield. An underwriting officer will review your submission and contact you within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: 'var(--radius-md)',
                    padding: '28px',
                    margin: '24px 0'
                  }}>
                    <div style={{ marginBottom: '18px' }}>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alexander Wright"
                        style={{
                          width: '100%',
                          background: 'var(--bg-page)',
                          border: '1px solid var(--border-glass)',
                          color: 'var(--text-white)',
                          padding: '12px 14px',
                          borderRadius: 'var(--radius-sm)',
                          outline: 'none',
                          fontSize: '0.92rem'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '18px' }}>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                        Corporate / Protocol Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. security@protocol.xyz"
                        style={{
                          width: '100%',
                          background: 'var(--bg-page)',
                          border: '1px solid var(--border-glass)',
                          color: 'var(--text-white)',
                          padding: '12px 14px',
                          borderRadius: 'var(--radius-sm)',
                          outline: 'none',
                          fontSize: '0.92rem'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '18px' }}>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                        Inquiry Classification
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        style={{
                          width: '100%',
                          background: 'var(--bg-page)',
                          border: '1px solid var(--border-glass)',
                          color: 'var(--text-white)',
                          padding: '12px 14px',
                          borderRadius: 'var(--radius-sm)',
                          outline: 'none',
                          fontSize: '0.92rem'
                        }}
                      >
                        <option value="Smart Contract Coverage">Smart Contract Exploit Coverage</option>
                        <option value="Cold Storage Vault">Cold Storage Vault Underwriting</option>
                        <option value="Security Audit">Security Audit Submission</option>
                        <option value="Claims Notice">Emergency Incident Claims Notice</option>
                        <option value="General Editorial">General Journalistic Inquiry</option>
                      </select>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                        Message &amp; Technical Requirements
                      </label>
                      <textarea
                        required
                        rows="5"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your protocol, total value locked (TVL), and required coverage parameters..."
                        style={{
                          width: '100%',
                          background: 'var(--bg-page)',
                          border: '1px solid var(--border-glass)',
                          color: 'var(--text-white)',
                          padding: '12px 14px',
                          borderRadius: 'var(--radius-sm)',
                          outline: 'none',
                          fontSize: '0.92rem',
                          fontFamily: 'var(--font-body)',
                          lineHeight: 1.6
                        }}
                      />
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      <Send size={16} />
                      <span>Submit Inquiry to Desk</span>
                    </button>
                  </form>
                )}

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
