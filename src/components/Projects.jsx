import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Project One",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information of each track.",
      tech: ["React", "Express", "Spotify API", "Styled Components"],
      links: { github: "#", external: "#" }
    },
    {
      title: "Project Two",
      description: "A nice, minimal, and accessible portfolio template for developers. Built with React and Vanilla CSS, designed to be easily customizable.",
      tech: ["React", "Vanilla CSS", "Vite"],
      links: { github: "#", external: "#" }
    },
    {
      title: "Project Three",
      description: "A comprehensive dashboard for managing cloud resources. Features include real-time monitoring, cost analysis, and automated alerts.",
      tech: ["Vue.js", "D3.js", "Firebase", "Sass"],
      links: { github: "#", external: "#" }
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title">
        <span style={{ color: 'var(--primary-color)', marginRight: '10px', fontSize: '24px' }}>03.</span>
        Some Things I've Built
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '30px'
          }} className="project-card">
            <div style={{
              gridColumn: index % 2 === 0 ? '1 / 8' : '6 / -1',
              gridRow: '1 / -1',
              position: 'relative',
              zIndex: 1,
              cursor: 'pointer'
            }} onClick={() => setSelectedProject(project)}>
              {/* Project Image Placeholder */}
              <div style={{
                width: '100%',
                paddingBottom: '60%',
                backgroundColor: '#222',
                borderRadius: '4px',
                border: '1px solid var(--primary-color)',
                opacity: 0.8,
                transition: 'var(--transition)',
              }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
              >
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'var(--primary-color)',
                  fontWeight: 'bold',
                  opacity: 0.5
                }}>Click for Case Study</div>
              </div>
            </div>

            <div style={{
              gridColumn: index % 2 === 0 ? '7 / -1' : '1 / 7',
              gridRow: '1 / -1',
              textAlign: index % 2 === 0 ? 'right' : 'left',
              zIndex: 2,
              pointerEvents: 'none' // Let clicks pass through to the image/container if needed, or handle separately
            }}>
              <p style={{ color: 'var(--primary-color)', fontSize: '13px', marginBottom: '10px' }}>Featured Project</p>
              <h3
                style={{ color: 'var(--text-color)', fontSize: '24px', marginBottom: '20px', cursor: 'pointer', pointerEvents: 'auto' }}
                onClick={() => setSelectedProject(project)}
              >
                {project.title}
              </h3>

              <div style={{
                backgroundColor: '#112240',
                padding: '25px',
                borderRadius: '4px',
                color: 'var(--secondary-color)',
                fontSize: '16px',
                marginBottom: '20px',
                boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                pointerEvents: 'auto'
              }}>
                {project.description}
              </div>

              <ul style={{
                display: 'flex',
                justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                gap: '20px',
                marginBottom: '20px',
                color: 'var(--secondary-color)',
                fontSize: '13px',
              }}>
                {project.tech.map(t => <li key={t}>{t}</li>)}
              </ul>

              <div style={{
                display: 'flex',
                justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                gap: '20px',
                pointerEvents: 'auto'
              }}>
                <a href={project.links.github} aria-label="GitHub Link">GitHub</a>
                <a href={project.links.external} aria-label="External Link">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section >
  );
};

export default Projects;
