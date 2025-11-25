// src/components/ScrollReveal.js

import React, { useState, useEffect, useRef } from 'react';
import '../styles/ScrollReveal.css'; // We will create this next

const ScrollReveal = ({ children, width = '100%' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once visible (so it doesn't hide again when scrolling up)
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15, // Trigger when 15% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ width }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;