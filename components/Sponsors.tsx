import Link from 'next/link';

const tiers = [
  { name: 'Luminary Presenting', amount: '$50,000+', slots: 2 },
  { name: 'Beacon Gold', amount: '$25,000', slots: 3 },
  { name: 'Radiance Silver', amount: '$10,000', slots: 4 },
  { name: 'Spark Community', amount: '$5,000', slots: 5 }
];

export default function Sponsors() {
  return (
    <div id="sponsors" className="sponsors-wrap">
      <div className="sponsors-inner">
        <div className="sp-header">
          <p className="sec-label reveal">Partner With Us</p>
          <h2 className="sec-title reveal">Sponsorship <em>opportunities</em></h2>
          <p className="sp-intro reveal">
            Align your brand with purpose. Join 500+ philanthropic leaders, executives, and changemakers for an evening that leaves a lasting legacy.
          </p>
        </div>
        <div className="sp-tiers reveal">
          {tiers.map((tier) => (
            <div key={tier.name} className="sp-tier">
              <div>
                <p className="sp-tier-name">{tier.name}</p>
                <p className="sp-tier-amount">{tier.amount}</p>
              </div>
              <div className="sp-slots">
                {Array.from({ length: tier.slots }).map((_, i) => (
                  <div key={i} className="sp-slot">
                    {i === 0 && tier.slots === 2 ? 'Your Brand' : 'Available'}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '50px' }} className="reveal">
          <Link href="#contact" className="btn-primary">
            <span>Become a Sponsor</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
