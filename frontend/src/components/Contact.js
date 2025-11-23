// src/components/Contact.js

import React from 'react';
import contactData from '../data/contactData'; // 💡 Import the new data file
import '../styles/Contact.css'; 

const Contact = () => {
  // Destructure the data for clean access
  const { email, message, socialLinks } = contactData;

  return (
    // id="contact" allows the Header link to navigate here
    <section id="contact" className="contact-section container py-5">
      <h2 className="text-center display-4 mb-2">Get In Touch</h2>
      <p className="text-center text-muted mb-4">
        {message}
      </p>
      
      <p className="contact-email mb-4">
        Email me directly: <a href={`mailto:${email}`} className="fw-bold">{email}</a>
      </p>
      
      <div className="social-links">
        {/* Map over the socialLinks array */}
        {socialLinks.map((link) => (
            <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-dark mx-2"
            >
                {/* Use the Font Awesome icon class if you installed the library */}
                {link.iconClass && <i className={`${link.iconClass} me-2`}></i>}
                {link.name}
            </a>
        ))}
      </div>
      
    </section>
  );
};

export default Contact;