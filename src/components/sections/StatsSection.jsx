import React from 'react';
import { gymStats } from '../../data/gymData';

export default function StatsSection() {
  return (
    <section style={{ background: 'var(--bg-secondary)', borderY: '1px solid var(--border-color)', padding: '36px 0' }}>
      <div className="container">
        <div className="grid-4" style={{ gap: '24px' }}>
          {gymStats.slice(0, 4).map((stat, idx) => (
            <div key={idx} style={{
              background: 'var(--bg-card)',
              padding: '24px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              textAlign: 'center'
            }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 900,
                color: 'var(--accent-lime)',
                lineHeight: 1,
                marginBottom: '8px'
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff', textTransform: 'uppercase', marginBottom: '4px' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
