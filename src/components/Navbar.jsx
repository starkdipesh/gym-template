import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, PhoneCall, ChevronDown, ChevronRight } from 'lucide-react';

export default function Navbar({ currentView, setCurrentView, onOpenTrial }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryNavLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'membership', label: 'Membership' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'contact', label: 'Contact' },
  ];

  const secondaryNavLinks = [
    { id: 'admin', label: '⚡ Gym Owner Portal' },
    { id: 'transformations', label: 'Transformations' },
    { id: 'trainers', label: 'Master Coaches' },
    { id: 'facilities', label: 'Facilities Tour' },
    { id: 'classes', label: 'Group Classes' },
    { id: 'gallery', label: 'Visual Gallery' },
    { id: 'blog', label: 'Fitness Resources' },
    { id: 'faq', label: 'FAQs' },
  ];

  const handleNavClick = (id) => {
    setCurrentView(id);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSecondaryActive = secondaryNavLinks.some(link => link.id === currentView);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1100,
      background: scrolled ? 'rgba(11, 13, 15, 0.95)' : 'rgba(11, 13, 15, 0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
      transition: 'all 0.3s ease',
      width: '100%'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
        width: '100%'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            userSelect: 'none',
            flexShrink: 0
          }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'var(--accent-lime)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0b0d0f',
            boxShadow: '0 0 15px rgba(198, 255, 0, 0.35)',
            flexShrink: 0
          }}>
            <Zap size={22} strokeWidth={3} />
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: '1.2rem',
              letterSpacing: '0.05em',
              color: '#ffffff',
              lineHeight: 1
            }}>
              TITAN<span style={{ color: 'var(--accent-lime)' }}>FORGE</span>
            </div>
            <div style={{
              fontSize: '0.58rem',
              letterSpacing: '0.18em',
              color: 'var(--text-secondary)',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginTop: '2px'
            }}>
              PERFORMANCE CLUB
            </div>
          </div>
        </div>

        {/* Desktop Primary Nav Links */}
        <nav className="desktop-only-nav" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {primaryNavLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isActive ? 'var(--accent-lime)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.84rem',
                  fontWeight: isActive ? 800 : 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  padding: '8px 0',
                  position: 'relative',
                  transition: 'var(--transition-fast)'
                }}
              >
                {link.label}
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2.5px',
                    background: 'var(--accent-lime)',
                    boxShadow: '0 0 10px var(--accent-lime)'
                  }} />
                )}
              </button>
            );
          })}

          {/* More Dropdown Menu */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: isSecondaryActive ? 'var(--accent-lime)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.84rem',
                fontWeight: isSecondaryActive ? 800 : 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                cursor: 'pointer',
                padding: '8px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span>EXPLORE</span>
              <ChevronDown size={14} style={{ transform: moreDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
            </button>

            {moreDropdownOpen && (
              <div 
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '12px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                  padding: '8px',
                  minWidth: '210px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  zIndex: 1200
                }}
              >
                {secondaryNavLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    style={{
                      background: currentView === link.id ? 'var(--accent-lime-muted)' : 'none',
                      border: 'none',
                      color: currentView === link.id ? 'var(--accent-lime)' : 'var(--text-primary)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.84rem',
                      fontWeight: currentView === link.id ? 800 : 600,
                      textAlign: 'left',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    <span>{link.label}</span>
                    {currentView === link.id && <Zap size={12} fill="var(--accent-lime)" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right Actions Area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <a
            href="tel:+18005558482"
            className="desktop-only-phone"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontWeight: 700
            }}
          >
            <PhoneCall size={15} color="var(--accent-lime)" />
            <span>1-800-555-TITAN</span>
          </a>

          <button onClick={onOpenTrial} className="btn-primary header-cta-btn" style={{ padding: '8px 18px', fontSize: '0.8rem', flexShrink: 0 }}>
            FREE VIP PASS
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-hamburger-btn"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: '#fff',
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-color)',
          padding: '20px 16px',
          maxHeight: '85vh',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          boxShadow: '0 25px 50px rgba(0,0,0,0.95)'
        }}>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent-lime)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
              MAIN NAVIGATION
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {primaryNavLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    background: currentView === link.id ? 'var(--accent-lime-muted)' : 'var(--bg-card)',
                    border: currentView === link.id ? '1px solid var(--accent-lime)' : '1px solid var(--border-color)',
                    color: currentView === link.id ? 'var(--accent-lime)' : 'var(--text-primary)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    textAlign: 'left',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent-lime)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
              EXPLORE MORE
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {secondaryNavLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    background: currentView === link.id ? 'var(--accent-lime-muted)' : 'var(--bg-card)',
                    border: currentView === link.id ? '1px solid var(--accent-lime)' : '1px solid var(--border-color)',
                    color: currentView === link.id ? 'var(--accent-lime)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textAlign: 'left',
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer'
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button onClick={() => { setMobileMenuOpen(false); onOpenTrial(); }} className="btn-primary" style={{ width: '100%', padding: '12px' }}>
              CLAIM 3-DAY VIP FREE PASS
            </button>
            <a
              href="tel:+18005558482"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 700,
                padding: '10px',
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              <PhoneCall size={15} color="var(--accent-lime)" />
              <span>CALL HOTLINE: 1-800-555-TITAN</span>
            </a>
          </div>
        </div>
      )}

      {/* Responsive Breakpoints Rules */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-only-nav, .desktop-only-phone { display: none !important; }
          .mobile-hamburger-btn { display: flex !important; }
        }
        @media (max-width: 640px) {
          .header-cta-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
