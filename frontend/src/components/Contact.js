// src/components/Contact.js

import React from 'react';
import '../styles/Contact.css'; 

const Contact = () => {
  return (
    // id="contact" allows the Header link to navigate here
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <p className="section-subtitle">
        I am currently open to new opportunities. Let's build something great together!
      </p>
      <p className="contact-email">
        Email me directly: <a href="mailto:your.email@example.com">your.email@example.com</a>
      </p>
      
      <div className="social-links">
        {/* Replace # with your actual URLs */}
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      
      {/* You could add a simple contact form here if preferred */}
    </section>
  );
};

export default Contact;