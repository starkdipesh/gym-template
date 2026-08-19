import React from 'react';
import { facilityZones } from '../data/gymData';
import OccupancyHeatmap from '../components/OccupancyHeatmap';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function FacilitiesView({ onOpenTrial }) {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">25,000 SQ. FT. OF EXCELLENCE</span>
          <h1 className="section-title">FACILITIES & EQUIPMENT ARSENAL</h1>
          <p className="section-desc">
            Explore our state-of-the-art training zones, competition platforms, cryotherapy suites, and executive amenities.
          </p>
        </div>

        {/* Real-time Gym Occupancy Heatmap */}
        <div style={{ marginBottom: '50px' }}>
          <OccupancyHeatmap />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {facilityZones.map((zone, idx) => (
            <div
              key={zone.id}
              className="glass-card"
              style={{
                padding: '36px',
                display: 'grid',
                gridTemplateColumns: idx % 2 === 0 ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
                gap: '40px',
                alignItems: 'center'
              }}
            >
              <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                <span className="badge-lime" style={{ marginBottom: '12px' }}>{zone.tagline}</span>
                <h2 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>{zone.name}</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>
                  {zone.description}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
                  {zone.specs.map((spec, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#fff' }}>
                      <CheckCircle2 size={16} color="var(--accent-lime)" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <button onClick={onOpenTrial} className="btn-primary">
                  SEE THIS ZONE IN PERSON (FREE TRIAL)
                </button>
              </div>

              <div style={{ order: idx % 2 === 0 ? 2 : 1, borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '320px' }}>
                <img src={zone.image} alt={zone.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
