// src/components/Header.js (Refactored for smooth scrolling)

import React from 'react';
// 💡 Import the Link component from react-scroll
import { Link } from 'react-scroll'; 
import '../styles/Header.css'; 
import ThemeToggle from './ThemeToggle'; 

const Header = () => {
  return (
    <header className="main-header navbar navbar-expand-lg bg-dark navbar-dark fixed-top"> 
      <div className="container-fluid">
        
        <Link 
          className="navbar-brand" 
          to="about" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500}
        >
          Raziel Sevilla | Computer Science
        </Link>
        
        {/* Toggler remains a standard Bootstrap button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
            {/* 💡 Refactor each <a> tag to use the Link component */}
            {['about', 'experience', 'projects', 'certificates', 'contact'].map((sectionId) => (
                <li className="nav-item" key={sectionId}>
                    <Link 
                        className="nav-link" 
                        to={sectionId} 
                        spy={true} 
                        smooth={true} 
                        offset={-70} // Match this offset with the header height
                        duration={500} // Speed of the scroll in ms
                    >
                        {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)} 
                    </Link>
                </li>
            ))}
            
            <li className="nav-item ps-3">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;