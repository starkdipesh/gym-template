import React from 'react';
import { X, Calendar, Clock, User, Share2 } from 'lucide-react';

export default function ArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '750px' }}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <span className="badge-lime" style={{ marginBottom: '12px' }}>{article.category}</span>
        <h2 style={{ fontSize: '1.8rem', lineHeight: 1.2, marginBottom: '16px' }}>{article.title}</h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <User size={14} /> <span>By {article.author}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Calendar size={14} /> <span>{article.date}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={14} /> <span>{article.readTime}</span>
          </div>
        </div>

        <img
          src={article.image}
          alt={article.title}
          style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '24px' }}
        />

        <div style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '32px' }}>
          <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>
            {article.summary}
          </p>
          <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }} />
        </div>

        <button onClick={onClose} className="btn-secondary" style={{ width: '100%' }}>
          CLOSE ARTICLE
        </button>
      </div>
    </div>
  );
}
