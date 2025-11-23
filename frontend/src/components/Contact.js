// src/components/Contact.js

import React, { useState } from 'react';
import contactData from '../data/contactData'; 
import '../styles/Contact.css'; 

const Contact = () => {
  const { email, message, socialLinks } = contactData;
  const [copySuccess, setCopySuccess] = useState('');

  // Function to copy email to clipboard
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      setCopySuccess('Failed to copy');
    }
  };

  return (
    <section id="contact" className="contact-section container-fluid py-5">
      
      {/* 💡 NEW: RETRO HORIZON BACKGROUND */}
      <div className="retro-bg-container">
        <div className="retro-grid"></div>
        <div className="horizon-glow"></div>
      </div>

      <div className="container contact-wrapper position-relative" style={{ zIndex: 2 }}>
        
        <h2 className="text-center display-4 mb-4 section-title">
          <span className="title-decoration">{'>>>'}</span> Connect With Me <span className="title-decoration">{'>>>'}</span>
        </h2>

        {/* THE CYBER CARD */}
        <div className="cyber-card">
          
          {/* Status Bar */}
          <div className="card-status-bar">
            <span className="status-dot pulsing"></span>
            <span className="status-text">STATUS: AVAILABLE_FOR_HIRE</span>
          </div>

          <p className="text-center mb-4 card-message">
            {message}
          </p>
          
          {/* Email Copy Box */}
          <div className="email-command-line" onClick={handleCopyEmail}>
            <span className="prompt">{'>'}</span>
            <span className="email-text">{email}</span>
            <span className="copy-icon">
              <i className="far fa-copy"></i>
            </span>
            
            <div className={`copy-feedback ${copySuccess ? 'show' : ''}`}>
              {copySuccess}
            </div>
          </div>
          
          {/* Social Grid */}
          <div className="social-grid mt-4">
            {socialLinks.map((link) => (
                <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn"
                >
                    {link.iconClass && <i className={`${link.iconClass} social-icon`}></i>}
                    <span>{link.name}</span>
                </a>
            ))}
          </div>
          
          {/* Decorative Corner Elements */}
          <div className="corner-decor top-left"></div>
          <div className="corner-decor bottom-right"></div>
        </div>

      </div>
    </section>
  );
};

export default Contact;