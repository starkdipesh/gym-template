import React, { useState } from 'react';
import { X, Star, Calendar, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import ClockTimePicker from './ClockTimePicker';
import CustomDatePicker from './CustomDatePicker';

export default function TrainerModal({ trainer, onClose }) {
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  if (!trainer) return null;

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        <button onClick={onClose} className="modal-close" aria-label="Close modal">
          <X size={20} />
        </button>

        {!bookingSubmitted ? (
          <div>
            {/* Trainer Profile Overview */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
              <img
                src={trainer.image}
                alt={trainer.name}
                style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-lime)' }}
              />
              <div>
                <span className="badge-lime" style={{ marginBottom: '6px' }}>{trainer.role}</span>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '4px' }}>{trainer.name}</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <Star size={16} fill="var(--accent-lime)" color="var(--accent-lime)" />
                  <strong style={{ color: '#fff' }}>{trainer.rating} / 5.0</strong> ({trainer.clientsTrained} Transformation Clients)
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px' }}>
              {trainer.bio}
            </p>

            <form onSubmit={handleBooking} style={{ background: 'var(--bg-card)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>BOOK 1-ON-1 CONSULTATION WITH {trainer.name.split(' ')[0].toUpperCase()}</h3>

              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Jordan Miller"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="(555) 000-0000"
                  required
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">CONSULTATION DATE *</label>
                  <CustomDatePicker
                    value={selectedDate}
                    onChange={(d) => setSelectedDate(d)}
                    label="Select Date"
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">CLOCK TIME PICKER *</label>
                  <ClockTimePicker
                    value={selectedTime}
                    onChange={(t) => setSelectedTime(t)}
                    label="Select Clock Time"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px' }}>
                CONFIRM CONSULTATION BOOKING <ArrowRight size={16} />
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '30px 0' }}>
            <CheckCircle2 size={54} color="var(--accent-lime)" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>SESSION REQUESTED!</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '24px' }}>
              Coach <strong>{trainer.name}</strong> has received your appointment request for <strong>{selectedDate || 'Today'}</strong> at <strong>{selectedTime}</strong>. We will confirm via text message shortly.
            </p>
            <button onClick={() => { setBookingSubmitted(false); onClose(); }} className="btn-secondary" style={{ width: '100%' }}>
              CLOSE WINDOW
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
