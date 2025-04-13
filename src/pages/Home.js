import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="content">
      <h1>Welcome to React Tutorial</h1>
      <p className="intro">
        React is a JavaScript library for building user interfaces. It's component-based, 
        declarative, and learn once, write anywhere.
      </p>

      <div className="section">
        <h2>Complete Learning Path</h2>
        <div className="learning-path">
          <div className="path-group">
            <h3>Fundamentals</h3>
            <ul>
              <li><Link to="/jsx">JSX</Link> - JavaScript XML syntax</li>
              <li><Link to="/components">Components</Link> - Building blocks of React</li>
              <li><Link to="/props">Props</Link> - Passing data to components</li>
              <li><Link to="/state">State</Link> - Managing component data</li>
              <li><Link to="/events">Events</Link> - Handling user interactions</li>
            </ul>
          </div>

          <div className="path-group">
            <h3>Hooks and Effects</h3>
            <ul>
              <li><Link to="/effects">Effects</Link> - Side effects in components</li>
              <li><Link to="/context">Context</Link> - Sharing data between components</li>
              <li><Link to="/refs">Refs</Link> - Accessing DOM elements</li>
              <li><Link to="/hooks">Custom Hooks</Link> - Reusable logic</li>
            </ul>
          </div>

          <div className="path-group">
            <h3>Advanced Concepts</h3>
            <ul>
              <li><Link to="/performance">Performance</Link> - Optimizing React apps</li>
              <li><Link to="/testing">Testing</Link> - Testing React components</li>
            </ul>
          </div>

          <div className="path-group">
            <h3>Tools and Deployment</h3>
            <ul>
              <li><Link to="/deployment">Deployment</Link> - Deploying React apps</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Prerequisites</h2>
        <p>
          Before starting with React, you should be familiar with:
        </p>
        <ul>
          <li>HTML and CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>Basic programming concepts</li>
        </ul>
      </div>

      <div className="section">
        <h2>Getting Started</h2>
        <p>
          Start your React journey by learning about <Link to="/jsx">JSX</Link>, 
          the syntax extension that allows you to write HTML-like code in your JavaScript files.
        </p>
        <div className="code-block">
          <div className="code-header">
            <span>Example.jsx</span>
            <button className="copy-button">Copy</button>
          </div>
          <pre className="code-content">
            <code>{`function Greeting() {
  return <h1>Hello, React!</h1>;
}`}</code>
          </pre>
        </div>
      </div>

      <div className="section">
        <h2>Next Steps</h2>
        <p>
          Ready to begin? Start with the <Link to="/jsx">JSX</Link> section to learn 
          the fundamentals of React's syntax.
        </p>
      </div>
    </div>
  );
}

export default Home; 