'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div id="contact" className="contact-wrap">
      <div className="contact-inner">
        <div className="contact-left">
          <p className="sec-label reveal">Get in Touch</p>
          <h2 className="sec-title reveal">Ready to <em>illuminate</em><br />the future?</h2>
          <div className="ct-details reveal">
            <div>
              <p className="ct-label">Date & Time</p>
              <p className="ct-value">Friday, June 12, 2026 · 6:00 PM – 11:30 PM</p>
            </div>
            <div>
              <p className="ct-label">Venue</p>
              <p className="ct-value">The Beverly Hilton<br />9876 Wilshire Blvd, Beverly Hills, CA 90210</p>
            </div>
            <div>
              <p className="ct-label">General Inquiries</p>
              <p className="ct-value">gala@illuminatelifegala.com</p>
            </div>
            <div>
              <p className="ct-label">Sponsorships</p>
              <p className="ct-value">sponsors@illuminatelifegala.com</p>
            </div>
            <div>
              <p className="ct-label">Dress Code</p>
              <p className="ct-value">Black Tie Optional</p>
            </div>
          </div>
        </div>
        <div className="contact-form reveal">
          <p className="sec-label">Express Your Interest</p>
          <div className="cf-row">
            <div className="cf-field">
              <label>First Name</label>
              <input type="text" placeholder="Alexandra" />
            </div>
            <div className="cf-field">
              <label>Last Name</label>
              <input type="text" placeholder="Chen" />
            </div>
          </div>
          <div className="cf-field">
            <label>Email Address</label>
            <input type="email" placeholder="alex@example.com" />
          </div>
          <div className="cf-field">
            <label>Organization</label>
            <input type="text" placeholder="Your Organization" />
          </div>
          <div className="cf-field">
            <label>I Am Interested In</label>
            <select>
              <option value="">Select an option</option>
              <option>Individual Ticket — $750</option>
              <option>VIP Ticket — $2,500</option>
              <option>Table of 10 — $6,500</option>
              <option>Sponsorship Opportunities</option>
              <option>General Inquiry</option>
            </select>
          </div>
          <div className="cf-field">
            <label>Message (Optional)</label>
            <textarea placeholder="Tell us about your interest…" />
          </div>
          <button
            onClick={handleSubmit}
            className="btn-primary"
            style={{ display: 'block', textAlign: 'center', marginTop: '8px', width: '100%', border: 'none', cursor: 'pointer' }}
          >
            <span>{submitted ? 'Message Sent ✦' : 'Send Message'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
