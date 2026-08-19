import React, { useState } from 'react';
import { Award, Star, CheckCircle2, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';
import { trainers } from '../data/gymData';

export default function PersonalTrainingView({ onOpenTrainer, onOpenTrial }) {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">1-ON-1 ELITE COACHING</span>
          <h1 className="section-title">ACCELERATE YOUR RESULTS WITH MASTER TRAINERS</h1>
          <p className="section-desc">
            No random exercises. We create tailored biomechanical programs, macronutrient targets, and weekly accountability to guarantee your physical transformation.
          </p>
        </div>

        {/* 4 Pillars of PT */}
        <div className="grid-4" style={{ marginBottom: '80px' }}>
          {[
            { title: "3D Biometric Audit", desc: "Detailed DEXA body composition and joint mobility screening before day one." },
            { title: "Custom Micro-Periodization", desc: "Workouts tailored to your work schedule, recovery rate, and physical goals." },
            { title: "Macronutrient Coaching", desc: "Exact calorie, protein, carb, and hydration targets updated weekly." },
            { title: "24/7 Coach Direct Access", desc: "Message your trainer anytime on WhatsApp for form checks and eating guidance." }
          ].map((item, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '24px' }}>
              <CheckCircle2 size={28} color="var(--accent-lime)" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Trainers Directory Grid */}
        <div className="section-header text-center">
          <span className="section-subtitle">SELECT YOUR MASTER COACH</span>
          <h2 className="section-title">CERTIFIED COACHING FACULTY</h2>
        </div>

        <div className="grid-2" style={{ gap: '30px', marginBottom: '60px' }}>
          {trainers.map((tr) => (
            <div key={tr.id} className="glass-card" style={{ padding: '24px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <img src={tr.image} alt={tr.name} style={{ width: '140px', height: '180px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
              <div style={{ flex: 1, minWidth: '200px' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '4px' }}>{tr.name}</h3>
                <p style={{ color: 'var(--accent-orange)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '8px' }}>{tr.role}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '14px', lineHeight: 1.5 }}>{tr.bio}</p>
                <button onClick={() => onOpenTrainer(tr)} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
                  BOOK CONSULTATION WITH {tr.name.split(' ')[0].toUpperCase()}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
