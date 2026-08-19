import React from 'react';
import { Zap, ArrowRight, Star } from 'lucide-react';

export default function HeroSection({ onOpenTrial, setCurrentView }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(180deg, rgba(11, 13, 15, 0.55) 0%, #0b0d0f 100%), url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      overflow: 'hidden',
      padding: '80px 0'
    }}>
      {/* Radial Glow effect */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(198, 255, 0, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(40px)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '820px' }}>
          <div className="badge-lime" style={{ marginBottom: '20px' }}>
            <Zap size={14} fill="var(--accent-lime)" /> METROPOLIS' PREMIER FITNESS & TRANSFORMATION CLUB
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
            color: '#ffffff',
            lineHeight: 1.02,
            marginBottom: '24px',
            textShadow: '0 4px 20px rgba(0,0,0,0.8)'
          }}>
            BUILD YOUR <span style={{ color: 'var(--accent-lime)' }}>STRONGEST</span> SELF.
          </h1>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            maxWidth: '680px',
            marginBottom: '36px',
            lineHeight: 1.6
          }}>
            State-of-the-art Eleiko & Hammer Strength equipment, 1-on-1 expert coaching, infrared recovery saunas, and a supportive zero-ego community engineered for measurable results.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <button onClick={onOpenTrial} className="btn-primary" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>
              START YOUR FREE 3-DAY VIP PASS <ArrowRight size={20} />
            </button>
            <button onClick={() => setCurrentView('membership')} className="btn-secondary" style={{ padding: '18px 32px', fontSize: '1rem' }}>
              EXPLORE MEMBERSHIPS
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--accent-lime)" color="var(--accent-lime)" />
                ))}
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#fff' }}>4.95 / 5 Rating</span>
            </div>

            <div style={{ color: 'var(--text-muted)' }}>•</div>

            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <strong style={{ color: '#fff' }}>5,200+</strong> Active Members Transforming Daily
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
