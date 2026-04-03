'use client';

import { useEffect, useState } from 'react';

export default function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = new Date('2026-06-12T18:00:00').getTime() - new Date().getTime();
      if (diff <= 0) return;

      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000)
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <p className="cd-eyebrow">◆ &nbsp; Counting Down to the Evening &nbsp; ◆</p>
      <div className="cd-units">
        <div className="cd-cell">
          <span className="cd-num">{String(time.days).padStart(2, '0')}</span>
          <span className="cd-label">Days</span>
        </div>
        <div className="cd-cell">
          <span className="cd-num">{String(time.hours).padStart(2, '0')}</span>
          <span className="cd-label">Hours</span>
        </div>
        <div className="cd-cell">
          <span className="cd-num">{String(time.minutes).padStart(2, '0')}</span>
          <span className="cd-label">Minutes</span>
        </div>
        <div className="cd-cell">
          <span className="cd-num">{String(time.seconds).padStart(2, '0')}</span>
          <span className="cd-label">Seconds</span>
        </div>
      </div>
    </div>
  );
}
