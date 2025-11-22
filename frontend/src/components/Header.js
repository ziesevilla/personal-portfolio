// src/components/Header.js (Refactored)

import React from 'react';
import './ThemeToggle'; // Assume correct relative path
import ThemeToggle from './ThemeToggle';


const Header = () => {
  return (
    <header className="main-header navbar navbar-expand-lg bg-dark navbar-dark fixed-top"> 
      <div className="container-fluid">
        {/* ... (Branding and Toggler) ... */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li> {/* <-- NEW */}
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#certificates">Certificates</a></li> {/* <-- NEW */}
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
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