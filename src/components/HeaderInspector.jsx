import React, { useState } from 'react';

const HeaderInspector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headers, setHeaders] = useState(null);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);

  const scanConnection = async () => {
    setLoading(true);
    setIsOpen(true);
    try {
      const response = await fetch('https://httpbin.org/headers');
      const data = await response.json();
      setHeaders(data.headers);
      calculateScore(data.headers);
    } catch (error) {
      console.error("Scan failed:", error);
      setHeaders({ Error: "Failed to fetch headers" });
    }
    setLoading(false);
  };

  const calculateScore = (headers) => {
    let currentScore = 100;
    const deductions = [];

    // Heuristics
    if (headers['User-Agent'] && headers['User-Agent'].length > 100) {
      currentScore -= 20; // Too much info
      deductions.push("User-Agent too verbose (-20)");
    }
    if (!headers['Dnt'] && !headers['Sec-Gpc']) {
      currentScore -= 10; // No Do Not Track
      deductions.push("No DNT/GPC signal (-10)");
    }
    if (headers['Referer']) {
      currentScore -= 10; // Leaking referer
      deductions.push("Referer header present (-10)");
    }

    setScore(Math.max(0, currentScore));
  };

  return (
    <>
      <button
        onClick={scanConnection}
        style={{
          background: 'transparent',
          border: '1px solid var(--primary-color)',
          color: 'var(--primary-color)',
          padding: '5px 10px',
          fontSize: '10px',
          fontFamily: 'monospace',
          cursor: 'pointer',
          marginTop: '10px',
          width: '100%'
        }}
      >
        [SCAN_CONNECTION]
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.8)',
          zIndex: 2000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backdropFilter: 'blur(5px)'
        }} onClick={() => setIsOpen(false)}>
          <div style={{
            background: '#0a192f',
            border: '1px solid var(--primary-color)',
            padding: '20px',
            borderRadius: '5px',
            maxWidth: '600px',
            width: '90%',
            fontFamily: 'monospace',
            color: 'var(--text-color)',
            boxShadow: '0 0 20px rgba(100, 255, 218, 0.2)'
          }} onClick={e => e.stopPropagation()}>
            <h3 style={{ color: 'var(--primary-color)', borderBottom: '1px solid var(--secondary-color)', paddingBottom: '10px' }}>
              FORENSIC_REPORT
            </h3>

            {loading ? (
              <div style={{ padding: '20px', textAlign: 'center', color: 'var(--primary-color)' }}>
                ANALYZING PACKETS...
              </div>
            ) : (
              <>
                <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>PRIVACY_SCORE:</span>
                  <span style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: score > 80 ? '#64ffda' : score > 50 ? '#ff9f43' : '#ff6b6b'
                  }}>
                    {score}/100
                  </span>
                </div>

                <div style={{
                  background: '#020c1b',
                  padding: '10px',
                  borderRadius: '4px',
                  maxHeight: '300px',
                  overflowY: 'auto',
                  fontSize: '12px'
                }}>
                  {headers && Object.entries(headers).map(([key, value]) => (
                    <div key={key} style={{ marginBottom: '5px' }}>
                      <span style={{ color: 'var(--secondary-color)' }}>{key}:</span> <span style={{ color: '#8892b0', wordBreak: 'break-all' }}>{value}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    marginTop: '20px',
                    background: 'var(--primary-color)',
                    color: '#0a192f',
                    border: 'none',
                    padding: '8px 16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    width: '100%'
                  }}
                >
                  CLOSE_REPORT
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderInspector;
