import React, { useState, useEffect, useRef } from 'react';

const FPSCounter = () => {
  const [fps, setFps] = useState(0);
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());

  useEffect(() => {
    let animationFrameId;

    const loop = () => {
      const now = performance.now();
      frameCount.current++;

      if (now - lastTime.current >= 1000) {
        setFps(Math.round((frameCount.current * 1000) / (now - lastTime.current)));
        frameCount.current = 0;
        lastTime.current = now;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      left: '10px',
      zIndex: 9999,
      background: 'rgba(0, 0, 0, 0.7)',
      color: '#00ff00',
      padding: '5px 10px',
      borderRadius: '5px',
      fontFamily: 'monospace',
      fontSize: '14px',
      fontWeight: 'bold',
      pointerEvents: 'none',
      border: '1px solid #00ff00',
      boxShadow: '0 0 10px rgba(0, 255, 0, 0.2)'
    }}>
      FPS: {fps}
    </div>
  );
};

export default FPSCounter;
