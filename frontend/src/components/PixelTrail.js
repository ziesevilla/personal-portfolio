// src/components/PixelTrail.js
import React, { useState, useEffect, useCallback } from 'react';
import '../styles/PixelTrail.css';

const PIXEL_SIZE = 30; 
const MAX_SHIFT = 6; 
const DECAY_RATE = 0.05; // 💡 How fast pixels fade (0.05 = fast, 0.01 = slow)

const PixelTrail = () => {
  const [trail, setTrail] = useState([]);

  // 1. Handle Mouse Movement (Adds new pixels)
  const handleMouseMove = useCallback((e) => {
    const shiftX = (Math.random() * MAX_SHIFT * 2) - MAX_SHIFT;
    const shiftY = (Math.random() * MAX_SHIFT * 2) - MAX_SHIFT;

    const newPixel = {
      id: Date.now() + Math.random(), // Add random to ensure unique key if bursts happen
      x: e.clientX + shiftX,
      y: e.clientY + shiftY,
      life: 1.0 // 💡 Start with 100% life
    };

    setTrail(prev => [...prev, newPixel]);
  }, []);

  // 2. The "Game Loop" (Fades pixels over time)
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(currentTrail => {
        // If no pixels, do nothing (saves performance)
        if (currentTrail.length === 0) return currentTrail;

        // Reduce life of all pixels and remove dead ones
        return currentTrail
          .map(pixel => ({ ...pixel, life: pixel.life - DECAY_RATE }))
          .filter(pixel => pixel.life > 0);
      });
    }, 20); // Run every 20ms (approx 50fps)

    return () => clearInterval(interval);
  }, []);

  // 3. Attach Listeners
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <>
      {trail.map((pixel) => {
        // 💡 Scale and Opacity now depend on the 'life' property
        // Life goes from 1.0 -> 0.0
        const scaleFactor = pixel.life; // Shrink as it dies
        
        return (
          <div
            key={pixel.id}
            className="trail-pixel"
            style={{
              left: `${pixel.x - PIXEL_SIZE / 2}px`,
              top: `${pixel.y - PIXEL_SIZE / 2}px`,
              opacity: pixel.life, 
              transform: `scale(${scaleFactor})`, 
            }}
          />
        );
      })}
    </>
  );
};

export default PixelTrail;