import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <h1>React Tutorial</h1>
        </Link>
        <div className="header-right">
          <Search />
          <nav className="header-nav">
            <Link to="/">Home</Link>
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
              Docs
            </a>
            <a href="https://github.com/Raghaverma/react-tut" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header; 