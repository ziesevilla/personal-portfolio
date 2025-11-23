// src/components/PixelTrail.js
import React, { useState, useEffect, useCallback } from 'react';
import '../styles/PixelTrail.css';

// Configuration for the trail effect
const TRAIL_LENGTH = 15; // Number of pixels in the trail
const PIXEL_SIZE = 8;  // Size of each pixel element in pixels
const MAX_SHIFT = 6;  // Maximum random pixel shift in one direction (for glitch effect)

const PixelTrail = () => {
  // State to store the position of each pixel in the trail
  const [trail, setTrail] = useState([]);

  // Function to update the trail based on mouse movement
  const handleMouseMove = useCallback((e) => {
    // 1. Create a random shift within MAX_SHIFT range (The Glitch Effect)
    const shiftX = (Math.random() * MAX_SHIFT * 2) - MAX_SHIFT;
    const shiftY = (Math.random() * MAX_SHIFT * 2) - MAX_SHIFT;

    const newPixel = {
      id: Date.now(), // Unique ID for React key
      x: e.clientX + shiftX,
      y: e.clientY + shiftY,
    };

    // 2. Add the new pixel and remove the oldest one
    setTrail(currentTrail => {
      // Note: requestAnimationFrame is often used here for optimal performance, 
      // but sticking to standard React practices for simplicity
      return [newPixel, ...currentTrail].slice(0, TRAIL_LENGTH);
    });
  }, []);

  // Set up and clean up the global mouse move listener
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <>
      {trail.map((pixel, index) => {
        // Calculate the scale based on the index (newest=1, oldest=0.5)
        const scaleFactor = 1 - (index / TRAIL_LENGTH) * 0.5; 
        
        return (
          <div
            key={pixel.id}
            className="trail-pixel"
            style={{
              // Center the pixel on the adjusted position
              left: `${pixel.x - PIXEL_SIZE / 2}px`,
              top: `${pixel.y - PIXEL_SIZE / 2}px`,
              // Fade the pixel based on its age (index)
              opacity: 1 - (index / TRAIL_LENGTH),
              // Apply scale transform for the shrinking effect
              transform: `scale(${scaleFactor})`, 
            }}
          />
        );
      })}
    </>
  );
};

export default PixelTrail;