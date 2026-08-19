import React, { useState } from 'react';
import { weeklySchedule } from '../data/gymData';
import { Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export default function ScheduleView({ onOpenClass }) {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const daySchedule = weeklySchedule.filter(s => s.day === selectedDay);

  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">INTERACTIVE TIMETABLE</span>
          <h1 className="section-title">WEEKLY GROUP CLASS SCHEDULE</h1>
          <p className="section-desc">
            Filter by day to view class times, instructors, training rooms, and reserve your class pass spot.
          </p>

          {/* Day Selector */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '24px' }}>
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-full)',
                  background: selectedDay === day ? 'var(--accent-lime)' : 'var(--bg-card)',
                  color: selectedDay === day ? '#0b0d0f' : 'var(--text-secondary)',
                  border: '1px solid var(--border-color)',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                {day.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Timetable List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '900px', margin: '0 auto' }}>
          {daySchedule.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '20px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{
                  background: 'var(--accent-lime-muted)',
                  color: 'var(--accent-lime)',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-sm)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Clock size={16} /> {item.time}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '2px' }}>{item.class}</h3>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    Trainer: <strong style={{ color: '#fff' }}>{item.trainer}</strong> • Room: <span style={{ color: 'var(--accent-lime)' }}>{item.room}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenClass({ title: item.class, instructor: item.trainer, duration: '45 Mins', caloriesBurned: '500 kcal', intensity: 'High', spotsLeft: 3 })}
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.8rem' }}
              >
                RESERVE SPOT
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
