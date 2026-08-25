import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CryptoTicker from './components/CryptoTicker';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load Pages for performance
const Home = lazy(() => import('./pages/Home'));
const VaultInsurance = lazy(() => import('./pages/VaultInsurance'));
const SmartContracts = lazy(() => import('./pages/SmartContracts'));
const SecurityAudits = lazy(() => import('./pages/SecurityAudits'));
const Claims = lazy(() => import('./pages/Claims'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <div className="bg-ambient-glow" />
      <div className="bg-dot-matrix" />
      <ScrollToTop />

      {/* Top Live Crypto Ticker Bar */}
      <CryptoTicker />

      {/* Global Navigation Header */}
      <Header />

      {/* Page Routing */}
      <div style={{ flex: 1 }}>
        <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', color: 'var(--primary-teal)' }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vault-insurance" element={<VaultInsurance />} />
            <Route path="/smart-contracts" element={<SmartContracts />} />
            <Route path="/security-audits" element={<SecurityAudits />} />
            <Route path="/claims" element={<Claims />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </div>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
