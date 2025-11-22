// src/components/Header.js

import React from 'react';
import '../styles/Header.css'; 
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="main-header"> 
      <nav className="nav-bar">
        <div className="nav-logo">
          <h1>Jane Doe | Developer</h1>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        
        {/* Place the Theme Toggle Button */}
        <ThemeToggle /> 
        
      </nav>
    </header>
  );
};

export default Header;