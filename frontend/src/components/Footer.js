// src/components/Footer.js

import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <p>
        &copy; {currentYear} Raziel Lloyd Sevilla. Built with <span className="react-color">React</span>.
      </p>
    </footer>
  );
};

export default Footer;