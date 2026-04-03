'use client';

import { useEffect } from 'react';

export default function RevealOnScroll() {
  useEffect(() => {
    const ro = new IntersectionObserver(
      (entries) => entries.forEach((x) => {
        if (x.isIntersecting) x.target.classList.add('vis');
      }),
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => ro.observe(el));

    const to = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          const items = [...document.querySelectorAll('.tl-item')];
          const i = items.indexOf(e.target as Element);
          setTimeout(() => e.target.classList.add('vis'), i * 90);
        }
      }),
      { threshold: 0.25 }
    );

    document.querySelectorAll('.tl-item').forEach((el) => to.observe(el));

    return () => {
      ro.disconnect();
      to.disconnect();
    };
  }, []);

  return null;
}
