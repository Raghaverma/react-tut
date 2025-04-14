import React from 'react';
import { Link } from 'react-router-dom';
import IDE from '../components/IDE';
import CodeBlock from '../components/CodeBlock';
import CodeExplanation from '../components/CodeExplanation';

function Hooks() {
  const customHookExample = `// useLocalStorage.js
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Example usage
function App() {
  const [name, setName] = useLocalStorage('name', 'John');
  const [age, setAge] = useLocalStorage('age', 25);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter name"
      />
      <input
        type="number"
        value={age}
        onChange={e => setAge(Number(e.target.value))}
        placeholder="Enter age"
      />
      <div>
        Stored in localStorage:
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}`;

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Hooks in React</h1>
        <p className="page-description">
          Learn about React Hooks and how they enable state and lifecycle features in functional components.
        </p>
      </header>

      <section className="section">
        <h2>Built-in Hooks</h2>
        <p>
          React provides several built-in hooks for managing state, side effects, and more:
        </p>

        <CodeBlock
          fileName="Hooks.jsx"
          code={`function ExampleComponent() {
  // State Hook
  const [count, setCount] = React.useState(0);
  
  // Effect Hook
  React.useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  // Ref Hook
  const inputRef = React.useRef(null);
  
  // Callback Hook
  const handleClick = React.useCallback(() => {
    setCount(c => c + 1);
  }, []);
  
  // Memo Hook
  const expensiveValue = React.useMemo(() => {
    return count * count;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Squared: {expensiveValue}</p>
      <input ref={inputRef} />
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "const [count, setCount] = React.useState(0)",
              explanation: "Manages state in a function component"
            },
            {
              code: "React.useEffect(() => { ... }, [count])",
              explanation: "Handles side effects when count changes"
            },
            {
              code: "const inputRef = React.useRef(null)",
              explanation: "Creates a mutable reference that persists across renders"
            },
            {
              code: "React.useCallback(() => { ... }, [])",
              explanation: "Memoizes a callback function to prevent unnecessary re-renders"
            },
            {
              code: "React.useMemo(() => { ... }, [count])",
              explanation: "Memoizes a computed value for performance optimization"
            }
          ]}
        />
      </section>

      <section className="section">
        <h2>Custom Hooks</h2>
        <p>
          Build your own hooks to reuse stateful logic between components:
        </p>

        <CodeBlock
          fileName="useWindowSize.jsx"
          code={`function useWindowSize() {
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  React.useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "function useWindowSize()",
              explanation: "Custom hook name must start with 'use'"
            },
            {
              code: "window.addEventListener('resize', handleResize)",
              explanation: "Sets up an event listener in the effect"
            },
            {
              code: "return () => window.removeEventListener('resize', handleResize)",
              explanation: "Cleans up the event listener when component unmounts"
            }
          ]}
        />
      </section>

      <section className="section">
        <h2>Try It Yourself</h2>
        <p>
          Create a custom hook that manages localStorage:
        </p>
        <ul>
          <li>Implement useLocalStorage hook</li>
          <li>Handle reading and writing to localStorage</li>
          <li>Support both direct values and updater functions</li>
          <li>Handle errors gracefully</li>
        </ul>

        <IDE
          fileName="useLocalStorage.js"
          initialCode={customHookExample}
          height="600px"
          instructions="Create a custom hook that synchronizes state with localStorage, allowing components to persist their state across page reloads."
        />
      </section>

      <section className="section">
        <h2>Hook Rules</h2>
        <ul>
          <li>Only call hooks at the top level of your function</li>
          <li>Only call hooks from React function components or custom hooks</li>
          <li>Custom hook names must start with "use"</li>
          <li>Hooks can call other hooks</li>
          <li>Use the exhaustive-deps ESLint rule</li>
        </ul>
      </section>

      <section className="section">
        <h2>Next Steps</h2>
        <p>
          Learn how to optimize your React applications in the <Link to="/performance">Performance</Link> section.
        </p>
      </section>
    </div>
  );
}

export default Hooks; 