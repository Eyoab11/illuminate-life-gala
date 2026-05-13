'use client';

import { useEffect, useRef } from 'react';

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
    <section ref={sectionRef} className="dr-ersno-section-3 reveal">
      <div className="dr-ersno-3-image-wrapper">
        <div className="dr-ersno-3-image-frame">
          <div className="dr-ersno-3-image"></div>
        </div>
      </div>
      <div className="dr-ersno-3-content">
        <div className="dr-ersno-3-ornament">✦</div>
        <h2 className="dr-ersno-3-title">A Legacy of Compassion</h2>
        <p className="dr-ersno-3-description">
          Dr. Ersno has dedicated his life to transforming healthcare access for underserved
          communities. Through innovative programs and unwavering commitment, he has touched
          countless lives and inspired a movement of change.
        </p>
        <div className="dr-ersno-3-stats">
          <div className="dr-ersno-3-stat">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Lives Impacted</div>
          </div>
          <div className="dr-ersno-3-divider"></div>
          <div className="dr-ersno-3-stat">
            <div className="stat-number">25+</div>
            <div className="stat-label">Years of Service</div>
          </div>
          <div className="dr-ersno-3-divider"></div>
          <div className="dr-ersno-3-stat">
            <div className="stat-number">50+</div>
            <div className="stat-label">Communities Served</div>
          </div>
        </div>
        <div className="dr-ersno-3-ornament">✦</div>
      </div>
    </section>
  );
}
