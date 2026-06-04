'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function DrErsnoSection3() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="dr-ersno-section-3 reveal"
      aria-labelledby="dr-ersno-heading"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="dr-ersno-3-image-wrapper">
        <div className="dr-ersno-3-image-frame">
          <div className="dr-ersno-3-image" role="img" aria-label="Dr. Ersno Eromo, distinguished physician and humanitarian leader">
            <Image
              src="/modified.png"
              alt="Dr. Ersno Eromo, distinguished physician and humanitarian leader dedicated to transforming healthcare access for underserved communities"
              fill
              style={{ objectFit: 'cover', objectPosition: '80% center' }}
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1080px) 100vw, 50vw"
              itemProp="image"
            />
          </div>
        </div>
      </div>
      <div className="dr-ersno-3-content">
        <div className="dr-ersno-3-ornament" aria-hidden="true">✦</div>
        <h2 id="dr-ersno-heading" className="dr-ersno-3-title" itemProp="name">
          A Legacy of Compassion
        </h2>
        <p className="dr-ersno-3-description" itemProp="description">
          <span itemProp="honorificPrefix">Dr.</span> <span itemProp="givenName">Ersno</span> has dedicated his life to transforming healthcare access for underserved
          communities. Through innovative programs and unwavering commitment, he has touched
          countless lives and inspired a movement of change.
        </p>
        <div className="dr-ersno-3-stats" role="list" aria-label="Dr. Ersno Eromo's impact statistics">
          <div className="dr-ersno-3-stat" role="listitem">
            <div className="stat-number" aria-label="Over 10,000">10,000+</div>
            <div className="stat-label">Lives Impacted</div>
          </div>
          <div className="dr-ersno-3-divider" aria-hidden="true"></div>
          <div className="dr-ersno-3-stat" role="listitem">
            <div className="stat-number" aria-label="Over 25">25+</div>
            <div className="stat-label">Years of Service</div>
          </div>
          <div className="dr-ersno-3-divider" aria-hidden="true"></div>
          <div className="dr-ersno-3-stat" role="listitem">
            <div className="stat-number" aria-label="Over 50">50+</div>
            <div className="stat-label">Communities Served</div>
          </div>
        </div>
        <div className="dr-ersno-3-ornament" aria-hidden="true">✦</div>
      </div>
    </section>
  );
}
