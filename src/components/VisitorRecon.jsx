import React, { useState, useEffect } from 'react';
import HeaderInspector from './HeaderInspector';

const VisitorRecon = () => {
  const [visitorData, setVisitorData] = useState({
    ip: 'SCANNING...',
    city: 'LOCATING...',
    country: '...',
    os: 'ANALYZING...',
    browser: 'IDENTIFYING...',
  });
  const [isExpanded, setIsExpanded] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate "hacking" delay
    const fetchData = async () => {
      try {
        // Fetch IP and Location data
        const response = await fetch('http://api.ipstack.com/check?access_key=621fd6602a322b61d90d414db52e184e');
        const data = await response.json();

        // Get System Info
        const userAgent = navigator.userAgent;
        let os = "Unknown OS";
        if (userAgent.indexOf("Win") !== -1) os = "Windows";
        if (userAgent.indexOf("Mac") !== -1) os = "MacOS";
        if (userAgent.indexOf("X11") !== -1) os = "UNIX";
        if (userAgent.indexOf("Linux") !== -1) os = "Linux";

        let browser = "Unknown Browser";
        if (userAgent.indexOf("Chrome") !== -1) browser = "Chrome";
        else if (userAgent.indexOf("Safari") !== -1) browser = "Safari";
        else if (userAgent.indexOf("Firefox") !== -1) browser = "Firefox";

        setTimeout(() => {
          setVisitorData({
            ip: data.ip || 'UNKNOWN',
            city: data.city || 'UNKNOWN',
            country: data.country_name || 'UNKNOWN',
            os: os,
            browser: browser
          });
          setLoading(false);
        }, 1500);

      } catch (error) {
        console.error("Recon failed:", error);
        setVisitorData(prev => ({
          ...prev,
          ip: 'HIDDEN',
          city: 'UNKNOWN',
          country: 'UNKNOWN',
          os: 'DETECTED',
          browser: 'DETECTED'
        }));
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!isExpanded) {
    return (
      <div
        onClick={() => setIsExpanded(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'rgba(10, 10, 10, 0.9)',
          border: '1px solid var(--primary-color)',
          padding: '10px',
          cursor: 'pointer',
          zIndex: 1000,
          color: 'var(--primary-color)',
          fontFamily: 'monospace',
          fontSize: '12px',
          boxShadow: '0 0 10px rgba(100, 255, 218, 0.2)'
        }}
      >
        [+] RECON
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '250px',
      background: 'rgba(10, 10, 10, 0.95)',
      border: '1px solid var(--primary-color)',
      padding: '15px',
      zIndex: 1000,
      fontFamily: 'monospace',
      color: 'var(--primary-color)',
      fontSize: '12px',
      boxShadow: '0 0 20px rgba(100, 255, 218, 0.1)',
      backdropFilter: 'blur(5px)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        borderBottom: '1px solid var(--secondary-color)',
        paddingBottom: '5px'
      }}>
        <span style={{ fontWeight: 'bold' }}>VISITOR_RECON_PANEL</span>
        <span
          onClick={() => setIsExpanded(false)}
          style={{ cursor: 'pointer', color: 'var(--secondary-color)' }}
        >
          [-]
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div>
          <span style={{ color: 'var(--secondary-color)' }}>TARGET_IP:</span><br />
          <span className={loading ? 'blink' : ''}>{visitorData.ip}</span>
        </div>
        <div>
          <span style={{ color: 'var(--secondary-color)' }}>LOCATION:</span><br />
          <span className={loading ? 'blink' : ''}>{visitorData.city}, {visitorData.country}</span>
        </div>
        <div>
          <span style={{ color: 'var(--secondary-color)' }}>SYSTEM:</span><br />
          <span className={loading ? 'blink' : ''}>{visitorData.os} / {visitorData.browser}</span>
        </div>
        <div>
          <span style={{ color: 'var(--secondary-color)' }}>STATUS:</span><br />
          <span style={{ color: '#0f0' }}>MONITORED</span>
        </div>

        <HeaderInspector />
      </div>

      <style>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        .blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default VisitorRecon;
