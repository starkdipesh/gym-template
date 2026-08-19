import React, { useState } from 'react';

export default function BeforeAfterSlider({ beforeImage, afterImage, name, timeline, metrics }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX, rect) => {
    const x = clientX - rect.left;
    let pos = (x / rect.width) * 100;
    if (pos < 5) pos = 5;
    if (pos > 95) pos = 95;
    setSliderPos(pos);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <div style={{ position: 'relative', width: '100%', borderRadius: 'var(--radius-md)', overflow: 'hidden', userSelect: 'none' }}>
      <div 
        style={{ position: 'relative', width: '100%', height: '360px', cursor: 'ew-resize' }}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background layer) */}
        <img 
          src={afterImage} 
          alt={`${name} after transformation`} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          background: 'var(--accent-lime)',
          color: '#0b0d0f',
          padding: '4px 10px',
          borderRadius: '4px',
          fontWeight: 800,
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase'
        }}>
          AFTER ({timeline})
        </div>

        {/* Before Image (Clipped layer) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: `${sliderPos}%`,
          overflow: 'hidden'
        }}>
          <img 
            src={beforeImage} 
            alt={`${name} before transformation`} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', maxWidth: 'none', width: '100%', minWidth: '100%' }}
          />
          <div style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            background: 'rgba(0, 0, 0, 0.75)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff',
            padding: '4px 10px',
            borderRadius: '4px',
            fontWeight: 800,
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}>
            BEFORE
          </div>
        </div>

        {/* Divider Slider Handle Line */}
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${sliderPos}%`,
          width: '3px',
          background: 'var(--accent-lime)',
          transform: 'translateX(-50%)',
          boxShadow: '0 0 12px var(--accent-lime)',
          zIndex: 10
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--accent-lime)',
            color: '#0b0d0f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: '0.85rem',
            boxShadow: '0 4px 14px rgba(0,0,0,0.5)'
          }}>
            ↔
          </div>
        </div>
      </div>

      {/* Metrics Bar under slider */}
      <div style={{
        background: 'var(--bg-card)',
        padding: '14px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTop: '1px solid var(--border-color)',
        fontSize: '0.85rem'
      }}>
        <div>
          <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.7rem' }}>FAT LOSS</span>
          <strong style={{ color: 'var(--accent-lime)', fontSize: '0.95rem' }}>{metrics.weightChange}</strong>
        </div>
        <div style={{ width: '1px', height: '24px', background: 'var(--border-color)' }} />
        <div>
          <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.7rem' }}>MUSCLE GAIN</span>
          <strong style={{ color: '#fff', fontSize: '0.95rem' }}>{metrics.muscleGain}</strong>
        </div>
        <div style={{ width: '1px', height: '24px', background: 'var(--border-color)' }} />
        <div>
          <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.7rem' }}>BODY FAT</span>
          <strong style={{ color: 'var(--accent-orange)', fontSize: '0.95rem' }}>{metrics.bodyFatBefore} → {metrics.bodyFatAfter}</strong>
        </div>
      </div>
    </div>
  );
}
