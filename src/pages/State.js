import React from 'react';
import { Link } from 'react-router-dom';
import IDE from '../components/IDE';
import CodeBlock from '../components/CodeBlock';
import CodeExplanation from '../components/CodeExplanation';

function State() {
  const counterExample = `function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`;

  return (
    <div className="content">
      <h1>State in React</h1>
      <p className="intro">
        State allows React components to change their output over time in response
        to user actions, network responses, and anything else.
      </p>

      <div className="section">
        <h2>Using useState Hook</h2>
        <p>
          The useState hook is the primary way to manage state in React functional
          components. It returns an array with two elements: the current state value
          and a function to update it.
        </p>

        <CodeBlock
          fileName="Counter.jsx"
          code={`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "const [count, setCount] = useState(0)",
              explanation:
                "Declares a state variable 'count' initialized to 0, and its setter function 'setCount'",
            },
            {
              code: "setCount(count + 1)",
              explanation:
                "Updates the state by calling setCount with the new value",
            },
          ]}
        />
      </div>

      <div className="section">
        <h2>Try It Yourself</h2>
        <p>
          Create a counter component that:
        </p>
        <ul>
          <li>Displays the current count</li>
          <li>Has buttons to increment and decrement</li>
          <li>Uses the useState hook to manage state</li>
        </ul>

        <IDE
          initialCode={counterExample}
          fileName="Counter.jsx"
          height="300px"
          instructions="Implement a counter component with increment and decrement functionality using the useState hook."
        />
      </div>

      <div className="section">
        <h2>State Updates</h2>
        <p>
          State updates may be asynchronous, and React batches multiple setState
          calls for performance. When you need to update state based on the
          previous state, use the functional update form:
        </p>

        <CodeBlock
          fileName="Counter.jsx"
          code={`function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  return (
    <button onClick={increment}>
      Count: {count}
    </button>
  );
}`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "setCount(prevCount => prevCount + 1)",
              explanation:
                "Uses the functional update form to ensure we're working with the latest state value",
            },
          ]}
        />
      </div>

      <div className="section">
        <h2>Next Steps</h2>
        <p>
          Learn about handling <Link to="/events">Events</Link> in React to make
          your components interactive.
        </p>
      </div>
    </div>
  );
}

export default State; 