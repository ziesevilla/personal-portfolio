// src/components/ThemeToggle.js

import React, { useState, useEffect } from 'react';
import '../styles/ThemeToggle.css'; // We'll create this CSS file next

const ThemeToggle = () => {
  // 1. Get initial theme from local storage or default to 'light'
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  // 2. useEffect to apply the theme class to the <body> element
  useEffect(() => {
    // Set the class on the body
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
    
    // Save the theme preference to local storage
    localStorage.setItem('theme', theme);
  }, [theme]); // Rerun this effect whenever the 'theme' state changes

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export default ThemeToggle;