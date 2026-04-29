import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <p className="footer-brand">Illuminate Life Gala</p>
          <p className="footer-tagline">
            "Empowering Change,<br />Inspiring Hope,<br />Building Brighter Futures."
          </p>
        </div>
        <div>
          <p className="footer-col-title">Navigate</p>
          <ul className="footer-links">
            <li><Link href="#about">Mission</Link></li>
            <li><Link href="#programs">Programs</Link></li>
            <li><Link href="#experience">The Evening</Link></li>
            <li><Link href="#tickets">Tickets</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Get Involved</p>
          <ul className="footer-links">
            <li><Link href="#sponsors">Sponsorships</Link></li>
            <li><Link href="#contact">Volunteer</Link></li>
            <li><Link href="#contact">Media & Press</Link></li>
            <li><Link href="#contact">Donate</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Event Info</p>
          <ul className="footer-links">
            <li><Link href="#">October 15, 2026</Link></li>
            <li><Link href="#">The Beverly Hilton</Link></li>
            <li><Link href="#">Beverly Hills, CA</Link></li>
            <li><Link href="#">6:00 PM – 11:30 PM</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Illuminate Life Gala &nbsp;·&nbsp; All Rights Reserved</p>
        <div className="footer-socials">
          <Link href="#">Instagram</Link>
          <Link href="#">LinkedIn</Link>
          <Link href="#">Facebook</Link>
        </div>
      </div>
    </footer>
  );
}
