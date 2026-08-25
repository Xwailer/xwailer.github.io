import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SeoMeta({
  title = 'VaultShield | Institutional Crypto & Digital Asset Insurance Intelligence',
  description = 'VaultShield is the premier institutional authority for cryptocurrency asset protection, Bitcoin vault security, Ethereum smart contract exploit coverage, and decentralized DeFi insurance underwriting.',
  canonical = 'https://badro.github.io/vaultshield-crypto-insurance',
  keywords = 'bitcoin, cryptocurrency, crypto, ethereum, blockchain, btc, eth, web3, defi, crypto insurance, digital assets, crypto vault, crypto custody, crypto wallet, smart contract, crypto trading, decentralized finance',
  image = 'vault_hero.jpg'
}) {
  const fullTitle = title.includes('VaultShield') ? title : `${title} | VaultShield Crypto Intelligence`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* OpenGraph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="VaultShield Crypto & Bitcoin Intelligence" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FinancialService',
          name: 'VaultShield Crypto Asset & Bitcoin Insurance Protocol',
          alternateName: 'VaultShield Web3 Underwriting Intelligence',
          description: description,
          url: canonical,
          knowsAbout: [
            'Bitcoin',
            'Cryptocurrency',
            'Ethereum',
            'Blockchain',
            'Smart Contracts',
            'Decentralized Finance',
            'Digital Asset Custody'
          ],
          about: [
            {
              '@type': 'Thing',
              name: 'Bitcoin',
              sameAs: 'https://en.wikipedia.org/wiki/Bitcoin'
            },
            {
              '@type': 'Thing',
              name: 'Cryptocurrency',
              sameAs: 'https://en.wikipedia.org/wiki/Cryptocurrency'
            },
            {
              '@type': 'Thing',
              name: 'Ethereum',
              sameAs: 'https://en.wikipedia.org/wiki/Ethereum'
            }
          ]
        })}
      </script>
    </Helmet>
  );
}
