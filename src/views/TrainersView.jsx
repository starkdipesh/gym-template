import React, { useState } from 'react';
import { trainers } from '../data/gymData';
import { Star, Award, CheckCircle2, Search } from 'lucide-react';

export default function TrainersView({ onOpenTrainer }) {
  const [search, setSearch] = useState('');

  const filteredTrainers = trainers.filter(tr => 
    tr.name.toLowerCase().includes(search.toLowerCase()) ||
    tr.specialties.some(s => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">EXPERT COACHING DIRECTORY</span>
          <h1 className="section-title">CERTIFIED MASTER COACHES</h1>
          <p className="section-desc">
            Our trainers hold CSCS, NASM, and Kinesiology degrees with proven track records of transforming lives.
          </p>

          <div style={{ maxWidth: '400px', margin: '24px auto 0', position: 'relative' }}>
            <input
              type="text"
              className="form-input"
              placeholder="Search trainer by name or specialty..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ paddingLeft: '40px' }}
            />
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          </div>
        </div>

        <div className="grid-3" style={{ gap: '30px' }}>
          {filteredTrainers.map((tr) => (
            <div key={tr.id} className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '280px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '16px' }}>
                <img src={tr.image} alt={tr.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>{tr.name}</h3>
              <p style={{ color: 'var(--accent-orange)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '12px' }}>{tr.role}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {tr.certifications.map(c => (
                  <span key={c} style={{ background: 'rgba(198,255,0,0.1)', color: 'var(--accent-lime)', fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '4px' }}>
                    {c}
                  </span>
                ))}
              </div>

              <button onClick={() => onOpenTrainer(tr)} className="btn-primary" style={{ marginTop: 'auto', width: '100%', padding: '10px' }}>
                VIEW FULL PROFILE & BOOK
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
