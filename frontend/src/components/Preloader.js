// src/components/Preloader.js

import React, { useEffect, useState } from 'react';
import '../styles/Preloader.css';

const Preloader = ({ onComplete }) => {
  const [text, setText] = useState('');
  const fullText = [
    "> INITIALIZING SYSTEM...",
    "> LOADING ASSETS...",
    "> CONNECTING TO SERVER...",
    "> DECRYPTING PROFILE...",
    "> ACCESS GRANTED."
  ];
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + (prev ? '\n' : '') + fullText[lineIndex]);
        setLineIndex(prev => prev + 1);
      }, 500); // Speed of each line appearing
      return () => clearTimeout(timeout);
    } else {
      // Wait a bit after finishing, then trigger completion
      const finishTimeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(finishTimeout);
    }
  }, [lineIndex]);

  return (
    <div className="preloader">
      <div className="terminal-text">
        {text}
        <span className="cursor">_</span>
      </div>
    </div>
  );
};

export default Preloader;