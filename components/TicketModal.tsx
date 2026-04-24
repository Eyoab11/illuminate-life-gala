'use client';

import { useEffect, useState } from 'react';
import { bookingApi, getErrorMessage } from '../lib/api';

export default function TicketModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [tier, setTier] = useState('');
  const [tierName, setTierName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [bookingId, setBookingId] = useState('');

  // Form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      setTier(customEvent.detail.tier);
      setTierName(customEvent.detail.tierName);
      setPrice(customEvent.detail.price);
      setQuantity(customEvent.detail.quantity || 1);
      setIsOpen(true);
      setShowSuccess(false);
      setError('');
      setBookingId('');
      // Reset form
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setSpecialRequests('');
      setDietaryRestrictions('');
      document.body.style.overflow = 'hidden';
    };

    window.addEventListener('openTicketModal', handleOpen);
    return () => window.removeEventListener('openTicketModal', handleOpen);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const submitModal = async () => {
    // Validation
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const priceNum = parseFloat(price.replace(/,/g, ''));
      // The price shown is always the flat package price — no math needed.
      const pricePerUnit = priceNum;
      const totalAmount = priceNum;
      const result = await bookingApi.createTicketBooking({
        customerName: `${firstName.trim()} ${lastName.trim()}`,
        customerEmail: email.trim(),
        customerPhone: phone.trim(),
        ticketTier: tier,
        ticketName: tierName,
        quantity: quantity,
        pricePerUnit: pricePerUnit,
        totalAmount: totalAmount,
        specialRequests: specialRequests.trim() || undefined,
        dietaryRestrictions: dietaryRestrictions.trim() || undefined,
      });

      setBookingId(result.bookingId);
      setShowSuccess(true);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
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
          <p className="modal-sub">{tier} · ${price}</p>
          <p className="modal-title">Secure Your Place</p>
          
          {error && (
            <div style={{ 
              padding: '12px', 
              marginBottom: '16px', 
              backgroundColor: '#fee', 
              color: '#c33', 
              borderRadius: '8px',
              fontSize: '14px'
            }}>
              {error}
            </div>
          )}

          <div className="cf-row">
            <div className="cf-field">
              <label>First Name *</label>
              <input 
                type="text" 
                placeholder="Alexandra" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="cf-field">
              <label>Last Name *</label>
              <input 
                type="text" 
                placeholder="Chen" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>
          <div className="cf-field">
            <label>Email *</label>
            <input 
              type="email" 
              placeholder="alex@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
          <div className="cf-field">
            <label>Phone *</label>
            <input 
              type="tel" 
              placeholder="+1 (310) 000-0000" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading}
            />
          </div>
          <div className="cf-field">
            <label>Dietary Restrictions (Optional)</label>
            <input 
              type="text" 
              placeholder="Vegetarian, Gluten-free, etc." 
              value={dietaryRestrictions}
              onChange={(e) => setDietaryRestrictions(e.target.value)}
              disabled={loading}
            />
          </div>
          <div className="cf-field">
            <label>Special Requests (Optional)</label>
            <textarea 
              placeholder="Any special seating preferences or requests..."
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              disabled={loading}
              style={{ minHeight: '80px', resize: 'vertical' }}
            />
          </div>
          <button
            onClick={submitModal}
            className="btn-primary"
            disabled={loading}
            style={{ 
              display: 'block', 
              textAlign: 'center', 
              marginTop: '28px', 
              width: '100%', 
              border: 'none', 
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1
            }}
          >
            <span>{loading ? 'Submitting...' : 'Confirm Reservation'}</span>
          </button>
        </div>
        <div className="modal-success" style={{ display: showSuccess ? 'block' : 'none' }}>
          <div className="ms-icon">✦</div>
          <p className="modal-title" style={{ marginBottom: '14px' }}>Request Received</p>
          <p>Thank you — our team will confirm your reservation within 24 hours. We look forward to welcoming you to the Illuminate Life Gala.</p>
          {bookingId && (
            <p style={{ marginTop: '16px', fontSize: '14px', opacity: 0.8 }}>
              Your booking ID: <strong>{bookingId}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
