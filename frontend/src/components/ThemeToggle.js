// src/components/ThemeToggle.js (Refactored for Minimalism)

import React, { useState, useEffect } from 'react';
import '../styles/ThemeToggle.css'; 

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', theme);
  }, [theme]); 

  return (
    <button onClick={toggleTheme} className="theme-toggle-button minimal-toggle">
      {/* 💡 Icon Change: Use a Font Awesome icon based on the current theme */}
      {theme === 'light' ? 
        <i className="fas fa-moon"></i> : // Show moon icon in light mode
        <i className="fas fa-sun"></i>    // Show sun icon in dark mode
      }
    </button>
  );
};

export default ThemeToggle;