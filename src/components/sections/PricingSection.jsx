import React, { useState } from 'react';
import { membershipPlans } from '../../data/gymData';
import { CheckCircle2 } from 'lucide-react';

export default function PricingSection({ onOpenTrial }) {
  const [billingPeriod, setBillingPeriod] = useState('annual');

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">TRANSPARENT PRICING</span>
          <h2 className="section-title">MEMBERSHIP TIERS</h2>
          <p className="section-desc">
            Choose the plan that fits your ambition. Zero hidden fees. Cancel or pause anytime with 30-day notice.
          </p>

          {/* Billing Switcher */}
          <div style={{
            display: 'inline-flex',
            background: 'var(--bg-card)',
            padding: '6px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-color)',
            marginTop: '24px'
          }}>
            <button
              onClick={() => setBillingPeriod('monthly')}
              style={{
                padding: '10px 24px',
                borderRadius: 'var(--radius-full)',
                background: billingPeriod === 'monthly' ? 'var(--accent-lime)' : 'transparent',
                color: billingPeriod === 'monthly' ? '#0b0d0f' : 'var(--text-secondary)',
                border: 'none',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              style={{
                padding: '10px 24px',
                borderRadius: 'var(--radius-full)',
                background: billingPeriod === 'annual' ? 'var(--accent-lime)' : 'transparent',
                color: billingPeriod === 'annual' ? '#0b0d0f' : 'var(--text-secondary)',
                border: 'none',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              ANNUAL <span style={{ background: '#ff5a1f', color: '#fff', fontSize: '0.68rem', padding: '2px 6px', borderRadius: '4px' }}>20% OFF</span>
            </button>
          </div>
        </div>

        <div className="grid-3" style={{ alignItems: 'stretch' }}>
          {membershipPlans.map((plan) => {
            const displayPrice = billingPeriod === 'annual' 
              ? Math.round(plan.annualPrice / 12) 
              : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className="glass-card"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  border: plan.popular ? '2px solid var(--accent-lime)' : '1px solid var(--border-color)',
                  background: plan.popular ? 'rgba(24, 29, 34, 0.95)' : 'var(--bg-card)',
                  boxShadow: plan.popular ? 'var(--shadow-glow)' : 'none',
                  position: 'relative'
                }}
              >
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'var(--accent-lime)',
                    color: '#0b0d0f',
                    fontSize: '0.72rem',
                    fontWeight: 900,
                    padding: '4px 10px',
                    borderRadius: '4px',
                    letterSpacing: '0.08em'
                  }}>
                    MOST POPULAR
                  </div>
                )}

                <h3 style={{ fontSize: '1.4rem', marginBottom: '6px' }}>{plan.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '24px', minHeight: '40px' }}>
                  {plan.tagline}
                </p>

                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '2.8rem', fontWeight: 900, color: plan.popular ? 'var(--accent-lime)' : '#fff', lineHeight: 1 }}>
                    ${displayPrice}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}> / month</span>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {billingPeriod === 'annual' ? `Billed annually ($${plan.annualPrice}/yr)` : plan.billingNote}
                  </div>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', flex: 1 }}>
                  {plan.features.map((feat, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                      <CheckCircle2 size={18} color="var(--accent-lime)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onOpenTrial}
                  className={plan.popular ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', padding: '14px' }}
                >
                  {plan.ctaText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
