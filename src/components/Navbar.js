import React from 'react';
import DarkModeToggle from './DarkModeToggle';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>React Tutorial</h1>
      </div>
      <div className="navbar-actions">
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Navbar; 