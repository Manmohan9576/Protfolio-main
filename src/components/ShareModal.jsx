import React from 'react';
import QRCode from 'react-qr-code';

const ShareModal = ({ onClose }) => {
  const url = window.location.href;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(10, 25, 47, 0.95)',
      zIndex: 2000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backdropFilter: 'blur(5px)'
    }} onClick={onClose}>
      <div style={{
        background: '#112240',
        padding: '40px',
        borderRadius: '8px',
        textAlign: 'center',
        border: '1px solid var(--primary-color)',
        boxShadow: '0 0 20px rgba(100, 255, 218, 0.2)',
        maxWidth: '90%',
        width: '350px'
      }} onClick={e => e.stopPropagation()}>

        <h3 style={{ color: 'var(--text-color)', marginBottom: '20px' }}>Scan to Open on Mobile</h3>

        <div style={{ background: 'white', padding: '16px', borderRadius: '4px', display: 'inline-block' }}>
          <QRCode value={url} size={200} />
        </div>

        <p style={{ color: 'var(--secondary-color)', marginTop: '20px', fontSize: '14px' }}>
          Make sure your phone is on the same WiFi network.
        </p>

        <p style={{
          color: 'var(--primary-color)',
          marginTop: '10px',
          fontSize: '12px',
          wordBreak: 'break-all',
          fontFamily: 'monospace'
        }}>
          {url}
        </p>

        <button onClick={onClose} className="btn" style={{ marginTop: '20px', width: '100%' }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ShareModal;
