import React from 'react';

const ArchitectureDiagram = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    margin: '30px 0',
    flexWrap: 'wrap'
  }}>
    {/* Client */}
    <div className="arch-box">
      <h4>Client</h4>
      <p>React / Vue</p>
    </div>

    <div className="arrow">→</div>

    {/* Server */}
    <div className="arch-box">
      <h4>API Server</h4>
      <p>Node / Express</p>
    </div>

    <div className="arrow">→</div>

    {/* Database */}
    <div className="arch-box">
      <h4>Database</h4>
      <p>PostgreSQL</p>
    </div>

    <style>{`
      .arch-box {
        background: rgba(100, 255, 218, 0.1);
        border: 1px solid var(--primary-color);
        padding: 15px;
        border-radius: 4px;
        text-align: center;
        min-width: 120px;
        color: var(--text-color);
        box-shadow: 0 0 10px rgba(100, 255, 218, 0.2);
      }
      .arch-box h4 {
        color: var(--primary-color);
        margin-bottom: 5px;
        font-size: 14px;
        text-shadow: 0 0 5px var(--primary-color);
      }
      .arch-box p {
        font-size: 12px;
        color: #a8b2d1;
        margin: 0;
      }
      .arrow {
        color: var(--primary-color);
        font-size: 24px;
        font-weight: bold;
        text-shadow: 0 0 5px var(--primary-color);
      }
    `}</style>
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(10, 25, 47, 0.8)',
      zIndex: 2000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      backdropFilter: 'blur(5px)'
    }} onClick={onClose}>
      <div style={{
        background: 'rgba(17, 34, 64, 0.9)',
        width: '100%',
        maxWidth: '800px',
        maxHeight: '90vh',
        overflowY: 'auto',
        borderRadius: '8px',
        padding: '40px',
        position: 'relative',
        boxShadow: '0 0 30px rgba(100, 255, 218, 0.3), inset 0 0 20px rgba(100, 255, 218, 0.1)',
        border: '1px solid var(--primary-color)',
        animation: 'hologram-open 0.3s ease-out forwards'
      }} onClick={e => e.stopPropagation()}>

        {/* Scanline Effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, transparent 50%, rgba(100, 255, 218, 0.05) 50%)',
          backgroundSize: '100% 4px',
          pointerEvents: 'none',
          zIndex: 10
        }}></div>

        <button onClick={onClose} style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'transparent',
          border: '1px solid var(--primary-color)',
          color: 'var(--primary-color)',
          fontSize: '20px',
          cursor: 'pointer',
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          boxShadow: '0 0 10px rgba(100, 255, 218, 0.3)',
          zIndex: 20
        }}>×</button>

        <h2 style={{
          color: 'var(--primary-color)',
          marginBottom: '10px',
          textShadow: '0 0 10px rgba(100, 255, 218, 0.5)',
          fontFamily: '"Fira Code", monospace'
        }}>
          {project.title}
        </h2>
        <p style={{ color: '#8892b0', marginBottom: '30px', borderBottom: '1px solid rgba(100, 255, 218, 0.3)', paddingBottom: '10px' }}>
          // Case Study & Architecture
        </p>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#ccd6f6', marginBottom: '10px' }}>The Challenge</h3>
          <p style={{ color: '#8892b0' }}>
            Users needed a way to visualize complex data sets efficiently. The existing solution was slow and lacked interactivity.
            The goal was to build a performant, responsive dashboard that could handle real-time updates without lag.
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#ccd6f6', marginBottom: '10px' }}>System Architecture</h3>
          <ArchitectureDiagram />
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#ccd6f6', marginBottom: '10px' }}>The Solution</h3>
          <p style={{ color: '#8892b0' }}>
            {project.description}
            <br /><br />
            We implemented a microservices architecture to decouple the data processing from the UI.
            Using <strong>{project.tech.join(', ')}</strong>, we achieved a 40% reduction in load times.
          </p>
        </div>

        <div>
          <h3 style={{ color: '#ccd6f6', marginBottom: '15px' }}>Technologies</h3>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {project.tech.map(t => (
              <li key={t} style={{
                color: 'var(--primary-color)',
                border: '1px solid var(--primary-color)',
                padding: '5px 15px',
                borderRadius: '15px',
                fontSize: '13px',
                background: 'rgba(100, 255, 218, 0.1)'
              }}>{t}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
          <a href={project.links.github} className="btn" style={{ boxShadow: '0 0 15px rgba(100, 255, 218, 0.3)' }}>View Source</a>
          <a href={project.links.external} className="btn" style={{ boxShadow: '0 0 15px rgba(100, 255, 218, 0.3)' }}>Live Demo</a>
        </div>

        <style>{`
          @keyframes hologram-open {
            0% { transform: scale(0.9); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>

      </div>
    </div>
  );
};

export default ProjectModal;
