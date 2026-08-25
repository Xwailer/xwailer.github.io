import React, { useState, useEffect } from 'react';

export default function CryptoTicker() {
  const [prices, setPrices] = useState([
    { symbol: 'BTC', name: 'Bitcoin', price: '$96,420', change: '+2.4%', up: true },
    { symbol: 'ETH', name: 'Ethereum', price: '$3,450', change: '+4.1%', up: true },
    { symbol: 'SOL', name: 'Solana', price: '$194.20', change: '+5.8%', up: true },
    { symbol: 'LINK', name: 'Chainlink', price: '$22.80', change: '+3.2%', up: true },
    { symbol: 'AVAX', name: 'Avalanche', price: '$38.90', change: '+1.9%', up: true },
    { symbol: 'TVL', name: 'Insured Assets', price: '$4.89 Billion', change: '+12.4%', up: true }
  ]);

  // Optional live fetch from CoinGecko API for real crypto feeds
  useEffect(() => {
    async function fetchCrypto() {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,chainlink,avalanche-2&vs_currencies=usd&include_24hr_change=true'
        );
        if (res.ok) {
          const data = await res.json();
          if (data.bitcoin && data.ethereum) {
            setPrices([
              {
                symbol: 'BTC',
                name: 'Bitcoin',
                price: `$${data.bitcoin.usd.toLocaleString()}`,
                change: `${data.bitcoin.usd_24h_change >= 0 ? '+' : ''}${data.bitcoin.usd_24h_change.toFixed(2)}%`,
                up: data.bitcoin.usd_24h_change >= 0
              },
              {
                symbol: 'ETH',
                name: 'Ethereum',
                price: `$${data.ethereum.usd.toLocaleString()}`,
                change: `${data.ethereum.usd_24h_change >= 0 ? '+' : ''}${data.ethereum.usd_24h_change.toFixed(2)}%`,
                up: data.ethereum.usd_24h_change >= 0
              },
              {
                symbol: 'SOL',
                name: 'Solana',
                price: `$${data.solana.usd.toLocaleString()}`,
                change: `${data.solana.usd_24h_change >= 0 ? '+' : ''}${data.solana.usd_24h_change.toFixed(2)}%`,
                up: data.solana.usd_24h_change >= 0
              },
              {
                symbol: 'LINK',
                name: 'Chainlink',
                price: `$${data.chainlink.usd.toLocaleString()}`,
                change: `${data.chainlink.usd_24h_change >= 0 ? '+' : ''}${data.chainlink.usd_24h_change.toFixed(2)}%`,
                up: data.chainlink.usd_24h_change >= 0
              },
              {
                symbol: 'TVL',
                name: 'Insured Assets',
                price: '$4.89 Billion',
                change: '+12.4%',
                up: true
              }
            ]);
          }
        }
      } catch (e) {
        // Fallback to initial verified dataset
      }
    }
    fetchCrypto();
  }, []);

  return (
    <div style={{
      background: '#04070d',
      borderBottom: '1px solid var(--border-glass)',
      padding: '8px 24px',
      fontSize: '0.78rem',
      fontFamily: 'var(--font-mono)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflowX: 'auto',
      whiteSpace: 'nowrap'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{
            width: '7px',
            height: '7px',
            background: 'var(--primary-teal)',
            borderRadius: '50%',
            boxShadow: '0 0 8px var(--primary-teal)',
            animation: 'pulse 1.8s infinite'
          }}></span>
          <span style={{ color: 'var(--primary-teal)', fontWeight: 700 }}>UNDERWRITING INDEX:</span>
        </div>

        {prices.map((item, idx) => (
          <React.Fragment key={item.symbol}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontWeight: 700, color: 'var(--text-white)' }}>{item.symbol}</span>
              <span style={{ color: 'var(--text-secondary)' }}>{item.price}</span>
              <span style={{ color: item.up ? 'var(--primary-teal)' : 'var(--danger-red)', fontWeight: 600 }}>
                {item.change}
              </span>
            </div>
            {idx < prices.length - 1 && <span style={{ color: 'var(--text-muted)' }}>•</span>}
          </React.Fragment>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.75rem', paddingLeft: '20px' }}>
        <span>Global Solvency Index: <strong style={{ color: 'var(--primary-teal)' }}>99.9%</strong></span>
      </div>
    </div>
  );
}
