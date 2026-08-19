import React from 'react';
import { ShieldCheck, Award, Users, Heart, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { gymStats } from '../data/gymData';

export default function AboutView({ onOpenTrial, setCurrentView }) {
  return (
    <div className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <span className="section-subtitle">OUR STORY & PHILOSOPHY</span>
          <h1 className="section-title">BUILT FOR DISCIPLINE, RESULTS & COMMUNITY</h1>
          <p className="section-desc">
            Founded in 2016, TITAN FORGE was born out of frustration with ordinary commercial gyms that prioritize passive subscriptions over real physical transformations.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid-2" style={{ alignItems: 'center', gap: '50px', marginBottom: '80px' }}>
          <div>
            <span className="badge-lime" style={{ marginBottom: '16px' }}>THE TITAN MISSION</span>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '20px' }}>WE BELIEVE STRENGTH CHANGES EVERYTHING</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '20px' }}>
              Physical transformation is never just about aesthetics. When you push your physical limits on the barbell or sprint turf, you build mental endurance, confidence, and discipline that spills into every area of your life.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>
              Our facility is engineered to provide the exact environment, machinery, coaching, and recovery science needed to achieve world-class physical output.
            </p>

            <div style={{ display: 'flex', gap: '16px' }}>
              <button onClick={onOpenTrial} className="btn-primary">
                EXPERIENCE TITAN FORGE FREE <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-color)', height: '440px' }}>
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
              alt="Titan Forge Gym Floor"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-header text-center">
            <span className="section-subtitle">STANDARDS OF EXCELLENCE</span>
            <h2 className="section-title">THE 4 TITAN PILLARS</h2>
          </div>

          <div className="grid-4">
            {[
              { title: "Zero Ego Culture", desc: "No judgment or intimidation. Whether lifting 10 lbs or 500 lbs, every member is respected and supported.", icon: Heart },
              { title: "Olympic Equipment", desc: "Calibrated Eleiko plates, Hammer Strength iso-lateral machines, and competition platforms.", icon: Award },
              { title: "DEXA Science", desc: "We track muscle gain and fat loss using medical-grade biometric scanning, not unreliable bathroom scales.", icon: Zap },
              { title: "Cryo Recovery", desc: "Infrared saunas and 39°F plunge tubs to ensure you recover fast and prevent chronic soreness.", icon: ShieldCheck }
            ].map((p, i) => (
              <div key={i} className="glass-card" style={{ padding: '28px' }}>
                <p.icon size={32} color="var(--accent-lime)" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '40px'
        }}>
          <div className="grid-4">
            {gymStats.slice(0, 4).map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent-lime)' }}>{s.value}</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
