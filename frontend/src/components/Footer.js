// src/components/Footer.js

import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="main-footer">
      {/* 💡 Neon Separator Line */}
      <div className="footer-line"></div>

      <div className="container footer-content">
        
        {/* Left Side: Copyright & Tech */}
        <div className="footer-info">
          <p className="copyright">
            &copy; {currentYear} Raziel Lloyd Sevilla.
          </p>
          <p className="system-status">
            <span className="status-dot"></span> System Status: <span className="react-color">ONLINE</span>
          </p>
        </div>

        {/* Right Side: Scroll to Top */}
        <button onClick={scrollToTop} className="scroll-top-btn">
          BACK_TO_TOP <i className="fas fa-arrow-up ms-2"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;