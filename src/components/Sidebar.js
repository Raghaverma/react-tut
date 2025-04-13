import React, { useState, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiBox, 
  FiCode, 
  FiLayers, 
  FiCpu, 
  FiGitBranch, 
  FiZap,
  FiDatabase,
  FiRefreshCw,
  FiLink,
  FiTool,
  FiTerminal,
  FiPackage,
  FiServer,
  FiCheckCircle
} from 'react-icons/fi';

const sections = {
  basics: {
    title: 'React Basics',
    icon: <FiBox />,
    pages: [
      { path: '/', title: 'Home', icon: <FiHome /> },
      { path: '/components', title: 'Components', icon: <FiCode /> },
      { path: '/props', title: 'Props', icon: <FiLayers /> },
      { path: '/state', title: 'State', icon: <FiDatabase /> },
      { path: '/events', title: 'Events', icon: <FiZap /> },
      { path: '/jsx', title: 'JSX', icon: <FiCode /> }
    ]
  },
  advanced: {
    title: 'Advanced Concepts',
    icon: <FiCpu />,
    pages: [
      { path: '/hooks', title: 'Hooks', icon: <FiRefreshCw /> },
      { path: '/effects', title: 'Effects', icon: <FiZap /> },
      { path: '/context', title: 'Context', icon: <FiLink /> },
      { path: '/refs', title: 'Refs', icon: <FiLink /> }
    ]
  },
  tools: {
    title: 'Tools & Best Practices',
    icon: <FiTool />,
    pages: [
      { path: '/typescript', title: 'TypeScript', icon: <FiCode /> },
      { path: '/testing', title: 'Testing', icon: <FiCheckCircle /> },
      { path: '/performance', title: 'Performance', icon: <FiZap /> },
      { path: '/deployment', title: 'Deployment', icon: <FiServer /> },
      { path: '/cli', title: 'CLI Tools', icon: <FiTerminal /> },
      { path: '/packages', title: 'Package Management', icon: <FiPackage /> }
    ]
  }
};

const Sidebar = () => {
  const location = useLocation();
  const [openSections, setOpenSections] = useState({
    basics: true,
    advanced: false,
    tools: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <nav className="sidebar">
      <ul className="sidebar-list">
        {Object.entries(sections).map(([key, section]) => (
          <li key={key} className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => toggleSection(key)}
            >
              <div className="section-header-content">
                {section.icon}
                <span>{section.title}</span>
              </div>
              <span className={`dropdown-icon ${openSections[key] ? 'open' : ''}`}>
                ▼
              </span>
            </div>
            {openSections[key] && (
              <ul className="sidebar-submenu">
                {section.pages.map((page) => (
                  <li key={page.path}>
                    <Link
                      to={page.path}
                      className={`sidebar-link ${location.pathname === page.path ? 'active' : ''}`}
                    >
                      {page.icon}
                      <span>{page.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(Sidebar); 