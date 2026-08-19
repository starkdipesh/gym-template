import React, { useState } from 'react';
import { faqs } from '../data/gymData';
import { Search, HelpCircle } from 'lucide-react';

export default function FaqView({ onOpenTrial }) {
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = faqs.filter(f =>
    f.q.toLowerCase().includes(search.toLowerCase()) ||
    f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="section-padding">
      <div className="container" style={{ maxWidth: '850px' }}>
        <div className="section-header text-center">
          <span className="section-subtitle">GOT QUESTIONS? WE HAVE ANSWERS</span>
          <h1 className="section-title">FREQUENTLY ASKED QUESTIONS</h1>
          <p className="section-desc">
            Search below for membership details, free trial pass instructions, cancellation policies, and gym amenities.
          </p>

          <div style={{ maxWidth: '450px', margin: '24px auto 0', position: 'relative' }}>
            <input
              type="text"
              className="form-input"
              placeholder="Search any question (e.g. trial, parking, showers)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ paddingLeft: '40px' }}
            />
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filteredFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{ borderRadius: 'var(--radius-sm)' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '1.05rem',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <span>{item.q}</span>
                  <span style={{ color: 'var(--accent-lime)', fontSize: '1.4rem' }}>{isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 24px 20px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
