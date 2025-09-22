import React, { useRef, useEffect } from 'react';
import '../styles/BearToggle.css';

const BearThemeToggle = ({ theme, onThemeToggle }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.setAttribute("aria-pressed", theme === 'dark' ? "true" : "false");
      document.body.setAttribute("data-dark-mode", (theme === 'dark').toString());
    }
  }, [theme]);

  const handleToggle = () => {
    const button = buttonRef.current;
    if (!button) return;
    const isPressed = button.matches("[aria-pressed=true]");
    const newPressed = !isPressed;
    document.body.setAttribute("data-dark-mode", newPressed.toString());
    button.setAttribute("aria-pressed", newPressed.toString());
    onThemeToggle();
  };

  return (
    <button className="toggle" aria-pressed={theme === 'dark' ? "true" : "false"} title="Toggle Dark Mode" ref={buttonRef} onClick={handleToggle}>
      <span className="toggle__content">
        <svg aria-hidden="true" className="toggle__backdrop" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 290 228">
          <g className="clouds">
            <path fill="#D9D9D9" d="M335 147.5c0 27.89-22.61 50.5-50.5 50.5a50.78 50.78 0 0 1-9.29-.853c-2.478 12.606-10.595 23.188-21.615 29.011C245.699 243.749 228.03 256 207.5 256a50.433 50.433 0 0 1-16.034-2.599A41.811 41.811 0 0 1 166 262a41.798 41.798 0 0 1-22.893-6.782A42.21 42.21 0 0 1 135 256a41.82 41.82 0 0 1-19.115-4.592A41.84 41.84 0 0 1 88 262c-1.827 0-3.626-.117-5.391-.343C74.911 270.448 63.604 276 51 276c-23.196 0-42-18.804-42-42s18.804-42 42-42c1.827 0 3.626.117 5.391.343C64.089 183.552 75.396 178 88 178a41.819 41.819 0 0 1 19.115 4.592C114.532 176.002 124.298 172 135 172a41.798 41.798 0 0 1 22.893 6.782 42.066 42.066 0 0 1 7.239-.773C174.137 164.159 189.749 155 207.5 155c.601 0 1.199.01 1.794.031A41.813 41.813 0 0 1 234 147h.002c.269-27.66 22.774-50 50.498-50 27.89 0 50.5 22.61 50.5 50.5Z" />
          </g>
        </svg>
        <svg aria-hidden="true" className="toggle__backdrop" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 290 228">
          <g className="stars">
            <circle cx="30" cy="20" r="1" fill="hsl(0 0% 100% / 0.25)"/>
            <circle cx="250" cy="30" r="1.5" fill="hsl(0 0% 100% / 0.25)"/>
            <circle cx="200" cy="60" r="1" fill="hsl(0 0% 100% / 0.25)"/>
            <circle cx="50" cy="80" r="1" fill="hsl(0 0% 100% / 0.25)"/>
            <circle cx="180" cy="15" r="1" fill="hsl(0 0% 100% / 0.25)"/>
            <circle cx="70" cy="40" r="1" fill="hsl(0 0% 100% / 0.25)"/>
            <circle cx="220" cy="90" r="1.5" fill="hsl(0 0% 100% / 0.25)"/>
            <circle cx="120" cy="25" r="1" fill="hsl(0 0% 100% / 0.25)"/>
            <circle cx="270" cy="70" r="1" fill="hsl(0 0% 100% / 0.25)"/>
            <circle cx="90" cy="10" r="1" fill="hsl(0 0% 100% / 0.25)"/>
            <circle cx="150" cy="50" r="1.5" fill="hsl(0 0% 100% / 0.25)"/>
          </g>
        </svg>
        <div className="toggle__indicator-wrapper">
          <div className="toggle__indicator">
            <div className="toggle__star">
              <div className="sun"></div>
              <div className="moon">
                <div className="moon__crater" style={{"--size": 18, "--x": 40, "--y": 15}}></div>
                <div className="moon__crater" style={{"--size": 20, "--x": 65, "--y": 58}}></div>
                <div className="moon__crater" style={{"--size": 34, "--x": 18, "--y": 40}}></div>
              </div>
            </div>
          </div>
        </div>
      </span>
    </button>
  );
};

export default BearThemeToggle;