import React, { useState } from 'react';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import FacilityShowcaseSection from '../components/sections/FacilityShowcaseSection';
import FeaturedProgramsSection from '../components/sections/FeaturedProgramsSection';
import PricingSection from '../components/sections/PricingSection';
import BmiCalculator from '../components/BmiCalculator';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { transformations, trainers, faqs } from '../data/gymData';
import { Star, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HomeView({ 
  setCurrentView, 
  onOpenTrial, 
  onOpenTrainer 
}) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <div>
      {/* 1. Hero */}
      <HeroSection onOpenTrial={onOpenTrial} setCurrentView={setCurrentView} />

      {/* 2. Live Stats */}
      <StatsSection />

      {/* 3. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 4. Facility Showcase */}
      <FacilityShowcaseSection setCurrentView={setCurrentView} />

      {/* 5. Featured Programs */}
      <FeaturedProgramsSection setCurrentView={setCurrentView} onOpenTrial={onOpenTrial} />

      {/* 6. Biometric Calorie & Macro Calculator */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderY: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">INTERACTIVE FITNESS TOOL</span>
            <h2 className="section-title">CALCULATE YOUR DAILY METRIC TARGETS</h2>
            <p className="section-desc">
              Adjust sliders below to calculate your BMI, daily calorie maintenance, fat loss targets, and protein requirements.
            </p>
          </div>
          <BmiCalculator onSelectProgram={onOpenTrial} />
        </div>
      </section>

      {/* 7. Membership Pricing */}
      <PricingSection onOpenTrial={onOpenTrial} />

      {/* 8. Member Transformations */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">PROVEN RESULTS</span>
            <h2 className="section-title">MEMBER TRANSFORMATION TRIUMPHS</h2>
            <p className="section-desc">
              Drag the interactive slider line on images below to reveal the actual 12-week body transformation results of our members.
            </p>
          </div>

          <div className="grid-3">
            {transformations.map((t) => (
              <div key={t.id} className="glass-card" style={{ padding: '20px' }}>
                <BeforeAfterSlider
                  beforeImage={t.beforeImage}
                  afterImage={t.afterImage}
                  name={t.name}
                  timeline={t.timeline}
                  metrics={t.metrics}
                />

                <div style={{ marginTop: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '1.2rem' }}>{t.name}, {t.age}</h3>
                    <span className="badge-lime">{t.program}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.5, marginBottom: '16px' }}>
                    "{t.quote}"
                  </p>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Coach Credit: <strong style={{ color: '#fff' }}>{t.trainer}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button onClick={() => setCurrentView('transformations')} className="btn-outline-lime">
              VIEW MORE TRANSFORMATION STORIES <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 9. Master Coaches Teaser */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">WORLD-CLASS COACHING STAFF</span>
            <h2 className="section-title">MEET OUR MASTER TRAINERS</h2>
            <p className="section-desc">
              Certified exercise physiologists, strength coaches, and nutritionists dedicated to guiding your form and mindset.
            </p>
          </div>

          <div className="grid-4">
            {trainers.map((tr) => (
              <div key={tr.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
                  <img src={tr.image} alt={tr.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    background: 'rgba(11, 13, 15, 0.85)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    color: 'var(--accent-lime)',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Star size={12} fill="var(--accent-lime)" /> {tr.rating} ({tr.clientsTrained})
                  </div>
                </div>

                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{tr.name}</h3>
                  <p style={{ color: 'var(--accent-orange)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '12px' }}>{tr.role}</p>

                  <button
                    onClick={() => onOpenTrainer(tr)}
                    className="btn-secondary"
                    style={{ marginTop: 'auto', width: '100%', padding: '8px', fontSize: '0.8rem' }}
                  >
                    VIEW BIO & BOOK 1-ON-1
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header text-center">
            <span className="section-subtitle">CLEAR ANSWERS</span>
            <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: 'none',
                      border: 'none',
                      color: '#fff',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: '1rem',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ color: 'var(--accent-lime)', fontSize: '1.4rem' }}>{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 24px 20px', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
