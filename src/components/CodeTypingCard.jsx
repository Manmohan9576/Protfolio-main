import React, { useState, useEffect, useRef } from 'react';

const codeSnippet = [
  "import React from 'react';",
  "",
  "const Portfolio = () => {",
  "  const [dream, setDream] = useState('Big');",
  "",
  "  return (",
  "    <div className='future'>",
  "      <h1>Manmohan Singh</h1>",
  "      <p>Building the web, one pixel at a time.</p>",
  "    </div>",
  "  );",
  "};",
  "",
  "export default Portfolio;"
];

const CodeTypingCard = () => {
  const [text, setText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const currentLine = codeSnippet[lineIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentLine.length) {
          setText(prev => prev + currentLine[charIndex]);
          setCharIndex(prev => prev + 1);
        } else {
          // Finished line, move to next line after delay
          setTimeout(() => {
            if (lineIndex < codeSnippet.length - 1) {
              setText(prev => prev + '\n');
              setLineIndex(prev => prev + 1);
              setCharIndex(0);
            } else {
              // Finished all lines, wait and then delete
              setTimeout(() => setIsDeleting(true), 3000);
            }
          }, 50);
        }
      } else {
        // Deleting (resetting)
        setText('');
        setLineIndex(0);
        setCharIndex(0);
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 30 : 50);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, lineIndex]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: 'rgba(2, 12, 27, 0.9)',
        borderRadius: '12px',
        padding: '24px',
        fontFamily: '"Fira Code", monospace',
        fontSize: '13px',
        lineHeight: '1.5',
        color: '#e6f1ff',
        boxShadow: '0 20px 50px -10px rgba(2, 12, 27, 0.7)',
        border: '1px solid #233554',
        width: '100%',
        maxWidth: '450px',
        minHeight: '320px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.1s ease-out',
        cursor: 'default',
        margin: '0 auto',
      }}
    >
      {/* Window Controls */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', opacity: 0.8 }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
      </div>

      {/* Code Content */}
      <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
        <code style={{ display: 'block' }}>
          {text}
          <span style={{ borderRight: '2px solid #64ffda', animation: 'blink 1s step-end infinite' }}>&nbsp;</span>
        </code>
      </pre>

      <style>{`
        @keyframes blink {
          0%, 100% { border-color: transparent; }
          50% { border-color: #64ffda; }
        }
      `}</style>
    </div>
  );
};

export default CodeTypingCard;
