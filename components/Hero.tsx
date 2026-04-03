'use client';

import Link from 'next/link';
import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <ParticleCanvas />
      <div className="hero-ring" />
      <div className="hero-ring" />
      <div className="hero-ring" />
      <div className="hero-content">
        <div className="hero-ornament">
          <div className="ho-line" />
          <div className="ho-dia" />
          <div className="ho-dia" />
          <div className="ho-line r" />
        </div>
        <p className="hero-eyebrow">Third Annual &nbsp;·&nbsp; Philanthropic Gala &nbsp;·&nbsp; Beverly Hills</p>
        <h1 className="hero-title">
          Illuminate<br />
          <em>Life</em>
        </h1>
        <div className="hero-divider" />
        <div className="hero-meta">
          <p className="hero-date">Friday, June 12, 2026 &nbsp;·&nbsp; 6:00 PM</p>
          <p className="hero-venue">The Beverly Hilton &nbsp;·&nbsp; Beverly Hills, California</p>
        </div>
        <div className="hero-actions">
          <Link href="#tickets" className="btn-primary">
            <span>Reserve Your Seat</span>
          </Link>
          <Link href="#about" className="btn-ghost">Our Mission</Link>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-stem" />
      </div>
    </section>
  );
}
