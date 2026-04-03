import Link from 'next/link';

export default function About() {
  return (
    <div id="about" className="about-wrap">
      <div className="about-inner">
        <div className="about-visual reveal">
          <div className="av-frame">
            <div className="av-inner">
              <div className="av-stat">
                <span className="av-num">2nd</span>
                <span className="av-sub">Annual Gala</span>
              </div>
              <div className="av-stat">
                <span className="av-num">500+</span>
                <span className="av-sub">Guests Expected</span>
              </div>
              <div className="av-stat">
                <span className="av-num">$1M+</span>
                <span className="av-sub">Fundraising Goal</span>
              </div>
              <div className="av-stat">
                <span className="av-num">4</span>
                <span className="av-sub">Programs Funded</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-text">
          <p className="sec-label reveal">Our Mission</p>
          <h2 className="sec-title reveal">
            Where <em>compassion</em><br />becomes action
          </h2>
          <div className="gold-rule reveal" />
          <p className="reveal d1">
            The Illuminate Life Gala unites visionaries, philanthropists, and thought leaders for one extraordinary evening dedicated to transforming healthcare access in underserved communities.
          </p>
          <p className="reveal d2 lead">
            Building on one remarkable year, our second gathering reaches further — funding mental health, substance recovery, and surgical access for those who need it most.
          </p>
          <Link href="#tickets" className="btn-primary reveal d3" style={{ display: 'inline-block', marginTop: '28px' }}>
            <span>Join the Movement</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
