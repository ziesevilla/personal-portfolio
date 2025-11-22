// src/components/Certificates.js

import React from 'react';
import certificateData from '../data/certificateData'; // Import data
import '../styles/Certificates.css'; // Optional custom styling

const Certificates = () => {
  return (
    // 'container' and padding classes from Bootstrap
    <section id="certificates" className="certificates-section container py-5">
      <h2 className="text-center display-4 mb-2">Certifications</h2>
      <p className="text-center text-muted mb-5">
        Formal recognition of my commitment to continuous learning.
      </p>

      <div className="row g-4 justify-content-center">
        {certificateData.map(cert => (
          // Responsive column sizing
          <div key={cert.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-primary border-3">
              <div className="card-body">
                <h5 className="card-title text-primary">{cert.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{cert.issuer}</h6>
                <p className="card-text small">{cert.date}</p>
              </div>
              <div className="card-footer bg-light border-0">
                <a href={cert.link} target="_blank" rel="noopener noreferrer" 
                   className="btn btn-sm btn-outline-primary">
                  View Credential <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;