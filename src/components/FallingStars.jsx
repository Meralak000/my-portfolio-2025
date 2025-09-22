
import { useEffect, useRef } from 'react';
import './FallingStars.css';

const MAX_STARS = 50;

const FallingStars = () => {
  const containerRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createStar = () => {
      if (starsRef.current.length >= MAX_STARS) return;
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * window.innerWidth + 'px';
      star.style.fontSize = (Math.random() * 12 + 8) + 'px';
      star.style.animationDuration = (2 + Math.random() * 3) + 's';
      container.appendChild(star);
      starsRef.current.push(star);

      setTimeout(() => {
        if (container.contains(star)) {
          container.removeChild(star);
          starsRef.current = starsRef.current.filter(s => s !== star);
        }
      }, 5000);
    };

    const interval = setInterval(createStar, 50);

    return () => {
      clearInterval(interval);
      starsRef.current.forEach(star => {
        if (container.contains(star)) container.removeChild(star);
      });
      starsRef.current = [];
    };
  }, []);

  return <div ref={containerRef} className="stars-container" aria-hidden="true" />;
};

export default FallingStars;