import React, { useState } from 'react';
import { galleryImages } from '../data/gymData';
import { Maximize2 } from 'lucide-react';

export default function GalleryView({ onOpenLightbox }) {
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">VISUAL IMMERSION</span>
          <h1 className="section-title">GYM GALLERY & ATMOSPHERE</h1>
          <p className="section-desc">
            Take a visual tour of our high-octane equipment, turf zones, cryotherapy suites, and group classes.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '24px' }}>
            {['All', 'Equipment', 'Turf', 'Recovery', 'Classes'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: 'var(--radius-full)',
                  background: filter === cat ? 'var(--accent-lime)' : 'var(--bg-card)',
                  color: filter === cat ? '#0b0d0f' : 'var(--text-secondary)',
                  border: '1px solid var(--border-color)',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid-3" style={{ gap: '24px' }}>
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => onOpenLightbox(img)}
              className="glass-card"
              style={{ height: '280px', position: 'relative', cursor: 'pointer', overflow: 'hidden' }}
            >
              <img src={img.url} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 50%, rgba(11,13,15,0.9) 100%)',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end'
              }}>
                <span className="badge-lime" style={{ alignSelf: 'flex-start', marginBottom: '4px' }}>{img.category}</span>
                <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
