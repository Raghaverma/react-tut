import React from 'react';

function Packages() {
  const packageJsonExample = `{
  "name": "my-react-app",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "typescript": "^5.0.0"
  }
}`;

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Package Management in React</h1>
        <p className="page-description">
          Learn how to effectively manage dependencies in your React applications.
        </p>
      </header>

      <section className="section">
        <h2>Package.json</h2>
        <p>
          The heart of Node.js/React project dependency management:
        </p>
        <div className="code-block">
          <pre>
            <code>
              {packageJsonExample}
            </code>
          </pre>
        </div>
      </section>

      <section className="section">
        <h2>Common Package Commands</h2>
        <p>Essential commands for managing packages:</p>
        <div className="code-block">
          <pre>
            <code>
              # Install all dependencies
              npm install

              # Add a new package
              npm install package-name

              # Add a dev dependency
              npm install --save-dev package-name

              # Remove a package
              npm uninstall package-name

              # Update packages
              npm update
            </code>
          </pre>
        </div>
      </section>

      <section className="section">
        <h2>Version Control</h2>
        <p>Understanding semantic versioning in package.json:</p>
        <ul>
          <li><code>^1.2.3</code>: Accepts minor updates (1.x.x)</li>
          <li><code>~1.2.3</code>: Accepts patch updates (1.2.x)</li>
          <li><code>1.2.3</code>: Exact version only</li>
          <li><code>*</code>: Latest version (not recommended)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Best Practices</h2>
        <ul>
          <li>Always use a package-lock.json or yarn.lock</li>
          <li>Regularly update dependencies for security</li>
          <li>Use exact versions for critical dependencies</li>
          <li>Document dependencies in README.md</li>
          <li>Consider using npm audit for security checks</li>
        </ul>
      </section>
    </div>
  );
}

export default Packages; 