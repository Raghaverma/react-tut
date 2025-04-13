import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header>
      <div className="header-content">
        <Link to="/" className="logo">
          <img src={logo} alt="React Logo" className="logo-img" />
          <span className="logo-text">React Tutorial</span>
        </Link>
        <div className="header-actions">
          <button onClick={toggleDarkMode} className="theme-toggle">
            {isDarkMode ? '☀' : '☾'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header; 