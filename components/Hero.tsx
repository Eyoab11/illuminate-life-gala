'use client';

import Link from 'next/link';
import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
          <p className="hero-date">Thursday, October 15, 2026 &nbsp;·&nbsp; 6:00 PM - 11:30 PM</p>
          <p className="hero-venue">The Beverly Hilton &nbsp;·&nbsp; Beverly Hills, California</p>
        </div>
        <div className="hero-actions">
          <Link href="#tickets" className="btn-primary" onClick={(e) => scrollToSection(e, '#tickets')}>
            <span>Reserve Your Seat</span>
          </Link>
          <Link href="#about" className="btn-ghost" onClick={(e) => scrollToSection(e, '#about')}>Our Mission</Link>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-stem" />
      </div>
    </section>
  );
}
