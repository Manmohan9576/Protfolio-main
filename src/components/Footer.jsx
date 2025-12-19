import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '20px',
      color: 'var(--secondary-color)',
      fontSize: '14px',
      marginBottom: '20px',
    }}>
      <p style={{ marginBottom: '10px' }}>
        Designed & Built by Manmohan Singh
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a href="#" style={{ color: 'var(--secondary-color)' }}>GitHub</a>
        <a href="#" style={{ color: 'var(--secondary-color)' }}>LinkedIn</a>
        <a href="#" style={{ color: 'var(--secondary-color)' }}>Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
