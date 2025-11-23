// src/components/Hero.js

import React from 'react';
import heroData from '../data/heroData'; 
import '../styles/Hero.css';

const Hero = () => {
  // Destructure the data for clean access in JSX
  const { 
    name, 
    title, 
    description, 
    resumeLink, 
    contactAnchor 
  } = heroData;

  return (
    // 'hero-section' class contains all the background and layout styles
    <section id="about" className="hero-section text-center"> 
      {/* Container is used to manage the text width, not the background */}
      <div className="container-md"> 
        {/* h2 uses the neon accent color via Hero.css styling */}
        <h2 className="display-6 text-secondary">Hi, I'm {name}.</h2> 
        <h1 className="display-3 fw-bold mb-4">{title}</h1>
        <p className="lead mb-4">
          {description}
        </p>
        
        <div className="hero-actions my-4">
          {/* PRIMARY BUTTON: Uses primary theme color, has pulsing glow */}
          <a href={resumeLink} target="_blank" rel="noopener noreferrer" 
            className="btn btn-primary btn-lg me-3 pulsing-glow"> 
            <i className="fas fa-download me-2"></i> Resume
          </a>
          
          {/* SECONDARY BUTTON: Uses custom class for transparent neon outline */}
          <a href={contactAnchor} 
             className="btn btn-outline-dark btn-lg secondary-btn">
            <i className="fas fa-envelope me-2"></i> Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;