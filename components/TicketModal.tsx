'use client';

import { useEffect, useState } from 'react';

export default function TicketModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [tier, setTier] = useState('');
  const [price, setPrice] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      setTier(customEvent.detail.tier);
      setPrice(customEvent.detail.price);
      setIsOpen(true);
      setShowSuccess(false);
      document.body.style.overflow = 'hidden';
    };

    window.addEventListener('openTicketModal', handleOpen);
    return () => window.removeEventListener('openTicketModal', handleOpen);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const submitModal = () => {
    setShowSuccess(true);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={(e) => e.target === e.currentTarget && closeModal()}>
      <div className="modal">
        <button className="modal-close" onClick={closeModal}>×</button>
        <div id="modal-body" style={{ display: showSuccess ? 'none' : 'block' }}>
          <p className="modal-sub">{tier} · {price}</p>
          <p className="modal-title">Secure Your Place</p>
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
            <label>Email</label>
            <input type="email" placeholder="alex@example.com" />
          </div>
          <div className="cf-field">
            <label>Phone</label>
            <input type="tel" placeholder="+1 (310) 000-0000" />
          </div>
          <button
            onClick={submitModal}
            className="btn-primary"
            style={{ display: 'block', textAlign: 'center', marginTop: '28px', width: '100%', border: 'none', cursor: 'pointer' }}
          >
            <span>Confirm Reservation</span>
          </button>
        </div>
        <div className="modal-success" style={{ display: showSuccess ? 'block' : 'none' }}>
          <div className="ms-icon">✦</div>
          <p className="modal-title" style={{ marginBottom: '14px' }}>Request Received</p>
          <p>Thank you — our team will confirm your reservation within 24 hours. We look forward to welcoming you to the Illuminate Life Gala.</p>
        </div>
      </div>
    </div>
  );
}
