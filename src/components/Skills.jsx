import React from 'react';

const Skills = () => {
  const skills = [
    { category: "Frontend", items: ["React", "Vue.js", "TypeScript", "HTML5", "CSS3/Sass", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "Jest", "CI/CD"] }
  ];

  return (
    <section id="skills" className="container">
      <h2 className="section-title">
        <span style={{ color: 'var(--primary-color)', marginRight: '10px', fontSize: '24px' }}>02.</span>
        Skills
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} style={{
            background: '#112240',
            padding: '2rem',
            borderRadius: '4px',
            transition: 'var(--transition)',
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <h3 style={{ color: 'var(--text-color)', marginBottom: '20px' }}>{skillGroup.category}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {skillGroup.items.map((item) => (
                <span key={item} style={{
                  background: 'rgba(100, 255, 218, 0.1)',
                  color: 'var(--primary-color)',
                  padding: '5px 10px',
                  borderRadius: '15px',
                  fontSize: '14px',
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
