import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Car, ShieldCheck } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: 'Membership Inquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">VISIT TITAN FORGE</span>
          <h1 className="section-title">CONTACT & LOCATION</h1>
          <p className="section-desc">
            We are conveniently located in central Metropolis with 200+ free validated multi-level parking stalls.
          </p>
        </div>

        {/* Live Status Badge Bar */}
        <div style={{
          background: 'rgba(198, 255, 0, 0.08)',
          border: '1px solid var(--accent-lime)',
          borderRadius: 'var(--radius-md)',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '40px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-lime)', boxShadow: '0 0 10px var(--accent-lime)' }} className="pulse-element" />
            <strong style={{ color: '#fff', fontSize: '0.95rem' }}>CLUB IS CURRENTLY OPEN NOW</strong>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>(Closes at 12:00 AM Midnight)</span>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-lime"
            style={{ padding: '8px 16px', fontSize: '0.8rem' }}
          >
            GET GOOGLE MAPS DIRECTIONS <MapPin size={14} />
          </a>
        </div>

        <div className="grid-2" style={{ gap: '40px', alignItems: 'flex-start' }}>
          {/* Contact Info & Map Card */}
          <div>
            <div className="glass-card" style={{ padding: '32px', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>HEADQUARTERS & CLUB INFO</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '0.92rem' }}>
                <div style={{ display: 'flex', gap: '14px' }}>
                  <MapPin size={22} color="var(--accent-lime)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#fff', display: 'block', marginBottom: '2px' }}>Physical Address</strong>
                    <span style={{ color: 'var(--text-secondary)' }}>450 Athletic Performance Way, Suite 100, Metropolis, NY 10001</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <Phone size={22} color="var(--accent-lime)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#fff', display: 'block', marginBottom: '2px' }}>Phone Hotline</strong>
                    <span style={{ color: 'var(--text-secondary)' }}>+1 (800) 555-TITAN (8482)</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <Mail size={22} color="var(--accent-lime)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#fff', display: 'block', marginBottom: '2px' }}>Email Support</strong>
                    <span style={{ color: 'var(--text-secondary)' }}>concierge@titanforgegym.com</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <Car size={22} color="var(--accent-lime)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#fff', display: 'block', marginBottom: '2px' }}>Parking & Validation</strong>
                    <span style={{ color: 'var(--text-secondary)' }}>200+ Free 3-Hour Validated Spaces in Sub-Level 1 & 2 Garage.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Interactive Map Canvas */}
            <div style={{
              height: '240px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid var(--border-color)',
              position: 'relative',
              background: 'linear-gradient(135deg, #181d22 0%, #0b0d0f 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '20px'
            }}>
              <div>
                <MapPin size={40} color="var(--accent-lime)" style={{ margin: '0 auto 10px' }} />
                <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>TITAN FORGE METROPOLIS</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '4px' }}>
                  Click below to open interactive navigation
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.78rem', marginTop: '12px' }}
                >
                  OPEN IN GOOGLE MAPS
                </a>
              </div>
            </div>
          </div>

          {/* Direct Lead Contact Form */}
          <div className="glass-card" style={{ padding: '36px' }}>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>SEND A MESSAGE TO CONCIERGE</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '24px' }}>
                  Our front desk response time is under 15 minutes during operating hours.
                </p>

                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Michael Smith"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="(555) 000-0000"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="michael@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Inquiry Subject</label>
                  <select
                    className="form-select"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="Membership Inquiry">Membership & Pricing Inquiry</option>
                    <option value="Free Trial Booking">3-Day VIP Free Trial Pass</option>
                    <option value="Personal Training">1-on-1 Personal Coaching</option>
                    <option value="Corporate Membership">Corporate & Group Membership</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea"
                    rows="4"
                    placeholder="Tell us about your fitness goals or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px' }}>
                  SEND INQUIRY TO CONCIERGE <Send size={16} />
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <CheckCircle2 size={56} color="var(--accent-lime)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>MESSAGE SENT!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '24px' }}>
                  Thank you <strong>{formData.name}</strong>. Our concierge team has received your message and will call or text you shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary" style={{ width: '100%' }}>
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
