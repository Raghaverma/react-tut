import React from 'react';
import { Link } from 'react-router-dom';
import IDE from '../components/IDE';
import CodeBlock from '../components/CodeBlock';
import CodeExplanation from '../components/CodeExplanation';

function JSX() {
  const jsxExample = `function Greeting() {
  const name = "React";
  const isLoggedIn = true;
  
  return (
    <div className="greeting">
      {/* JSX Comments look like this */}
      <h1>
        {isLoggedIn ? (
          <span>Welcome back, {name}!</span>
        ) : (
          <span>Welcome, Guest!</span>
        )}
      </h1>
      
      <ul style={{ color: 'blue', fontSize: '16px' }}>
        <li>JSX lets you write HTML-like code in JavaScript</li>
        <li>Expressions can be embedded using {}</li>
        <li>className is used instead of class</li>
      </ul>
    </div>
  );
}`;

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">JSX in React</h1>
        <p className="page-description">
          Learn how to write JSX, the syntax extension for JavaScript that makes React components easy to write.
        </p>
      </header>

      <section className="section">
        <h2>What is JSX?</h2>
        <p>
          JSX stands for JavaScript XML. It allows you to write HTML structures in the same file
          as your JavaScript code. Under the hood, JSX is converted to regular JavaScript
          function calls.
        </p>

        <CodeBlock
          fileName="Example.jsx"
          code={`// JSX syntax
const element = <h1>Hello, {name}</h1>;

// Compiles to:
const element = React.createElement('h1', null, 'Hello, ', name);`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "<h1>Hello, {name}</h1>",
              explanation: "JSX syntax that looks like HTML but can include JavaScript expressions in curly braces"
            },
            {
              code: "React.createElement()",
              explanation: "The actual JavaScript function that JSX compiles to"
            }
          ]}
        />
      </section>

      <section className="section">
        <h2>JSX Rules</h2>
        <ul>
          <li>Must have a single root element (or fragment)</li>
          <li>All tags must be closed</li>
          <li>Use className instead of class</li>
          <li>JavaScript expressions go in curly braces {}</li>
          <li>Style attributes take an object with camelCase properties</li>
        </ul>
      </section>

      <section className="section">
        <h2>Try It Yourself</h2>
        <p>
          Practice writing JSX by creating a Greeting component that:
        </p>
        <ul>
          <li>Uses conditional rendering with ternary operators</li>
          <li>Includes multiple elements wrapped in a single parent</li>
          <li>Uses className and style attributes</li>
          <li>Embeds JavaScript expressions</li>
        </ul>

        <IDE
          fileName="Greeting.jsx"
          initialCode={jsxExample}
          height="400px"
          instructions="Create a Greeting component that demonstrates JSX features including conditional rendering, styling, and expression embedding."
        />
      </section>

      <section className="section">
        <h2>JSX Expressions</h2>
        <p>
          You can embed any valid JavaScript expression inside JSX using curly braces:
        </p>

        <CodeBlock
          fileName="Expressions.jsx"
          code={`function NumberList() {
  const numbers = [1, 2, 3, 4, 5];
  
  return (
    <ul>
      {numbers.map(number => (
        <li key={number}>{number * 2}</li>
      ))}
    </ul>
  );
}`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "numbers.map(number => ...)",
              explanation: "You can use array methods and other JavaScript expressions inside JSX"
            },
            {
              code: "{number * 2}",
              explanation: "Mathematical operations and other expressions work inside curly braces"
            }
          ]}
        />
      </section>

      <section className="section">
        <h2>Next Steps</h2>
        <p>
          Now that you understand JSX, learn about <Link to="/components">Components</Link> to
          start building reusable UI elements.
        </p>
      </section>
    </div>
  );
}

export default JSX; 