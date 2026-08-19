import React from 'react';
import { whyChooseUs } from '../../data/gymData';
import { Zap } from 'lucide-react';

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">THE TITAN FORGE ADVANTAGE</span>
          <h2 className="section-title">WHY ATHLETES & BEGINNERS CHOOSE US</h2>
          <p className="section-desc">
            We eliminated everything people hate about ordinary commercial gyms—overcrowding, broken equipment, rude staff, and cookie-cutter routines.
          </p>
        </div>

        <div className="grid-3">
          {whyChooseUs.map((item) => (
            <div key={item.id} className="glass-card" style={{ padding: '32px' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--accent-lime-muted)',
                border: '1px solid rgba(198, 255, 0, 0.3)',
                color: 'var(--accent-lime)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Zap size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
