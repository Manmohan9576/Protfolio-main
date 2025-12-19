import React, { useState, useEffect } from 'react';

const StatCard = ({ label, value, suffix = '', color = 'var(--primary-color)' }) => (
  <div style={{
    background: 'rgba(17, 34, 64, 0.7)',
    border: `1px solid ${color}`,
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(5px)',
    boxShadow: `0 0 15px ${color}20`,
    transition: 'transform 0.3s ease',
    cursor: 'default',
    minWidth: '150px'
  }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <h3 style={{
      fontSize: '36px',
      color: color,
      margin: '0 0 10px 0',
      fontFamily: 'monospace',
      fontWeight: 'bold'
    }}>
      {value}{suffix}
    </h3>
    <p style={{
      color: 'var(--secondary-color)',
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      margin: 0
    }}>
      {label}
    </p>
  </div>
);

const StatsDashboard = () => {
  const [stats, setStats] = useState({
    linesOfCode: 124500,
    coffees: 452,
    commits: 1240,
    hours: 3500,
    bugs: 42
  });

  useEffect(() => {
    // Simulate live updates
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        linesOfCode: prev.linesOfCode + Math.floor(Math.random() * 2), // Randomly add lines
        hours: prev.hours + 0.01 // Slowly add hours
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="stats" className="container" style={{ marginTop: '100px', marginBottom: '100px' }}>
      <h2 className="section-title">
        <span style={{ color: 'var(--primary-color)', marginRight: '10px', fontSize: '24px' }}>02.5.</span>
        Live Stats
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px'
      }}>
        <StatCard
          label="Lines of Code"
          value={stats.linesOfCode.toLocaleString()}
          color="#64ffda"
        />
        <StatCard
          label="Coffees Consumed"
          value={stats.coffees}
          color="#ff9f43" // Orange
        />
        <StatCard
          label="Commits (2024)"
          value={stats.commits}
          color="#a29bfe" // Purple
        />
        <StatCard
          label="Hours Coding"
          value={Math.floor(stats.hours).toLocaleString()}
          suffix="+"
          color="#ff6b6b" // Red
        />
      </div>
    </section>
  );
};

export default StatsDashboard;
