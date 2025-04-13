import React from 'react';
import { Link } from 'react-router-dom';
import CodeExplanation from '../components/CodeExplanation';
import CodeBlock from '../components/CodeBlock';

function Deployment() {
  return (
    <div className="content">
      <h1>Deployment</h1>
      <p className="intro">
        Deploying a React application involves building it for production and hosting 
        it on a server. There are several options available, from simple static hosting 
        to full-scale cloud platforms.
      </p>

      <div className="section">
        <h2>Building for Production</h2>
        <p>
          Create a production build using the build script:
        </p>

        <CodeBlock
          fileName="package.json"
          code={`{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "npm run build",
              explanation: "Creates an optimized production build in the build directory."
            },
            {
              code: "react-scripts build",
              explanation: "Bundles React in production mode and optimizes the build for the best performance."
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Static Hosting</h2>
        <p>
          Deploy to static hosting services like Netlify or Vercel:
        </p>

        <CodeBlock
          fileName="netlify.toml"
          code={`[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "command = \"npm run build\"",
              explanation: "Specifies the build command for Netlify."
            },
            {
              code: "publish = \"build\"",
              explanation: "Sets the directory containing the built files."
            },
            {
              code: "[[redirects]]",
              explanation: "Configures URL rewriting for client-side routing."
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Environment Variables</h2>
        <p>
          Configure environment variables for different environments:
        </p>

        <CodeBlock
          fileName=".env.production"
          code={`REACT_APP_API_URL=https://api.example.com
REACT_APP_GA_TRACKING_ID=UA-XXXXXXXXX-X`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "REACT_APP_",
              explanation: "Prefix required for React to include the variable in the build."
            },
            {
              code: ".env.production",
              explanation: "Environment file for production-specific variables."
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Continuous Deployment</h2>
        <p>
          Set up continuous deployment with GitHub Actions:
        </p>

        <CodeBlock
          fileName=".github/workflows/deploy.yml"
          code={`name: Deploy
on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          folder: build`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "on: push: branches: [ main ]",
              explanation: "Triggers the workflow when changes are pushed to the main branch."
            },
            {
              code: "runs-on: ubuntu-latest",
              explanation: "Specifies the operating system for the build environment."
            },
            {
              code: "npm run build",
              explanation: "Builds the application for production."
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Deployment Best Practices</h2>
        <ul>
          <li>Use environment variables for configuration</li>
          <li>Implement proper error handling</li>
          <li>Set up monitoring and logging</li>
          <li>Use HTTPS for security</li>
          <li>Implement caching strategies</li>
        </ul>
      </div>

      <div className="section">
        <h2>Try It Yourself</h2>
        <p>
          Deploy your React app to:
        </p>
        <ul>
          <li>A static hosting service</li>
          <li>A cloud platform</li>
          <li>Your own server</li>
        </ul>
      </div>

      <div className="section">
        <h2>Next Steps</h2>
        <p>
          Congratulations! You've completed the React tutorial. Continue learning by 
          exploring the <Link to="/">Home</Link> page for more resources.
        </p>
      </div>
    </div>
  );
}

export default Deployment; 