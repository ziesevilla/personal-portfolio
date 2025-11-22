// src/components/Projects.js

import React from 'react';
import '../styles/Projects.css'; 

// Define data for your projects
const projectData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully functional e-commerce site built with MERN stack. Features user authentication, cart management, and payment integration.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "A simple to-do application using React Hooks and local storage for state management.",
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    liveLink: "#",
    repoLink: "#"
  }
];

const Projects = () => {
  return (
    // id="projects" allows the Header link to navigate here
    <section id="projects" className="projects-section">
      <h2>My Work</h2>
      <p className="section-subtitle">Check out some of the projects I've built.</p>
      <div className="projects-grid">
        {projectData.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                View Live
              </a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;