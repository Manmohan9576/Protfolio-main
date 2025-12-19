import React, { useState, useEffect } from 'react';
import CodeTypingCard from './CodeTypingCard';

const Hero = () => {
  const [text, setText] = useState(' ');
  const fullText = "Manmohan Singh ";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(timer);
      }
    }, 100); // Typing speed

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: '0',
      flexWrap: 'wrap',
      gap: '40px',
    }}>
      <div style={{ flex: '1 1 500px' }}>
        <h4 style={{
          color: 'var(--primary-color)',
          fontSize: '16px',
          fontWeight: 'normal',
          marginBottom: '20px',
          marginTop: '90px',
          marginLeft: '2px',
        }}>Hi, my name is</h4>

        <h1 style={{
          fontSize: 'clamp(40px, 8vw, 80px)',
          fontWeight: 'bold',
          margin: 0,
          background: 'linear-gradient(120deg, #64ffb9ff 0%, #98ff64ff 50%, #4facfe 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block'
        }}>
          {text}
          <span style={{ color: 'var(--primary-color)' }}>|</span>
        </h1>

        <h2 style={{
          fontSize: 'clamp(40px, 8vw, 80px)',
          color: 'var(--secondary-color)',
          fontWeight: 'bold',
          marginTop: '10px',
          marginBottom: '20px',
        }}>
          I build things for the web.
        </h2>

        <p style={{
          maxWidth: '540px',
          fontSize: '18px',
          color: 'var(--secondary-color)',
          marginBottom: '50px',
        }}>
         Hello, I’m Manmohan — a self-driven Web Developer who enjoys building creative and functional digital products.
I specialize in frontend development using HTML, CSS, JavaScript, and React. I also explore backend fundamentals and enjoy learning new tools every day.

I love solving problems, building projects from scratch, and continuously improving my skills. My goal is to become a full-stack developer and contribute to impactful tech projects.
        </p>

        <a href="#projects" className="btn" style={{ padding: '20px 28px', fontSize: '18px' }}>
          Check out my work!
        </a>
      </div>

      <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
        <CodeTypingCard />
      </div>
    </section>
  );
};

export default Hero;
