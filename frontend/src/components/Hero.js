// src/components/Hero.js

import React from 'react';
import '../styles/Hero.css'; 
// import profilePic from '../assets/profile.jpg'; 

const Hero = () => {
  return (
    // id="about" allows the Header link to navigate here
    <section id="about" className="hero-section">
      {/* <img src={profilePic} alt="Jane Doe Profile" className="profile-pic" /> */}
      <h2>Hi, I'm Raziel Lloyd Sevilla.</h2>
      <h1>A **Full-Stack Developer** & Problem Solver</h1>
      <p>
        I build modern, responsive web applications using React, Node.js, and MongoDB. 
        I am passionate about clean code and excellent user experiences.
      </p>
      <div className="hero-actions">
        {/* Replace with links to your actual files */}
        <a href="link-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="btn primary-btn">
          Download Resume
        </a>
        <a href="#contact" className="btn secondary-btn">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;