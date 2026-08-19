import React, { useState, useRef, useEffect } from 'react';
import { Clock, Check, ChevronUp, ChevronDown } from 'lucide-react';

export default function ClockTimePicker({ value, onChange, label = "SELECT TIME" }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Parse initial value like "06:30 PM" or default to "07:00 AM"
  const parseTime = (val) => {
    if (!val) return { hour: 7, minute: 0, period: 'AM' };
    const parts = val.trim().split(' ');
    const timeParts = parts[0]?.split(':') || ['7', '00'];
    let h = parseInt(timeParts[0], 10) || 7;
    let m = parseInt(timeParts[1], 10) || 0;
    let p = parts[1] || 'AM';
    return { hour: h, minute: m, period: p };
  };

  const [timeState, setTimeState] = useState(parseTime(value));
  const containerRef = useRef(null);

  useEffect(() => {
    if (value) setTimeState(parseTime(value));
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatTimeString = (h, m, p) => {
    const formattedHour = h < 10 ? `0${h}` : `${h}`;
    const formattedMin = m < 10 ? `0${m}` : `${m}`;
    return `${formattedHour}:${formattedMin} ${p}`;
  };

  const handleSelect = (h, m, p) => {
    const timeStr = formatTimeString(h, m, p);
    setTimeState({ hour: h, minute: m, period: p });
    onChange(timeStr);
    setIsOpen(false);
  };

  const adjustHour = (delta) => {
    let nextH = timeState.hour + delta;
    if (nextH > 12) nextH = 1;
    if (nextH < 1) nextH = 12;
    const timeStr = formatTimeString(nextH, timeState.minute, timeState.period);
    setTimeState(prev => ({ ...prev, hour: nextH }));
    onChange(timeStr);
  };

  const adjustMinute = (delta) => {
    let nextM = timeState.minute + delta;
    if (nextM >= 60) nextM = 0;
    if (nextM < 0) nextM = 45;
    const timeStr = formatTimeString(timeState.hour, nextM, timeState.period);
    setTimeState(prev => ({ ...prev, minute: nextM }));
    onChange(timeStr);
  };

  const togglePeriod = () => {
    const nextP = timeState.period === 'AM' ? 'PM' : 'AM';
    const timeStr = formatTimeString(timeState.hour, timeState.minute, nextP);
    setTimeState(prev => ({ ...prev, period: nextP }));
    onChange(timeStr);
  };

  const presetTimes = [
    "06:00 AM", "07:30 AM", "09:00 AM", 
    "12:00 PM", "05:00 PM", "06:30 PM", "08:00 PM"
  ];

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      {/* Input Display Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="form-input"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          border: isOpen ? '1px solid var(--accent-lime)' : '1px solid var(--border-color)',
          boxShadow: isOpen ? '0 0 15px rgba(198, 255, 0, 0.25)' : 'none',
          background: 'var(--bg-card)'
        }}
      >
        <span style={{ color: value ? '#fff' : 'var(--text-muted)', fontWeight: value ? 700 : 400 }}>
          {value || label}
        </span>
        <Clock size={18} color="var(--accent-lime)" />
      </div>

      {/* ClockPicker Popover Box */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: '8px',
          background: 'var(--bg-secondary)',
          border: '1.5px solid var(--accent-lime)',
          borderRadius: 'var(--radius-md)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.9)',
          padding: '20px',
          zIndex: 1500,
          animation: 'fadeIn 0.2s ease-out'
        }}>
          {/* Header */}
          <div style={{
            fontSize: '0.72rem',
            fontWeight: 800,
            color: 'var(--accent-lime)',
            letterSpacing: '0.1em',
            textAlign: 'center',
            marginBottom: '14px',
            textTransform: 'uppercase'
          }}>
            CLOCK TIME PICKER
          </div>

          {/* Interactive Clock Face Spinner */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            background: 'var(--bg-card)',
            padding: '16px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-color)',
            marginBottom: '16px'
          }}>
            {/* Hours Control */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button
                type="button"
                onClick={() => adjustHour(1)}
                style={{ background: 'none', border: 'none', color: 'var(--accent-lime)', cursor: 'pointer' }}
              >
                <ChevronUp size={20} />
              </button>
              <span style={{ fontSize: '1.8rem', fontWeight: 900, fontFamily: 'var(--font-heading)', color: '#fff', width: '45px', textAlign: 'center' }}>
                {timeState.hour < 10 ? `0${timeState.hour}` : timeState.hour}
              </span>
              <button
                type="button"
                onClick={() => adjustHour(-1)}
                style={{ background: 'none', border: 'none', color: 'var(--accent-lime)', cursor: 'pointer' }}
              >
                <ChevronDown size={20} />
              </button>
            </div>

            <span style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--accent-lime)' }}>:</span>

            {/* Minutes Control */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button
                type="button"
                onClick={() => adjustMinute(15)}
                style={{ background: 'none', border: 'none', color: 'var(--accent-lime)', cursor: 'pointer' }}
              >
                <ChevronUp size={20} />
              </button>
              <span style={{ fontSize: '1.8rem', fontWeight: 900, fontFamily: 'var(--font-heading)', color: '#fff', width: '45px', textAlign: 'center' }}>
                {timeState.minute < 10 ? `0${timeState.minute}` : timeState.minute}
              </span>
              <button
                type="button"
                onClick={() => adjustMinute(-15)}
                style={{ background: 'none', border: 'none', color: 'var(--accent-lime)', cursor: 'pointer' }}
              >
                <ChevronDown size={20} />
              </button>
            </div>

            {/* AM / PM Toggle */}
            <button
              type="button"
              onClick={togglePeriod}
              style={{
                background: 'var(--accent-lime)',
                color: '#0b0d0f',
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: '1rem',
                padding: '8px 14px',
                borderRadius: 'var(--radius-sm)',
                border: 'none',
                cursor: 'pointer',
                marginLeft: '8px'
              }}
            >
              {timeState.period}
            </button>
          </div>

          {/* Quick Slot Presets */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 700 }}>
              POPULAR SESSION SLOTS:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {presetTimes.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => {
                    onChange(preset);
                    setIsOpen(false);
                  }}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    background: value === preset ? 'var(--accent-lime)' : 'var(--bg-card)',
                    color: value === preset ? '#0b0d0f' : 'var(--text-secondary)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          {/* Confirm Button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="btn-primary"
            style={{ width: '100%', padding: '10px', fontSize: '0.85rem' }}
          >
            SET TIME <Check size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
