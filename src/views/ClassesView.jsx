import React, { useState } from 'react';
import { groupClasses } from '../data/gymData';
import { Users, Flame, Clock, Calendar, CheckCircle2 } from 'lucide-react';

export default function ClassesView({ onOpenClass, setCurrentView }) {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">HIGH ENERGY GROUP COACHING</span>
          <h1 className="section-title">GROUP FITNESS CLASSES</h1>
          <p className="section-desc">
            Led by elite head coaches, our high-energy group classes push your limits with pulse-pounding music, heart-rate tracking, and camaraderie.
          </p>
          <div style={{ marginTop: '20px' }}>
            <button onClick={() => setCurrentView('schedule')} className="btn-outline-lime">
              VIEW INTERACTIVE 7-DAY TIMETABLE
            </button>
          </div>
        </div>

        <div className="grid-2" style={{ gap: '30px' }}>
          {groupClasses.map((cls) => (
            <div key={cls.id} className="glass-card" style={{ padding: '24px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <img src={cls.image} alt={cls.title} style={{ width: '160px', height: '180px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
              <div style={{ flex: 1, minWidth: '220px', display: 'flex', flexDirection: 'column' }}>
                <span className="badge-orange" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>{cls.category}</span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '6px' }}>{cls.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', marginBottom: '14px' }}>{cls.description}</p>

                <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  <div><strong style={{ color: '#fff' }}>Duration:</strong> {cls.duration}</div>
                  <div><strong style={{ color: 'var(--accent-lime)' }}>Burn:</strong> {cls.caloriesBurned}</div>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-lime)', fontWeight: 700 }}>
                    {cls.spotsLeft} SPOTS LEFT
                  </span>
                  <button onClick={() => onOpenClass(cls)} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
                    BOOK SPOT NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
