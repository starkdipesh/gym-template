import React, { useState } from 'react';
import { facilityZones } from '../../data/gymData';
import { CheckCircle2 } from 'lucide-react';

export default function FacilityShowcaseSection({ setCurrentView }) {
  const [activeZoneId, setActiveZoneId] = useState('strength');
  const activeZone = facilityZones.find(z => z.id === activeZoneId) || facilityZones[0];

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">STATE-OF-THE-ART FACILITY</span>
          <h2 className="section-title">WORLD-CLASS TRAINING ZONES</h2>
          <p className="section-desc">
            Over 25,000 sq. ft. of climate-controlled, ultra-clean training arenas built for every aspect of performance & recovery.
          </p>
        </div>

        {/* Zone Selector Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {facilityZones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setActiveZoneId(zone.id)}
              style={{
                padding: '12px 22px',
                borderRadius: 'var(--radius-full)',
                background: activeZoneId === zone.id ? 'var(--accent-lime)' : 'var(--bg-card)',
                color: activeZoneId === zone.id ? '#0b0d0f' : 'var(--text-secondary)',
                border: activeZoneId === zone.id ? 'none' : '1px solid var(--border-color)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              {zone.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Active Zone Card */}
        <div className="grid-2" style={{ alignItems: 'center', gap: '40px' }}>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-color)', height: '360px', width: '100%' }}>
            <img
              src={activeZone.image}
              alt={activeZone.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div>
            <span className="badge-lime" style={{ marginBottom: '12px' }}>{activeZone.tagline}</span>
            <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '16px' }}>{activeZone.name}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '24px' }}>
              {activeZone.description}
            </p>

            <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-lime)', marginBottom: '12px', letterSpacing: '0.08em' }}>
              KEY SPECIFICATIONS & EQUIPMENT
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '28px' }}>
              {activeZone.specs.map((spec, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#fff' }}>
                  <CheckCircle2 size={16} color="var(--accent-lime)" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <button onClick={() => setCurrentView('facilities')} className="btn-secondary">
              EXPLORE ALL FACILITIES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
