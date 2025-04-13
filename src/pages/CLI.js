import React from 'react';

function CLI() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">CLI Tools in React</h1>
        <p className="page-description">
          Learn about essential command-line tools that enhance React development workflow.
        </p>
      </header>

      <section className="section">
        <h2>Create React App (CRA)</h2>
        <p>
          The official tool for creating new React applications with zero configuration:
        </p>
        <div className="code-block">
          <pre>
            <code>
              npx create-react-app my-app
              cd my-app
              npm start
            </code>
          </pre>
        </div>
      </section>

      <section className="section">
        <h2>React Developer Tools</h2>
        <p>
          Browser extension for inspecting React component hierarchies:
        </p>
        <ul>
          <li>Inspect component props and state</li>
          <li>Debug performance issues</li>
          <li>Track component renders</li>
        </ul>
      </section>

      <section className="section">
        <h2>npm and yarn</h2>
        <p>
          Package managers for installing and managing dependencies:
        </p>
        <div className="code-block">
          <pre>
            <code>
              # NPM commands
              npm install package-name
              npm run build
              npm test

              # Yarn commands
              yarn add package-name
              yarn build
              yarn test
            </code>
          </pre>
        </div>
      </section>

      <section className="section">
        <h2>Vite</h2>
        <p>
          Modern build tool that offers a faster development experience:
        </p>
        <div className="code-block">
          <pre>
            <code>
              # Create a new React project with Vite
              npm create vite@latest my-app -- --template react
              cd my-app
              npm install
              npm run dev
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
}

export default CLI; 