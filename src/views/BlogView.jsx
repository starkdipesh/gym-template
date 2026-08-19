import React, { useState } from 'react';
import { blogArticles } from '../data/gymData';
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';

export default function BlogView({ onOpenArticle }) {
  const [search, setSearch] = useState('');

  const filteredArticles = blogArticles.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase()) ||
    a.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">FITNESS & NUTRITION SCIENCE</span>
          <h1 className="section-title">TRAINING & RECOVERY RESOURCES</h1>
          <p className="section-desc">
            Evidence-based articles written by our certified master coaches to optimize your nutrition, lifting technique, and sleep.
          </p>

          <div style={{ maxWidth: '400px', margin: '24px auto 0', position: 'relative' }}>
            <input
              type="text"
              className="form-input"
              placeholder="Search fitness guides & articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ paddingLeft: '40px' }}
            />
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          </div>
        </div>

        <div className="grid-3" style={{ gap: '30px' }}>
          {filteredArticles.map((article) => (
            <div key={article.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span className="badge-lime" style={{ alignSelf: 'flex-start', marginBottom: '10px' }}>{article.category}</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', lineHeight: 1.3 }}>{article.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', marginBottom: '20px', flex: 1, lineHeight: 1.6 }}>
                  {article.summary}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{article.readTime}</span>
                  <button onClick={() => onOpenArticle(article)} className="btn-secondary" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>
                    READ ARTICLE <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
