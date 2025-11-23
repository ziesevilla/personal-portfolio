// src/components/Projects.js

import React, { useState } from 'react';
import projectData from '../data/projectData';
import '../styles/Projects.css';

const Projects = () => {
  // 💡 STATE CHANGE: Now using an array to store multiple selections
  const [selectedTechs, setSelectedTechs] = useState([]);

  // Get all unique technologies for the filter bar
  const allTechStack = ["All", ...new Set(projectData.flatMap(p => p.tech))].sort();

  // 💡 TOGGLE FUNCTION
  const handleFilterClick = (tech) => {
    if (tech === "All") {
      // If "All" is clicked, clear filters to show everything
      setSelectedTechs([]);
    } else {
      // If a specific tech is clicked...
      if (selectedTechs.includes(tech)) {
        // Remove it if already selected
        setSelectedTechs(selectedTechs.filter(t => t !== tech));
      } else {
        // Add it if not selected
        setSelectedTechs([...selectedTechs, tech]);
      }
    }
  };

  // 💡 MULTI-FILTER LOGIC
  const filteredProjects = selectedTechs.length === 0
    ? projectData // If array is empty, show ALL
    : projectData.filter(project => 
        // Returns true if the project contains AT LEAST ONE of the selected tags
        project.tech.some(t => selectedTechs.includes(t))
      );

  return (
    <section id="projects" className="projects-section container py-5">
      <h2 className="text-center display-4 mb-2 section-title">
        <span className="title-decoration">{'//'}</span> Project Archive <span className="title-decoration">{'//'}</span>
      </h2>
      
      {/* FILTER STREAM */}
      <div className="filter-scroll-container mb-5">
        <div className="filter-track">
          {allTechStack.map(tech => {
            // Determine if this specific button should look active
            const isActive = tech === "All" 
              ? selectedTechs.length === 0 
              : selectedTechs.includes(tech);

            return (
              <button 
                key={tech}
                className={`btn filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleFilterClick(tech)}
              >
                <span className="status-dot"></span> {tech}
              </button>
            );
          })}
        </div>
      </div>

      {/* PROJECTS GRID */}
      <div className="row g-4"> 
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4"> 
              <div className="card h-100 project-card-retro"> 
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                      <h3 className="card-title">{project.title}</h3>
                      <i className="fas fa-folder-open folder-icon"></i>
                  </div>
                  
                  <p className="card-text">{project.description}</p>
                  
                  <div className="tech-stack mb-3">
                    {project.tech.map(t => (
                      <span key={t} className="tech-pill">{t}</span> 
                    ))}
                  </div>
                </div>
                
                <div className="card-footer bg-transparent border-0 d-flex justify-content-between">
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github me-2"></i> Code
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                    <i className="fas fa-external-link-alt me-2"></i> Demo
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          // Optional: Message if no projects match the combination
          <div className="col-12 text-center text-muted mt-5">
            <p>No projects found matching these filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;