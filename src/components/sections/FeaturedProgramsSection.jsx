import React from 'react';
import { programs } from '../../data/gymData';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProgramsSection({ setCurrentView, onOpenTrial }) {
  return (
    <section className="section-padding">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="section-subtitle">RESULT-DRIVEN METHODOLOGY</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>FEATURED PROGRAMS</h2>
          </div>
          <button onClick={() => setCurrentView('programs')} className="btn-outline-lime">
            VIEW ALL PROGRAMS <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid-3">
          {programs.slice(0, 3).map((prog) => (
            <div key={prog.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '220px' }}>
                <img src={prog.image} alt={prog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(11, 13, 15, 0.85)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--accent-lime)'
                }}>
                  {prog.duration}
                </div>
              </div>

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span className="badge-lime" style={{ alignSelf: 'flex-start', marginBottom: '10px' }}>{prog.difficulty}</span>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{prog.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '20px', flex: 1 }}>
                  {prog.description}
                </p>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Coach: <strong style={{ color: '#fff' }}>{prog.trainer}</strong></span>
                  <button onClick={onOpenTrial} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
                    ENROLL NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
