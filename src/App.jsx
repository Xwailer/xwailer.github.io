import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CryptoTicker from './components/CryptoTicker';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import VaultInsurance from './pages/VaultInsurance';
import SmartContracts from './pages/SmartContracts';
import SecurityAudits from './pages/SecurityAudits';
import Claims from './pages/Claims';
import CalculatorPage from './pages/CalculatorPage';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';

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
      </div>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
