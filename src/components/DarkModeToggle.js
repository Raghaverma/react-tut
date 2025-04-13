import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setIsDark(savedTheme === 'dark' || (!savedTheme && prefersDark));
  }, []);

  useEffect(() => {
    // Update document class and localStorage when theme changes
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="theme-toggle"
      aria-label="Toggle dark mode"
    >
      <div className={`toggle-track ${isDark ? 'dark' : ''}`}>
        <div className="toggle-icons">
          <FiSun className="sun-icon" />
          <FiMoon className="moon-icon" />
        </div>
        <div className={`toggle-thumb ${isDark ? 'dark' : ''}`} />
      </div>
    </button>
  );
};

export default DarkModeToggle; 