import React, { useState } from 'react';
import { Calculator, Zap, Flame, ShieldAlert, ArrowRight } from 'lucide-react';

export default function BmiCalculator({ onSelectProgram }) {
  const [weight, setWeight] = useState(75); // kg
  const [height, setHeight] = useState(175); // cm
  const [age, setAge] = useState(28);
  const [gender, setGender] = useState('male');
  const [activity, setActivity] = useState(1.55); // Moderate exercise
  const [calculated, setCalculated] = useState(false);

  // BMI Calculation
  const heightM = height / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(1);

  let bmiCategory = 'Optimal Weight';
  let categoryColor = 'var(--accent-lime)';
  if (bmi < 18.5) {
    bmiCategory = 'Underweight (Needs Muscle Hypertrophy)';
    categoryColor = 'var(--accent-cyan)';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'Overweight (Target Fat Shred)';
    categoryColor = 'var(--accent-orange)';
  } else if (bmi >= 30) {
    bmiCategory = 'High Body Fat (Metabolic Shred Target)';
    categoryColor = '#ff3366';
  }

  // BMR & TDEE (Mifflin-St Jeor)
  const bmr = gender === 'male' 
    ? (10 * weight) + (6.25 * height) - (5 * age) + 5
    : (10 * weight) + (6.25 * height) - (5 * age) - 161;

  const tdee = Math.round(bmr * activity);
  const fatLossTarget = Math.round(tdee - 500);
  const muscleGainTarget = Math.round(tdee + 350);
  const dailyProtein = Math.round(weight * 2.0); // 2g per kg

  return (
    <div className="glass-card" style={{ padding: '36px', border: '1px solid var(--border-color-glow)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--accent-lime-muted)', color: 'var(--accent-lime)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Calculator size={24} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.4rem' }}>BIOMETRIC & CALORIE CALCULATOR</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Calculate your BMI, TDEE & daily macro requirements instantly</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '24px' }}>
        <div>
          <label className="form-label">Gender</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              onClick={() => setGender('male')}
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: 'var(--radius-sm)',
                background: gender === 'male' ? 'var(--accent-lime-muted)' : 'var(--bg-dark)',
                border: gender === 'male' ? '1.5px solid var(--accent-lime)' : '1px solid var(--border-color)',
                color: gender === 'male' ? 'var(--accent-lime)' : 'var(--text-secondary)',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              MALE
            </button>
            <button
              type="button"
              onClick={() => setGender('female')}
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: 'var(--radius-sm)',
                background: gender === 'female' ? 'var(--accent-lime-muted)' : 'var(--bg-dark)',
                border: gender === 'female' ? '1.5px solid var(--accent-lime)' : '1px solid var(--border-color)',
                color: gender === 'female' ? 'var(--accent-lime)' : 'var(--text-secondary)',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              FEMALE
            </button>
          </div>
        </div>

        <div>
          <label className="form-label">Weight: {weight} kg</label>
          <input
            type="range"
            min="40"
            max="150"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent-lime)' }}
          />
        </div>

        <div>
          <label className="form-label">Height: {height} cm</label>
          <input
            type="range"
            min="130"
            max="220"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent-lime)' }}
          />
        </div>

        <div>
          <label className="form-label">Age: {age} yrs</label>
          <input
            type="range"
            min="16"
            max="80"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent-lime)' }}
          />
        </div>
      </div>

      {/* Results Display Grid */}
      <div style={{
        background: 'var(--bg-secondary)',
        borderRadius: 'var(--radius-sm)',
        padding: '24px',
        border: '1px solid var(--border-color)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '20px',
        alignItems: 'center'
      }}>
        <div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 800 }}>BMI SCORE</span>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: categoryColor }}>{bmi}</div>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: categoryColor }}>{bmiCategory}</span>
        </div>

        <div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 800 }}>MAINTENANCE TDEE</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>{tdee} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>kcal/day</span></div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Daily burn to stay same weight</span>
        </div>

        <div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 800 }}>FAT LOSS TARGET</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-lime)' }}>{fatLossTarget} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>kcal</span></div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Deficit calorie goal</span>
        </div>

        <div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 800 }}>DAILY PROTEIN</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-orange)' }}>{dailyProtein}g</div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Target muscle synthesis</span>
        </div>
      </div>
    </div>
  );
}
