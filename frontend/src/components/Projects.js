// src/components/Projects.js (Refactored)

import React from 'react';
import projectData from '../data/projectData';

const Projects = () => {
  return (
    <section id="projects" className="projects-section container py-5">
      <h2 className="text-center display-4 mb-2">My Work</h2>
      <p className="text-center text-muted mb-5">Check out some of the projects I've built.</p>
      
      {/* Use Bootstrap's row and column structure */}
      <div className="row g-4"> 
        {projectData.map(project => (
          // Define responsive column width: 12 units on small screens, 6 on medium, 4 on large
          <div key={project.id} className="col-12 col-md-6 col-lg-4"> 
            {/* Use card component */}
            <div className="card h-100 shadow-sm border-0"> 
              <div className="card-body">
                <h3 className="card-title text-primary">{project.title}</h3>
                <p className="card-text">{project.description}</p>
                
                <div className="tech-stack mb-3">
                  {project.tech.map(t => (
                    // Use Bootstrap badge utility
                    <span key={t} className="badge bg-info text-dark me-2">{t}</span> 
                  ))}
                </div>
              </div>
              <div className="card-footer bg-white border-0">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="card-link fw-bold">
                  View Live
                </a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="card-link">
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;