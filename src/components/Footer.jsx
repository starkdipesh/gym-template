import React, { useState } from 'react';
import { Zap, MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight, Check, Shield } from 'lucide-react';

export default function Footer({ setCurrentView, onOpenTrial }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const navTo = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      paddingTop: '80px',
      position: 'relative'
    }}>
      {/* Final Conversion Callout Card */}
      <div className="container" style={{ marginBottom: '80px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(24, 29, 34, 0.9) 0%, rgba(198, 255, 0, 0.08) 100%)',
          border: '1.5px solid var(--accent-lime)',
          borderRadius: 'var(--radius-lg)',
          padding: '48px 36px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-glow)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <span className="badge-lime" style={{ marginBottom: '16px' }}>NO INTIMIDATION • NO COMMITMENT RISK</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '16px' }}>
            READY TO BUILD YOUR <span style={{ color: 'var(--accent-lime)' }}>STRONGEST SELF?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 28px' }}>
            Claim your 3-Day VIP All-Access Pass today. Experience our Olympic equipment, infrared saunas, and 1-on-1 coach orientation for free.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={onOpenTrial} className="btn-primary" style={{ padding: '16px 36px', fontSize: '1rem' }}>
              CLAIM YOUR 3-DAY FREE VIP PASS <ArrowRight size={18} />
            </button>
            <button onClick={() => navTo('membership')} className="btn-secondary" style={{ padding: '16px 32px' }}>
              EXPLORE MEMBERSHIP PLANS
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="container" style={{ paddingBottom: '60px' }}>
        <div className="grid-4" style={{ gap: '40px' }}>
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'var(--accent-lime)',
                color: '#0b0d0f',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Zap size={22} strokeWidth={3} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.3rem', color: '#fff' }}>
                TITAN<span style={{ color: 'var(--accent-lime)' }}>FORGE</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px' }}>
              The region's premier high-performance fitness facility, built for real body transformations, elite strength training, and supportive culture.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" aria-label="Instagram" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="YouTube" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="#" aria-label="Facebook" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '18px', letterSpacing: '0.08em' }}>NAVIGATION</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li><button onClick={() => navTo('home')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>Home</button></li>
              <li><button onClick={() => navTo('about')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>About Our Gym</button></li>
              <li><button onClick={() => navTo('programs')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>Fitness Programs</button></li>
              <li><button onClick={() => navTo('membership')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>Membership Pricing</button></li>
              <li><button onClick={() => navTo('transformations')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>Member Transformations</button></li>
              <li><button onClick={() => navTo('schedule')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>Class Schedule</button></li>
              <li style={{ paddingTop: '6px' }}>
                <button onClick={() => navTo('admin')} style={{ background: 'var(--accent-lime-muted)', border: '1px solid var(--accent-lime)', color: 'var(--accent-lime)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Shield size={13} /> GYM OWNER PORTAL
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Facility Hours & Contact */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '18px', letterSpacing: '0.08em' }}>CLUB LOCATION</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} color="var(--accent-lime)" style={{ flexShrink: 0 }} />
                <span>450 Athletic Performance Way, Suite 100, Metropolis, NY 10001</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Phone size={18} color="var(--accent-lime)" style={{ flexShrink: 0 }} />
                <span>+1 (800) 555-TITAN (8482)</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Clock size={18} color="var(--accent-lime)" style={{ flexShrink: 0 }} />
                <span>Mon - Sun: 5:00 AM - 12:00 Midnight (365 Days)</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter Signup */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '18px', letterSpacing: '0.08em' }}>FITNESS DIGEST</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '14px' }}>
              Subscribe for weekly fat loss guides, macro recipes, and workout tips.
            </p>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn-primary" style={{ padding: '10px' }}>
                  SUBSCRIBE NOW
                </button>
              </form>
            ) : (
              <div style={{ background: 'var(--accent-lime-muted)', color: 'var(--accent-lime)', padding: '12px', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={16} /> Subscribed to Titan Digest!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div style={{
        borderTop: '1px solid var(--border-color)',
        padding: '20px 0',
        background: '#080a0c',
        fontSize: '0.8rem',
        color: 'var(--text-muted)'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            © {new Date().getFullYear()} TITAN FORGE FITNESS CLUB. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Cancellation Transparency</a>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA Bar */}
      <div className="mobile-sticky-cta">
        <div>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>3-DAY ALL ACCESS</span>
          <strong style={{ fontSize: '0.85rem', color: 'var(--accent-lime)' }}>100% FREE VIP PASS</strong>
        </div>
        <button onClick={onOpenTrial} className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.8rem' }}>
          CLAIM FREE PASS
        </button>
      </div>
    </footer>
  );
}
