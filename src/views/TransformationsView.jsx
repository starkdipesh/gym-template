import React from 'react';
import { transformations } from '../data/gymData';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { ArrowRight, Trophy } from 'lucide-react';

export default function TransformationsView({ onOpenTrial }) {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">REAL PEOPLE • REAL RESULTS</span>
          <h1 className="section-title">BODY TRANSFORMATION GALLERY</h1>
          <p className="section-desc">
            Drag the slider handles on the transformation photos below to compare before and after metrics.
          </p>
        </div>

        <div className="grid-3" style={{ gap: '30px', marginBottom: '60px' }}>
          {transformations.map((t) => (
            <div key={t.id} className="glass-card" style={{ padding: '20px' }}>
              <BeforeAfterSlider
                beforeImage={t.beforeImage}
                afterImage={t.afterImage}
                name={t.name}
                timeline={t.timeline}
                metrics={t.metrics}
              />

              <div style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.3rem' }}>{t.name}, {t.age}</h3>
                  <span className="badge-lime">{t.program}</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '16px', lineHeight: 1.5 }}>
                  "{t.quote}"
                </p>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Occupation: <strong style={{ color: '#fff' }}>{t.occupation}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(24, 29, 34, 0.9) 0%, rgba(198, 255, 0, 0.1) 100%)',
          border: '1.5px solid var(--accent-lime)',
          borderRadius: 'var(--radius-lg)',
          padding: '48px',
          textAlign: 'center'
        }}>
          <Trophy size={48} color="var(--accent-lime)" style={{ margin: '0 auto 16px' }} />
          <h2 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>YOU ARE NEXT. START YOUR STORY TODAY.</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 28px' }}>
            Book your free 3-Day VIP pass and body composition assessment to kickstart your 12-week transformation journey.
          </p>
          <button onClick={onOpenTrial} className="btn-primary" style={{ padding: '16px 36px' }}>
            CLAIM 3-DAY VIP PASS NOW <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
