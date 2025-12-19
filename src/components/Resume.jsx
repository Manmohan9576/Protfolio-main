import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
      <h2 className="section-title" style={{ justifyContent: 'center' }}>
        <span style={{ color: 'var(--primary-color)', marginRight: '10px', fontSize: '24px' }}>04.</span>
        Resume
      </h2>

      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '32px',
          marginBottom: '20px',
          color: 'var(--text-color)'
        }}>
          Want to see more?
        </h3>

        <p style={{
          color: 'var(--secondary-color)',
          fontSize: '18px',
          marginBottom: '50px',
          lineHeight: '1.6'
        }}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          Download my resume to see a detailed history of my experience and skills.
        </p>

        <a
          href="/src/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{
            padding: '20px 30px',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
