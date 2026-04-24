'use client';

import Image from 'next/image';

const partners = [
  { name: 'Eromo Ventures', logo: '/EV.png' },
  { name: 'Concierge Healthcare Partners', logo: '/CHP.png' },
  { name: 'Tori Avey', logo: '/Tori avey logo.psd.png' },
  { name: 'Levy Eromo Media', logo: '/LEM.png' },
  { name: 'Music Maven', logo: '/MM.png' },
  { name: 'Consortium Capital Holdings', logo: '/CCH.png' },
  { name: 'Shuki & Tori Levy Foundation', logo: '/STF.png' },
];

export default function Partners() {
  return (
    <div id="partners" className="partners-wrap">
      <div className="partners-inner">
        <div className="partners-header reveal">
          <h2 className="partners-title">Our Partners</h2>
          <div className="partners-rule" />
        </div>

        <div className="partners-grid reveal">
          {/* Row 1 — 3 logos */}
          <div className="partners-row">
            {partners.slice(0, 3).map((p) => (
              <div key={p.name} className="partner-logo-wrap">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={180}
                  height={90}
                  style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
              </div>
            ))}
          </div>

          {/* Row 2 — 3 logos */}
          <div className="partners-row">
            {partners.slice(3, 6).map((p) => (
              <div key={p.name} className="partner-logo-wrap">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={180}
                  height={90}
                  style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
              </div>
            ))}
          </div>

          {/* Row 3 — 1 logo centered */}
          <div className="partners-row partners-row-center">
            {partners.slice(6).map((p) => (
              <div key={p.name} className="partner-logo-wrap">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={600}
                  height={130}
                  style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom ornament */}
        <div className="partners-ornament reveal">
          <div className="po-line" />
          <div className="po-dia" />
          <div className="po-dia" />
          <div className="po-line" />
        </div>
      </div>
    </div>
  );
}
