import React from 'react';

const LoadingSpinner = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '50px',
      width: '100%',
      flexDirection: 'column',
      gap: '15px'
    }}>
      <div className="cyber-spinner">
        <div className="inner"></div>
      </div>
      <div style={{
        color: 'var(--primary-color)',
        fontFamily: 'monospace',
        fontSize: '12px',
        letterSpacing: '2px',
        animation: 'blink 1s infinite'
      }}>LOADING_ASSETS...</div>

      <style>{`
        .cyber-spinner {
          position: relative;
          width: 60px;
          height: 60px;
          border: 2px solid rgba(100, 255, 218, 0.1);
          border-radius: 50%;
          border-top-color: var(--primary-color);
          border-bottom-color: var(--primary-color);
          animation: spin 1.5s linear infinite;
          box-shadow: 0 0 10px rgba(100, 255, 218, 0.2);
        }
        .cyber-spinner::before {
          content: '';
          position: absolute;
          top: 5px;
          left: 5px;
          right: 5px;
          bottom: 5px;
          border: 2px solid transparent;
          border-radius: 50%;
          border-left-color: var(--secondary-color);
          border-right-color: var(--secondary-color);
          animation: spin 1s linear infinite reverse;
        }
        .inner {
          position: absolute;
          top: 15px;
          left: 15px;
          right: 15px;
          bottom: 15px;
          border: 2px solid transparent;
          border-radius: 50%;
          border-top-color: #fff;
          animation: spin 0.5s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
