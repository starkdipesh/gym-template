import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ image, onClose, onNext, onPrev }) {
  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ background: 'rgba(0,0,0,0.95)' }}>
      <div 
        onClick={(e) => e.stopPropagation()} 
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <button className="modal-close" onClick={onClose} style={{ top: '-45px', right: '0' }}>
          <X size={22} />
        </button>

        <img
          src={image.url}
          alt={image.title}
          style={{
            maxWidth: '100%',
            maxHeight: '75vh',
            objectFit: 'contain',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
          }}
        />

        <div style={{ marginTop: '16px', textAlign: 'center' }}>
          <span className="badge-lime" style={{ marginBottom: '4px' }}>{image.category}</span>
          <h4 style={{ color: '#fff', fontSize: '1.2rem', marginTop: '4px' }}>{image.title}</h4>
        </div>
      </div>
    </div>
  );
}
