import React, { useState, useEffect } from 'react';

const CinematicIntro = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0); // 0: typing, 1: loading, 2: access granted

  const fullText = "INITIALIZING SYSTEM...";

  useEffect(() => {
    // Stage 0: Typing Text
    if (stage === 0) {
      let index = 0;
      const timer = setInterval(() => {
        setText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) {
          clearInterval(timer);
          setTimeout(() => setStage(1), 500);
        }
      }, 50);
      return () => clearInterval(timer);
    }

    // Stage 1: Progress Bar
    if (stage === 1) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => setStage(2), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 20);
      return () => clearInterval(timer);
    }

    // Stage 2: Access Granted & Exit
    if (stage === 2) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [stage, onComplete]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#020c1b',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: '"Fira Code", monospace',
      color: '#64ffda'
    }}>
      <div style={{
        fontSize: '24px',
        marginBottom: '20px',
        height: '30px',
        textShadow: '0 0 10px rgba(100, 255, 218, 0.5)'
      }}>
        {stage === 2 ? "ACCESS GRANTED" : text}
        {stage < 2 && <span style={{ animation: 'blink 1s infinite' }}>_</span>}
      </div>

      {stage === 1 && (
        <div style={{
          width: '300px',
          height: '4px',
          background: '#112240',
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: '#64ffda',
            boxShadow: '0 0 10px #64ffda',
            transition: 'width 0.1s linear'
          }}></div>
        </div>
      )}

      {stage === 1 && (
        <div style={{
          marginTop: '10px',
          fontSize: '12px',
          color: '#8892b0'
        }}>
          LOADING MODULES: {progress}%
        </div>
      )}

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default CinematicIntro;
