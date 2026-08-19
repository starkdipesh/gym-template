import React, { useState } from 'react';
import { Users, Clock, Flame, ShieldAlert, Activity } from 'lucide-react';

export default function OccupancyHeatmap() {
  const [selectedDay, setSelectedDay] = useState('Today');

  // Peak hours data (simulated real-time gym floor occupancy percentages)
  const hourlyData = [
    { hour: '5 AM', occupancy: 25, status: 'Quiet' },
    { hour: '6 AM', occupancy: 55, status: 'Moderate' },
    { hour: '7 AM', occupancy: 82, status: 'Busy' },
    { hour: '8 AM', occupancy: 68, status: 'Moderate' },
    { hour: '9 AM', occupancy: 40, status: 'Quiet' },
    { hour: '11 AM', occupancy: 30, status: 'Quiet' },
    { hour: '1 PM', occupancy: 45, status: 'Quiet' },
    { hour: '4 PM', occupancy: 65, status: 'Moderate' },
    { hour: '5 PM', occupancy: 94, status: 'Peak' },
    { hour: '6 PM', occupancy: 96, status: 'Peak' },
    { hour: '7 PM', occupancy: 88, status: 'Busy' },
    { hour: '8 PM', occupancy: 60, status: 'Moderate' },
    { hour: '9 PM', occupancy: 35, status: 'Quiet' },
    { hour: '10 PM', occupancy: 15, status: 'Quiet' },
  ];

  const currentOccupancy = 44; // 44% filled right now

  return (
    <div className="glass-card" style={{ padding: '28px', border: '1px solid var(--border-color)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span className="badge-lime" style={{ marginBottom: '6px' }}>
            <Activity size={13} color="var(--accent-lime)" /> REAL-TIME GYM TELEMETRY
          </span>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '2px' }}>LIVE GYM FLOOR OCCUPANCY & PEAK HOURS</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem' }}>
            Check crowd density in real-time before your workout session.
          </p>
        </div>

        {/* Live occupancy indicator widget */}
        <div style={{
          background: 'var(--bg-secondary)',
          border: '1.5px solid var(--accent-lime)',
          borderRadius: 'var(--radius-sm)',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px'
        }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'var(--accent-lime-muted)',
            color: 'var(--accent-lime)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: '1.1rem'
          }}>
            {currentOccupancy}%
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase' }}>CURRENT CROWD LEVEL</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-lime)', display: 'inline-block' }} className="pulse-element" />
              MODERATE (Plenty of Racks Available)
            </div>
          </div>
        </div>
      </div>

      {/* Hourly Bar Heatmap Chart */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '140px', paddingTop: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
          {hourlyData.map((item, idx) => {
            const isPeak = item.occupancy >= 85;
            const isBusy = item.occupancy >= 60 && item.occupancy < 85;
            const barColor = isPeak ? 'var(--accent-orange)' : isBusy ? '#00f2fe' : 'var(--accent-lime)';

            return (
              <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '4px' }}>
                  {item.occupancy}%
                </div>
                <div style={{
                  width: '100%',
                  height: `${item.occupancy}%`,
                  background: barColor,
                  borderRadius: '4px 4px 0 0',
                  transition: 'height 0.3s ease',
                  opacity: 0.85
                }} />
              </div>
            );
          })}
        </div>

        {/* X-Axis Hour Labels */}
        <div style={{ display: 'flex', gap: '8px', paddingTop: '8px' }}>
          {hourlyData.map((item, idx) => (
            <div key={idx} style={{ flex: 1, textAlign: 'center', fontSize: '0.68rem', color: 'var(--text-secondary)', fontWeight: 700 }}>
              {item.hour}
            </div>
          ))}
        </div>
      </div>

      {/* Legend & Advice */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '0.8rem', color: 'var(--text-secondary)', paddingTop: '10px' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', background: 'var(--accent-lime)', borderRadius: '2px' }} /> Quiet (&lt;50%)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', background: '#00f2fe', borderRadius: '2px' }} /> Moderate (50-80%)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', background: 'var(--accent-orange)', borderRadius: '2px' }} /> Peak (85%+)
          </div>
        </div>

        <div style={{ color: 'var(--accent-lime)', fontWeight: 700 }}>
          💡 Best time to visit today: <strong>9:00 AM - 3:00 PM</strong> or after <strong>8:30 PM</strong>
        </div>
      </div>
    </div>
  );
}
