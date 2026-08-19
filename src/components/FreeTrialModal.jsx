import React, { useState } from 'react';
import { X, ArrowRight, Check, Zap, Sparkles, User, Mail, Phone, Calendar, Clock, ShieldCheck } from 'lucide-react';
import ClockTimePicker from './ClockTimePicker';
import CustomDatePicker from './CustomDatePicker';

export default function FreeTrialModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    primaryGoal: 'Fat Loss & Muscle Toning',
    experienceLevel: 'Intermediate',
    preferredDate: '',
    preferredTime: '09:00 AM'
  });
  const [passGenerated, setPassGenerated] = useState(false);

  if (!isOpen) return null;

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 4) setStep(step + 1);
    else setPassGenerated(true);
  };

  const handleReset = () => {
    setStep(1);
    setPassGenerated(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px' }}>
        <button onClick={onClose} className="modal-close" aria-label="Close modal">
          <X size={20} />
        </button>

        {!passGenerated ? (
          <div>
            {/* Modal Step Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <span className="badge-lime">STEP {step} OF 4</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>100% Free • No Credit Card Required</span>
            </div>

            {/* Step 1: Basic Information */}
            {step === 1 && (
              <form onSubmit={handleNext}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>CLAIM YOUR 3-DAY VIP PASS</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
                  Enter your details to generate your digital membership access QR pass.
                </p>

                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Alexander Vance"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="alex@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Mobile Phone (For SMS Pass) *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="(555) 000-0000"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px' }}>
                  CONTINUE TO GOALS <ArrowRight size={16} />
                </button>
              </form>
            )}

            {/* Step 2: Primary Fitness Goal */}
            {step === 2 && (
              <form onSubmit={handleNext}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>WHAT IS YOUR MAIN GOAL?</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
                  We will pair you with a specialized coach for your complimentary consultation.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  {[
                    "Fat Loss & Muscle Toning",
                    "Hypertrophy & Strength PRs",
                    "Athletic Conditioning & Endurance",
                    "Injury Rehab & Longevity"
                  ].map((goal) => (
                    <div
                      key={goal}
                      onClick={() => setFormData({ ...formData, primaryGoal: goal })}
                      style={{
                        padding: '14px 18px',
                        borderRadius: 'var(--radius-sm)',
                        background: formData.primaryGoal === goal ? 'var(--accent-lime-muted)' : 'var(--bg-card)',
                        border: formData.primaryGoal === goal ? '1.5px solid var(--accent-lime)' : '1px solid var(--border-color)',
                        color: formData.primaryGoal === goal ? 'var(--accent-lime)' : '#fff',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '0.92rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>{goal}</span>
                      {formData.primaryGoal === goal && <Check size={18} />}
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button type="button" onClick={() => setStep(1)} className="btn-secondary" style={{ flex: 1 }}>
                    BACK
                  </button>
                  <button type="submit" className="btn-primary" style={{ flex: 2 }}>
                    NEXT STEP <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Experience Level */}
            {step === 3 && (
              <form onSubmit={handleNext}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>FITNESS EXPERIENCE LEVEL</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
                  Zero intimidation guarantee. We adapt to your current starting point.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  {[
                    { level: "Complete Beginner", desc: "First time joining a gym or returning after a long break." },
                    { level: "Intermediate", desc: "Familiar with basic barbell & machine training." },
                    { level: "Advanced Athlete", desc: "Competitor or experienced lifter seeking elite facilities." }
                  ].map((item) => (
                    <div
                      key={item.level}
                      onClick={() => setFormData({ ...formData, experienceLevel: item.level })}
                      style={{
                        padding: '16px',
                        borderRadius: 'var(--radius-sm)',
                        background: formData.experienceLevel === item.level ? 'var(--accent-lime-muted)' : 'var(--bg-card)',
                        border: formData.experienceLevel === item.level ? '1.5px solid var(--accent-lime)' : '1px solid var(--border-color)',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ color: formData.experienceLevel === item.level ? 'var(--accent-lime)' : '#fff', fontWeight: 800, fontSize: '0.95rem', marginBottom: '4px' }}>
                        {item.level}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{item.desc}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button type="button" onClick={() => setStep(2)} className="btn-secondary" style={{ flex: 1 }}>
                    BACK
                  </button>
                  <button type="submit" className="btn-primary" style={{ flex: 2 }}>
                    FINAL STEP <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}

            {/* Step 4: Clock Time Picker & Custom Date Picker */}
            {step === 4 && (
              <form onSubmit={handleNext}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>PREFERRED VISIT DATE & TIME</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
                  Select your first visit date and time slot so our concierge desk has your pass ready.
                </p>

                <div className="form-group">
                  <label className="form-label">PREFERRED DATE *</label>
                  <CustomDatePicker
                    value={formData.preferredDate}
                    onChange={(date) => setFormData({ ...formData, preferredDate: date })}
                    label="Select First Visit Date"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">CLOCK TIME SLOT PICKER *</label>
                  <ClockTimePicker
                    value={formData.preferredTime}
                    onChange={(time) => setFormData({ ...formData, preferredTime: time })}
                    label="Select Visit Time"
                  />
                </div>

                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '14px', marginBottom: '24px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  <ShieldCheck size={16} color="var(--accent-lime)" style={{ display: 'inline', marginRight: '6px' }} />
                  Includes full access to equipment, sauna, and a free DEXA body composition scan.
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button type="button" onClick={() => setStep(3)} className="btn-secondary" style={{ flex: 1 }}>
                    BACK
                  </button>
                  <button type="submit" className="btn-primary" style={{ flex: 2 }}>
                    GENERATE VIP PASS <Zap size={16} fill="#0b0d0f" />
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Pass Generated Result Screen */
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'var(--accent-lime)',
              color: '#0b0d0f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              boxShadow: '0 0 30px var(--accent-lime)'
            }}>
              <Check size={36} strokeWidth={3} />
            </div>

            <span className="badge-lime" style={{ marginBottom: '12px' }}>PASS ACTIVATED</span>
            <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>YOU'RE ALL SET, {formData.name.toUpperCase()}!</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '24px' }}>
              Your 3-Day VIP All-Access Pass has been registered for <strong>{formData.preferredDate || 'Tomorrow'}</strong> at <strong>{formData.preferredTime}</strong>.
            </p>

            {/* QR Code Pass Card */}
            <div style={{
              background: 'linear-gradient(135deg, #181d22 0%, #0b0d0f 100%)',
              border: '2px solid var(--accent-lime)',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
              maxWidth: '360px',
              margin: '0 auto 24px',
              boxShadow: 'var(--shadow-glow)'
            }}>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--accent-lime)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '10px' }}>
                TITAN FORGE VIP ACCESS QR PASS
              </div>

              <div style={{ background: '#fff', padding: '14px', borderRadius: '8px', display: 'inline-block', marginBottom: '12px' }}>
                {/* SVG QR Code Simulation */}
                <svg width="140" height="140" viewBox="0 0 100 100" fill="#0b0d0f">
                  <rect x="10" y="10" width="25" height="25" fill="#0b0d0f"/>
                  <rect x="15" y="15" width="15" height="15" fill="#fff"/>
                  <rect x="18" y="18" width="9" height="9" fill="#0b0d0f"/>
                  
                  <rect x="65" y="10" width="25" height="25" fill="#0b0d0f"/>
                  <rect x="70" y="15" width="15" height="15" fill="#fff"/>
                  <rect x="73" y="18" width="9" height="9" fill="#0b0d0f"/>
                  
                  <rect x="10" y="65" width="25" height="25" fill="#0b0d0f"/>
                  <rect x="15" y="70" width="15" height="15" fill="#fff"/>
                  <rect x="18" y="73" width="9" height="9" fill="#0b0d0f"/>

                  <rect x="40" y="15" width="15" height="8" fill="#0b0d0f"/>
                  <rect x="45" y="30" width="20" height="8" fill="#0b0d0f"/>
                  <rect x="40" y="45" width="8" height="20" fill="#0b0d0f"/>
                  <rect x="55" y="55" width="25" height="10" fill="#0b0d0f"/>
                  <rect x="40" y="75" width="20" height="15" fill="#0b0d0f"/>
                  <rect x="70" y="75" width="15" height="15" fill="#0b0d0f"/>
                </svg>
              </div>

              <div style={{ fontSize: '0.8rem', color: '#fff', fontWeight: 700 }}>PASS ID: TF-VIP-{Math.floor(100000 + Math.random() * 900000)}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px' }}>Show this screen to concierge desk upon arrival</div>
            </div>

            <button onClick={handleReset} className="btn-primary" style={{ padding: '12px 32px' }}>
              DONE & CLOSE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
