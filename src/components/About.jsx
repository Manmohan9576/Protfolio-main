import React from 'react';
import profileImg from '../assets/profile.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about" className="container">
      <h2 className="section-title">
        <span style={{ color: 'var(--primary-color)', marginRight: '10px', fontSize: '24px' }}>01.</span>
        About Me
      </h2>

      <div className="about-grid">
        <div className="about-content">
          <p>
            "Hi, I’m Manmohan. I am a passionate developer who loves turning ideas into reality. I specialize in building websites that look great and work smoothly. I am always learning new skills to create better digital experiences."
          </p>
          <p>
            "I build things for the web. With a focus on clean code and creativity, I bring projects to life. Let’s create something amazing together."
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>

          <ul className="skills-list">
            {['JavaScript (ES6+)', 'React', 'Node.js', 'TypeScript', 'Eleventy', 'WordPress', 'HTML5', 'CSS3', 'Linux', 'AWS'].map((tech) => (
              <li key={tech} className="skill-item">
                <span className="skill-arrow">▹</span>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-img">
          <div className="about-img-wrapper">
            <img
              src={profileImg}
              alt="Profile"
            />
            <div className="about-img-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
