import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("Hi TITAN FORGE! I'd like to ask a question about gym membership and free trials.");

  const handleSend = () => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/18005558482?text=${encoded}`, '_blank');
    setOpen(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 990 }}>
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: '#25D366',
            color: '#fff',
            border: 'none',
            boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          }}
          title="Chat with Fitness Advisor on WhatsApp"
        >
          <MessageSquare size={26} fill="#fff" />
        </button>
      ) : (
        <div style={{
          width: '320px',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
          padding: '20px',
          position: 'relative'
        }}>
          <button
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#25D366' }} />
            <strong style={{ fontSize: '0.9rem', color: '#fff' }}>Titan Forge Advisor Online</strong>
          </div>

          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
            Have questions about membership, trainers, or hours? Chat directly with our front desk team.
          </p>

          <textarea
            className="form-textarea"
            rows="3"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            style={{ fontSize: '0.85rem', marginBottom: '12px' }}
          />

          <button
            onClick={handleSend}
            style={{
              width: '100%',
              background: '#25D366',
              color: '#fff',
              border: 'none',
              padding: '12px',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 800,
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}
          >
            START WHATSAPP CHAT <Send size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
