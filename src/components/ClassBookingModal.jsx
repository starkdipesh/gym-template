import React, { useState } from 'react';
import { X, CheckCircle2, Flame, Clock, Users, ArrowRight } from 'lucide-react';
import ClockTimePicker from './ClockTimePicker';
import CustomDatePicker from './CustomDatePicker';

export default function ClassBookingModal({ groupClass, onClose }) {
  const [reserved, setReserved] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [classDate, setClassDate] = useState('');
  const [classTime, setClassTime] = useState('06:00 PM');

  if (!groupClass) return null;

  const handleReserve = (e) => {
    e.preventDefault();
    setReserved(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px' }}>
        <button onClick={onClose} className="modal-close" aria-label="Close modal">
          <X size={20} />
        </button>

        {!reserved ? (
          <div>
            <span className="badge-lime" style={{ marginBottom: '8px' }}>RESERVE CLASS SPOT</span>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{groupClass.title}</h2>
            <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              <div>Instructor: <strong style={{ color: '#fff' }}>{groupClass.instructor}</strong></div>
              <div>Burn: <span style={{ color: 'var(--accent-lime)', fontWeight: 800 }}>{groupClass.caloriesBurned}</span></div>
            </div>

            <form onSubmit={handleReserve} style={{ background: 'var(--bg-card)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Sarah Connor"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mobile Number *</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="(555) 000-0000"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">CLASS DATE *</label>
                  <CustomDatePicker
                    value={classDate}
                    onChange={(d) => setClassDate(d)}
                    label="Select Class Date"
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">CLOCK TIME PICKER *</label>
                  <ClockTimePicker
                    value={classTime}
                    onChange={(t) => setClassTime(t)}
                    label="Select Time Slot"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px' }}>
                CONFIRM CLASS PASS <ArrowRight size={16} />
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '30px 0' }}>
            <CheckCircle2 size={54} color="var(--accent-lime)" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>CLASS PASS RESERVED!</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '24px' }}>
              Spot confirmed for <strong>{groupClass.title}</strong> on <strong>{classDate || 'Today'}</strong> at <strong>{classTime}</strong>. We've sent your entry pass confirmation to <strong>{phone}</strong>.
            </p>
            <button onClick={() => { setReserved(false); onClose(); }} className="btn-secondary" style={{ width: '100%' }}>
              CLOSE WINDOW
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
