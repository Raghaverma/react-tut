import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="sidebar">
      <nav>
        <div className="nav-section">
          <h3>Getting Started</h3>
          <div className="nav-links">
            <Link to="/" className={isActive('/') ? 'active' : ''}>
              <span className="nav-icon">🏠</span>
              <span className="nav-text">Home</span>
            </Link>
            <Link to="/jsx" className={isActive('/jsx') ? 'active' : ''}>
              <span className="nav-icon">📝</span>
              <span className="nav-text">JSX</span>
            </Link>
            <Link to="/components" className={isActive('/components') ? 'active' : ''}>
              <span className="nav-icon">🧩</span>
              <span className="nav-text">Components</span>
            </Link>
          </div>
        </div>

        <div className="nav-section">
          <h3>Core Concepts</h3>
          <div className="nav-links">
            <Link to="/props" className={isActive('/props') ? 'active' : ''}>
              <span className="nav-icon">📦</span>
              <span className="nav-text">Props</span>
            </Link>
            <Link to="/state" className={isActive('/state') ? 'active' : ''}>
              <span className="nav-icon">🔄</span>
              <span className="nav-text">State</span>
            </Link>
            <Link to="/events" className={isActive('/events') ? 'active' : ''}>
              <span className="nav-icon">🎯</span>
              <span className="nav-text">Events</span>
            </Link>
            <Link to="/effects" className={isActive('/effects') ? 'active' : ''}>
              <span className="nav-icon">⚡</span>
              <span className="nav-text">Effects</span>
            </Link>
            <Link to="/context" className={isActive('/context') ? 'active' : ''}>
              <span className="nav-icon">🌐</span>
              <span className="nav-text">Context</span>
            </Link>
            <Link to="/refs" className={isActive('/refs') ? 'active' : ''}>
              <span className="nav-icon">🔗</span>
              <span className="nav-text">Refs</span>
            </Link>
          </div>
        </div>

        <div className="nav-section">
          <h3>Advanced Topics</h3>
          <div className="nav-links">
            <Link to="/hooks" className={isActive('/hooks') ? 'active' : ''}>
              <span className="nav-icon">🎣</span>
              <span className="nav-text">Hooks</span>
            </Link>
            <Link to="/performance" className={isActive('/performance') ? 'active' : ''}>
              <span className="nav-icon">⚡</span>
              <span className="nav-text">Performance</span>
            </Link>
            <Link to="/testing" className={isActive('/testing') ? 'active' : ''}>
              <span className="nav-icon">🧪</span>
              <span className="nav-text">Testing</span>
            </Link>
          </div>
        </div>

        <div className="nav-section">
          <h3>Tools & Deployment</h3>
          <div className="nav-links">
            <Link to="/deployment" className={isActive('/deployment') ? 'active' : ''}>
              <span className="nav-icon">🚀</span>
              <span className="nav-text">Deployment</span>
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar; 