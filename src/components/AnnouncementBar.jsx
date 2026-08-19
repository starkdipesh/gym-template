import React, { useState } from 'react';
import { Flame, ArrowRight, X } from 'lucide-react';

export default function AnnouncementBar({ onOpenTrial }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div style={{
      background: 'linear-gradient(90deg, #ff5a1f 0%, #c6ff00 100%)',
      color: '#0b0d0f',
      padding: '8px 36px 8px 12px',
      fontSize: '0.78rem',
      fontWeight: '800',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      flexWrap: 'wrap',
      position: 'relative',
      zIndex: 1001,
      textAlign: 'center'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', minWidth: 0 }}>
        <Flame size={15} style={{ flexShrink: 0 }} className="pulse-element" />
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          LIMITED TIME: FREE 3-DAY VIP PASS + DEXA SCAN!
        </span>
      </div>
      <button 
        onClick={onOpenTrial} 
        style={{
          background: '#0b0d0f',
          color: '#c6ff00',
          border: 'none',
          padding: '3px 10px',
          borderRadius: '4px',
          fontSize: '0.72rem',
          fontWeight: '900',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          flexShrink: 0
        }}
      >
        CLAIM PASS <ArrowRight size={12} />
      </button>
      <button 
        onClick={() => setVisible(false)}
        style={{
          position: 'absolute',
          right: '8px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: '#0b0d0f',
          cursor: 'pointer',
          opacity: 0.8,
          padding: '4px'
        }}
        aria-label="Dismiss announcement"
      >
        <X size={16} />
      </button>
    </div>
  );
}
