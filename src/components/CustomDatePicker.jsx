import React, { useState, useRef, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Check } from 'lucide-react';

export default function CustomDatePicker({ value, onChange, label = "SELECT DATE" }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Helper to get days in month
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const totalDays = getDaysInMonth(currentYear, currentMonth);
  const startDay = getFirstDayOfMonth(currentYear, currentMonth);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleSelectDay = (day) => {
    const formattedMonth = currentMonth + 1 < 10 ? `0${currentMonth + 1}` : `${currentMonth + 1}`;
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const dateStr = `${currentYear}-${formattedMonth}-${formattedDay}`;
    onChange(dateStr);
    setIsOpen(false);
  };

  const handleQuickSelectToday = () => {
    const y = today.getFullYear();
    const m = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : `${today.getMonth() + 1}`;
    const d = today.getDate() < 10 ? `0${today.getDate()}` : `${today.getDate()}`;
    onChange(`${y}-${m}-${d}`);
    setIsOpen(false);
  };

  // Format display string
  const formatDisplayDate = (val) => {
    if (!val) return label;
    const parts = val.split('-');
    if (parts.length === 3) {
      const y = parts[0];
      const m = parseInt(parts[1], 10) - 1;
      const d = parts[2];
      return `${monthNames[m]} ${d}, ${y}`;
    }
    return val;
  };

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      {/* Target Trigger Input Button */}
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
          {formatDisplayDate(value)}
        </span>
        <Calendar size={18} color="var(--accent-lime)" />
      </div>

      {/* Popover Calendar Grid Box */}
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
          zIndex: 1550,
          animation: 'fadeIn 0.2s ease-out'
        }}>
          {/* Header Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}>
            <button
              type="button"
              onClick={prevMonth}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: '#fff',
                borderRadius: '6px',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronLeft size={18} />
            </button>

            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1rem', color: '#fff' }}>
              {monthNames[currentMonth]} {currentYear}
            </div>

            <button
              type="button"
              onClick={nextMonth}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: '#fff',
                borderRadius: '6px',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Days of Week Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center', marginBottom: '8px' }}>
            {daysOfWeek.map((d) => (
              <div key={d} style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-lime)' }}>
                {d}
              </div>
            ))}
          </div>

          {/* Calendar Day Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
            {/* Blank offset boxes */}
            {[...Array(startDay)].map((_, i) => (
              <div key={`blank-${i}`} />
            ))}

            {/* Day numbers */}
            {[...Array(totalDays)].map((_, i) => {
              const day = i + 1;
              const formattedM = currentMonth + 1 < 10 ? `0${currentMonth + 1}` : `${currentMonth + 1}`;
              const formattedD = day < 10 ? `0${day}` : `${day}`;
              const dayStr = `${currentYear}-${formattedM}-${formattedD}`;
              const isSelected = value === dayStr;
              const isToday = today.getFullYear() === currentYear && today.getMonth() === currentMonth && today.getDate() === day;

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleSelectDay(day)}
                  style={{
                    height: '34px',
                    borderRadius: 'var(--radius-sm)',
                    background: isSelected ? 'var(--accent-lime)' : isToday ? 'var(--accent-lime-muted)' : 'var(--bg-card)',
                    color: isSelected ? '#0b0d0f' : isToday ? 'var(--accent-lime)' : '#fff',
                    border: isSelected ? 'none' : isToday ? '1px solid var(--accent-lime)' : '1px solid var(--border-color)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: isSelected || isToday ? 800 : 600,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Bottom Quick Select */}
          <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              type="button"
              onClick={handleQuickSelectToday}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--accent-lime)',
                fontSize: '0.78rem',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              SELECT TODAY
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                fontSize: '0.78rem',
                cursor: 'pointer'
              }}
            >
              CANCEL
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
