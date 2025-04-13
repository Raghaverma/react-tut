import React from 'react';
import { Link } from 'react-router-dom';
import IDE from '../components/IDE';
import CodeBlock from '../components/CodeBlock';
import CodeExplanation from '../components/CodeExplanation';

function Components() {
  const componentExample = `// Button.jsx
function Button({ label, onClick, color = 'blue' }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      {label}
    </button>
  );
}

// App.jsx
function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>My App</h1>
      <Button 
        label="Click Me" 
        onClick={handleClick} 
        color="#087ea4" 
      />
      <Button 
        label="Cancel" 
        onClick={() => alert('Cancelled')} 
        color="#ef4444" 
      />
    </div>
  );
}`;

  return (
    <div className="content">
      <h1>Components in React</h1>
      <p className="intro">
        Components are the building blocks of React applications. They let you split the UI
        into independent, reusable pieces, and think about each piece in isolation.
      </p>

      <div className="section">
        <h2>Creating Components</h2>
        <p>
          React components are JavaScript functions that return JSX. They can accept inputs
          called props and return React elements describing what should appear on the screen.
        </p>

        <CodeBlock
          fileName="Button.jsx"
          code={`function Button({ label, onClick }) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "function Button({ label, onClick })",
              explanation: "Defines a function component that accepts props using destructuring"
            },
            {
              code: "return <button onClick={onClick}>",
              explanation: "Returns JSX that describes what the component should render"
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Try It Yourself</h2>
        <p>
          Create a reusable Button component and use it in an App component:
        </p>
        <ul>
          <li>Accept props for label, onClick handler, and color</li>
          <li>Style the button using inline styles</li>
          <li>Use the Button component multiple times with different props</li>
        </ul>

        <IDE
          fileName="Components.jsx"
          initialCode={componentExample}
          height="500px"
          instructions="Create a reusable Button component and demonstrate its usage in an App component with different props and styling."
        />
      </div>

      <div className="section">
        <h2>Component Composition</h2>
        <p>
          Components can refer to other components in their output, allowing you to compose
          complex UIs from simple building blocks:
        </p>

        <CodeBlock
          fileName="Card.jsx"
          code={`function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Card title="Welcome">
      <p>This is a card component.</p>
      <Button label="Learn More" />
    </Card>
  );
}`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "children",
              explanation: "A special prop that lets you pass elements as children to a component"
            },
            {
              code: "<Card title=\"Welcome\">",
              explanation: "Uses the Card component and passes content as children"
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Next Steps</h2>
        <p>
          Learn how to pass data between components using <Link to="/props">Props</Link>.
        </p>
      </div>
    </div>
  );
}

export default Components; 