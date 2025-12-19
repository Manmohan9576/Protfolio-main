import React, { useEffect, useRef, useState } from 'react';
import './components/BlobCursor.css';

const BlobCursor = ({
  blobType = 'circle',
  fillColor = '#5227FF',
  trailCount = 3,
  sizes = [60, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = 'rgba(255,255,255,0.8)',
  opacities = [0.6, 0.6, 0.6],
  shadowColor = 'rgba(0,0,0,0.75)',
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterStdDeviation = 30,
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  zIndex = 100,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const blobsRef = useRef([]);
  const rafId = useRef(null);
  const currentPositions = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Initialize positions
    currentPositions.current = Array(trailCount).fill({ x: 0, y: 0 });

    const loop = () => {
      currentPositions.current = currentPositions.current.map((pos, index) => {
        // Calculate lerp factor based on index to create trail effect
        // fastDuration for the first one, slowDuration for the last one
        const t = index / (trailCount - 1 || 1);
        const duration = fastDuration + (slowDuration - fastDuration) * t;
        // Convert duration to lerp factor (approximate)
        // A lower factor means slower movement (higher duration)
        const factor = 1 - Math.pow(0.1, 1 / (duration * 60)); // 60fps assumption

        const newX = pos.x + (mousePos.x - pos.x) * factor;
        const newY = pos.y + (mousePos.y - pos.y) * factor;

        return { x: newX, y: newY };
      });

      blobsRef.current.forEach((blob, index) => {
        if (blob) {
          const pos = currentPositions.current[index];
          blob.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
        }
      });

      rafId.current = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [mousePos, trailCount, fastDuration, slowDuration]);

  return (
    <div className="blob-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: zIndex }}>
      {useFilter && (
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="blob-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation={filterStdDeviation} result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </svg>
      )}
      <div className="blob-main" style={{ filter: useFilter ? 'url(#blob-filter)' : 'none' }}>
        {Array.from({ length: trailCount }).map((_, index) => (
          <div
            key={index}
            ref={(el) => (blobsRef.current[index] = el)}
            className="blob"
            style={{
              width: sizes[index] || sizes[0],
              height: sizes[index] || sizes[0],
              backgroundColor: fillColor,
              opacity: opacities[index] || opacities[0],
              borderRadius: blobType === 'circle' ? '50%' : '0%',
              boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px ${shadowColor}`,
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          >
            {innerSizes[index] > 0 && (
              <div
                className="inner-dot"
                style={{
                  width: innerSizes[index],
                  height: innerSizes[index],
                  backgroundColor: innerColor,
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlobCursor;
