// src/components/Hero.js (Refactored)

import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="about" className="hero-section text-center">
      
      <div className="container-md">
        <h2 className="display-6 text-secondary">Hi, I'm Raziel Lloyd Sevilla.</h2>
        <h1 className="display-3 fw-bold mb-4">A Computer Science Student</h1>
        <p className="lead mb-4">
          I build modern, responsive web applications using React, MySQL, and Bootstrap. I am passionate about clean code and excellent user experiences.
        </p>
        <div className="hero-actions my-4">
          {/* Use Bootstrap button classes */}
          <a href="link-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" 
             className="btn btn-primary btn-lg me-3"> 
            Download Resume
          </a>
          <a href="#contact" className="btn btn-outline-dark btn-lg">
            Get In Touch
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;