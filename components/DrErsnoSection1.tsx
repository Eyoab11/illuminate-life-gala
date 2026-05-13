'use client';

import { useEffect, useRef } from 'react';

export default function DrErsnoSection1() {
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
    <section ref={sectionRef} className="dr-ersno-section-1 reveal">
      <div className="dr-ersno-1-content">
        <h2 className="dr-ersno-1-title">The Impact We Make</h2>
        <p className="dr-ersno-1-text">
          Through the Illuminate Life Gala, your support funds essential programs
          addressing some of the most urgent healthcare challenges: substance
          abuse, mental health, and access to life-saving surgeries. By joining us,
          you're not only contributing to groundbreaking solutions but actively
          participating in a movement that brings resilience, hope, and
          sustainable health to underserved communities. Together, we're
          creating a brighter, healthier future—one life at a time.
        </p>
        <button className="dr-ersno-1-btn">Explore The Gala</button>
      </div>
    </section>
  );
}
