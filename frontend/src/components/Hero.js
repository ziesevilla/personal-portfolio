// src/components/Hero.js (Refactored)

import React from 'react';

const Hero = () => {
  return (
    // 'container' centers the content, 'pt-5' and 'mt-5' adds top padding/margin
    <section id="about" className="hero-section container text-center pt-5 mt-5">
      <div className="p-5 bg-light rounded-3 shadow-lg"> {/* Add Bootstrap background and shadow */}
        <h2 className="display-6 text-secondary mt-5 pt-5">Hi, I'm Jane Doe.</h2>
        <h1 className="display-3 fw-bold mb-4">A Full-Stack Developer & Problem Solver</h1>
        <p className="lead mb-4">
          I build modern, responsive web applications using React, Node.js, and MongoDB. 
          I am passionate about clean code and excellent user experiences.
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