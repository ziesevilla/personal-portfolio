// src/components/Experience.js

import React from 'react';
import experienceData from '../data/experienceData'; // Import data
import '../styles/Experience.css'; // Optional custom styling

const Experiences = () => {
  return (
    <section id="experience" className="experience-section container py-5">
      <h2 className="text-center display-4 mb-2">Work Experience</h2>
      <p className="text-center text-muted mb-5">
        My professional journey and key responsibilities.
      </p>

      {experienceData.map(job => (
        // Bootstrap Card for structure
        <div key={job.id} className="card mb-4 shadow-sm">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h4 className="card-title mb-0 text-primary">{job.title}</h4>
              <span className="badge bg-secondary">{job.duration}</span>
            </div>
            <h5 className="card-subtitle mb-3 text-muted">{job.company}</h5>
            
            {/* List Group for bullet points */}
            <ul className="list-group list-group-flush">
              {job.description.map((point, index) => (
                <li key={index} className="list-group-item">
                  <i className="fas fa-check-circle me-2 text-success"></i> 
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experiences;