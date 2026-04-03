'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <Link href="/" className="nav-logo">Illuminate Life Gala</Link>
        <ul className="nav-links">
          <li><Link href="#about">Mission</Link></li>
          <li><Link href="#programs">Programs</Link></li>
          <li><Link href="#experience">Evening</Link></li>
          <li><Link href="#tickets">Tickets</Link></li>
          <li><Link href="#sponsors">Sponsors</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
        <Link href="#tickets" className="nav-cta">
          <span>Reserve Your Seat</span>
        </Link>
        <button 
          className="nav-hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <span className="mobile-menu-title">Menu</span>
            <button 
              className="mobile-menu-close" 
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          <ul className="mobile-menu-links">
            <li><Link href="#about" onClick={closeMenu}>Mission</Link></li>
            <li><Link href="#programs" onClick={closeMenu}>Programs</Link></li>
            <li><Link href="#experience" onClick={closeMenu}>Evening</Link></li>
            <li><Link href="#tickets" onClick={closeMenu}>Tickets</Link></li>
            <li><Link href="#sponsors" onClick={closeMenu}>Sponsors</Link></li>
            <li><Link href="#contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
          <Link href="#tickets" className="mobile-menu-cta" onClick={closeMenu}>
            <span>Reserve Your Seat</span>
          </Link>
        </div>
      </div>
    </>
  );
}
