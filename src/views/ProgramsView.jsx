import React, { useState } from 'react';
import { programs } from '../data/gymData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProgramsView({ onOpenTrial }) {
  const [filterDifficulty, setFilterDifficulty] = useState('All');

  const filteredPrograms = filterDifficulty === 'All'
    ? programs
    : programs.filter(p => p.difficulty.toLowerCase().includes(filterDifficulty.toLowerCase()));

  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">SCIENTIFICALLY DESIGNED</span>
          <h1 className="section-title">PERFORMANCE & TRANSFORMATION PROGRAMS</h1>
          <p className="section-desc">
            Whether your target is aggressive fat loss, pure strength PRs, or athletic speed, our progressive programs deliver documented outcomes.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '24px' }}>
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => (
              <button
                key={diff}
                onClick={() => setFilterDifficulty(diff)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  background: filterDifficulty === diff ? 'var(--accent-lime)' : 'var(--bg-card)',
                  color: filterDifficulty === diff ? '#0b0d0f' : 'var(--text-secondary)',
                  border: '1px solid var(--border-color)',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                {diff.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid-3" style={{ gap: '30px' }}>
          {filteredPrograms.map((prog) => (
            <div key={prog.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '220px', position: 'relative' }}>
                <img src={prog.image} alt={prog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(11,13,15,0.85)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  color: 'var(--accent-lime)',
                  fontWeight: 800
                }}>
                  {prog.duration}
                </div>
              </div>

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span className="badge-lime" style={{ alignSelf: 'flex-start', marginBottom: '10px' }}>{prog.goal}</span>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{prog.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '20px', flex: 1 }}>
                  {prog.description}
                </p>

                <div style={{ marginBottom: '20px' }}>
                  {prog.features.map((f, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#fff', marginBottom: '4px' }}>
                      <CheckCircle2 size={14} color="var(--accent-lime)" /> <span>{f}</span>
                    </div>
                  ))}
                </div>

                <button onClick={onOpenTrial} className="btn-primary" style={{ width: '100%' }}>
                  ENROLL IN PROGRAM
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
