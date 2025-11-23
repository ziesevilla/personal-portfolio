// src/components/Hero.js

import React from 'react';
import heroData from '../data/heroData'; // 💡 Import the new data file
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
    <section id="about" className="hero-section text-center">
      <div className="container-md">
        {/* Use the destructured variables */}
        <h2 className="display-6 text-secondary">Hi, I'm {name}.</h2>
        <h1 className="display-3 fw-bold mb-4">{title}</h1>
        <p className="lead mb-4">
          {description}
        </p>
        
        <div className="hero-actions my-4">
          {/* Use the destructured link variables */}
          <a href={resumeLink} target="_blank" rel="noopener noreferrer" 
             className="btn btn-primary btn-lg me-3"> 
            Download Resume
          </a>
          <a href={contactAnchor} className="btn btn-outline-dark btn-lg">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;