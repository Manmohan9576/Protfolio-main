import React, { useState, useEffect } from 'react';
import ShareModal from './ShareModal';

const Header = ({ isCyberMode, toggleCyberMode, showFPS, toggleFPS }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      background: isScrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      boxShadow: isScrolled ? '0 10px 30px -10px rgba(2, 12, 27, 0.7)' : 'none',
      transition: 'var(--transition)',
      padding: '0 20px',
      height: '80px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div className="logo" style={{
        fontSize: '34px',
        fontWeight: 'bold',
        color: 'var(--primary-color)',
      }}>
        <a href="#">Portfolio</a>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`} style={{
        display: 'flex',
        gap: '30px',
        alignItems: 'center',
      }}>
        <a href="#about" onClick={() => setIsMenuOpen(false)}><span style={{ color: 'var(--primary-color)' }}></span> About</a>
        <a href="#skills" onClick={() => setIsMenuOpen(false)}><span style={{ color: 'var(--primary-color)' }}></span> Skills</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}><span style={{ color: 'var(--primary-color)' }}></span> Work</a>
        <a href="#resume" onClick={() => setIsMenuOpen(false)}><span style={{ color: 'var(--primary-color)' }}></span> Resume</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}><span style={{ color: 'var(--primary-color)' }}></span> Contact</a>

        <button
          onClick={toggleCyberMode}
          className="btn"
          style={{ padding: '8px 16px', fontSize: '13px' }}
        >
          {isCyberMode ? 'Disable Matrix' : 'Enable Matrix'}
        </button>

        <button
          onClick={toggleFPS}
          className="btn"
          style={{ padding: '8px 16px', fontSize: '13px', marginLeft: '10px' }}
        >
          {showFPS ? 'Hide FPS' : 'Show FPS'}
        </button>

        <button
          onClick={() => setIsShareOpen(true)}
          className="btn"
          style={{ padding: '8px 16px', fontSize: '13px', marginLeft: '10px' }}
        >
          Share to Mobile
        </button>
      </div>

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{
        display: 'none',
        cursor: 'pointer',
      }}>
        <div style={{ width: '30px', height: '2px', background: 'var(--primary-color)', marginBottom: '5px' }}></div>
        <div style={{ width: '30px', height: '2px', background: 'var(--primary-color)', marginBottom: '5px' }}></div>
        <div style={{ width: '30px', height: '2px', background: 'var(--primary-color)' }}></div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 70%;
            background: #112240;
            flex-direction: column;
            justify-content: center;
            transform: translateX(100%);
            transition: var(--transition);
            box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
          }
          .nav-links.active {
            transform: translateX(0);
          }
          .hamburger {
            display: block !important;
            z-index: 101;
          }
        }
      `}</style>

      {isShareOpen && <ShareModal onClose={() => setIsShareOpen(false)} />}
    </header>
  );
};

export default Header;
