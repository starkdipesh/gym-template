import React, { useState } from 'react';
import { Check, X, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { membershipPlans, faqs } from '../data/gymData';

export default function MembershipView({ onOpenTrial }) {
  const [billingPeriod, setBillingPeriod] = useState('annual');

  const comparisonRows = [
    { feature: "Full Gym Floor & Equipment Access", basic: true, plus: true, elite: true },
    { feature: "Executive Locker Rooms & Rain Showers", basic: true, plus: true, elite: true },
    { feature: "DEXA InBody Composition Body Scan", basic: "1 initial", plus: "Monthly", elite: "Bi-Weekly" },
    { feature: "Unlimited Group Fitness Classes", basic: false, plus: true, elite: true },
    { feature: "Infrared Sauna & Cold Plunge Suite", basic: false, plus: true, elite: true },
    { feature: "Monthly 1-on-1 Personal Trainer Session", basic: false, plus: "1 / month", elite: "4 / month" },
    { feature: "VIP Guest Passes", basic: false, plus: "2 / month", elite: "Unlimited" },
    { feature: "Dedicated Reserved Locker & Laundry Service", basic: false, plus: false, elite: true },
    { feature: "24/7 Coach Direct WhatsApp Line", basic: false, plus: false, elite: true }
  ];

  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">INVEST IN YOUR HEALTH</span>
          <h1 className="section-title">MEMBERSHIP TIERS & COMPARISON</h1>
          <p className="section-desc">
            No long-term lock-in traps. All plans come with our 100% Satisfaction Guarantee and 3-Day Free VIP Pass.
          </p>

          {/* Toggle */}
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
              MONTHLY BILLING
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
                cursor: 'pointer'
              }}
            >
              ANNUAL (SAVE 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid-3" style={{ marginBottom: '80px', alignItems: 'stretch' }}>
          {membershipPlans.map((plan) => {
            const price = billingPeriod === 'annual' ? Math.round(plan.annualPrice / 12) : plan.monthlyPrice;
            return (
              <div key={plan.id} className="glass-card" style={{
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                border: plan.popular ? '2px solid var(--accent-lime)' : '1px solid var(--border-color)'
              }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '6px' }}>{plan.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '24px', minHeight: '40px' }}>{plan.tagline}</p>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '3.2rem', fontWeight: 900, color: plan.popular ? 'var(--accent-lime)' : '#fff' }}>${price}</span>
                  <span style={{ color: 'var(--text-muted)' }}> / mo</span>
                </div>
                <button onClick={onOpenTrial} className={plan.popular ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%', marginBottom: '24px' }}>
                  {plan.ctaText}
                </button>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
                  {plan.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', gap: '10px' }}>
                      <Check size={18} color="var(--accent-lime)" style={{ flexShrink: 0 }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '36px', overflowX: 'auto' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', textAlign: 'center' }}>DETAILED FEATURE MATRIX</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ padding: '16px', color: 'var(--text-muted)' }}>FEATURE</th>
                <th style={{ padding: '16px', color: '#fff', textAlign: 'center' }}>CORE ACCESS</th>
                <th style={{ padding: '16px', color: 'var(--accent-lime)', textAlign: 'center' }}>TITAN PLUS</th>
                <th style={{ padding: '16px', color: 'var(--accent-orange)', textAlign: 'center' }}>ELITE VIP</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '16px', fontWeight: 600, color: '#fff' }}>{row.feature}</td>
                  <td style={{ padding: '16px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    {typeof row.basic === 'boolean' ? (row.basic ? <Check size={18} color="var(--accent-lime)" /> : <X size={18} color="var(--text-muted)" />) : row.basic}
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center', color: 'var(--accent-lime)' }}>
                    {typeof row.plus === 'boolean' ? (row.plus ? <Check size={18} color="var(--accent-lime)" /> : <X size={18} color="var(--text-muted)" />) : row.plus}
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center', color: 'var(--accent-orange)' }}>
                    {typeof row.elite === 'boolean' ? (row.elite ? <Check size={18} color="var(--accent-lime)" /> : <X size={18} color="var(--text-muted)" />) : row.elite}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
