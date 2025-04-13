import React, { useState, useEffect, useRef, useCallback, useMemo, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

// 1. JSX Example
function JSXExample() {
  const name = "Shriem Sharma";
  const element = <h1>Hello, {name}!</h1>;
  return element;
}

// 2. Functional Components
const FunctionalComponent = () => {
  return <div>This is a functional component</div>;
};

// 3. Props
const PropsExample = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

// 4. State (useState)
const StateExample = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// 5. Event Handling
const EventHandlingExample = () => {
  const handleClick = (event) => {
    console.log('Button clicked!', event);
  };

  return <button onClick={handleClick}>Click me</button>;
};

// 6. Conditional Rendering
const ConditionalRenderingExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

// 7. Lists and Keys
const ListExample = () => {
  const items = ['Apple', 'Banana', 'Cherry'];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

// 8. Basic Styling
const StylingExample = () => {
  const inlineStyle = {
    color: 'blue',
    fontSize: '20px'
  };

  return (
    <div>
      <p style={inlineStyle}>Inline styled text</p>
      <p className="styled-text">CSS styled text</p>
    </div>
  );
};

// 9. useEffect
const EffectExample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setData('Fetched data');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{data || 'Loading...'}</div>;
};

// 10. useRef
const RefExample = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

// 11. useContext
const ThemeContext = React.createContext('light');

const ContextExample = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`theme-${theme}`}>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        <ThemeDisplay />
      </div>
    </ThemeContext.Provider>
  );
};

const ThemeDisplay = () => {
  const theme = React.useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
};

// 12. Lifting State Up
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChildComponent count={count} onIncrement={() => setCount(count + 1)} />
    </div>
  );
};

const ChildComponent = ({ count, onIncrement }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

// 13. Fetching Data
const DataFetchingExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>Data: {JSON.stringify(data)}</div>;
};

// 14. Reusable Components
const Button = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

// 15. Component Composition
const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

const CardHeader = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

const CardBody = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

// 16. Custom Hooks
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};

const CustomHookExample = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

// 17. Code Splitting
const LazyComponent = lazy(() => import('./LazyComponent'));

// 18. useMemo and useCallback
const PerformanceExample = () => {
  const [count, setCount] = useState(0);
  
  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    return count * 2;
  }, [count]);
  
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double: {expensiveCalculation}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

// Update the CodeExample component
const CodeExample = ({ code, language = 'javascript' }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-example-container">
      <div className="code-example-header">
        <span className="code-language">{language}</span>
        <button 
          className="copy-button" 
          onClick={copyToClipboard}
          title={copied ? "Copied!" : "Copy to clipboard"}
        >
          {copied ? "✓" : "📋"}
        </button>
      </div>
      <pre className="code-example">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// Add these new components at the top of the file
const TableOfContents = () => {
  const sections = [
    { id: 'jsx', title: 'JSX Example' },
    { id: 'functional', title: 'Functional Components' },
    { id: 'props', title: 'Props' },
    { id: 'state', title: 'State Management' },
    { id: 'events', title: 'Event Handling' },
    { id: 'conditional', title: 'Conditional Rendering' },
    { id: 'lists', title: 'Lists and Keys' },
    { id: 'styling', title: 'Basic Styling' },
    { id: 'effect', title: 'useEffect' },
    { id: 'ref', title: 'useRef' },
    { id: 'context', title: 'Context API' },
    { id: 'state-lifting', title: 'Lifting State Up' },
    { id: 'data-fetching', title: 'Data Fetching' },
    { id: 'reusable', title: 'Reusable Components' },
    { id: 'composition', title: 'Component Composition' },
    { id: 'hooks', title: 'Custom Hooks' },
    { id: 'performance', title: 'Performance Optimization' }
  ];

  return (
    <div className="table-of-contents">
      <h3>Table of Contents</h3>
      <ul>
        {sections.map(section => (
          <li key={section.id}>
            <a href={`#${section.id}`}>{section.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="back-to-top" onClick={scrollToTop}>
      ↑
    </button>
  );
};

// Add ThemeToggle component
const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button 
      className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDarkMode ? '🌞' : '🌙'}
    </button>
  );
};

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'Alice',
  age: 30
};

// Main App Component
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <TableOfContents />
        <BackToTop />
        
        <header>
          <h1>React Concepts Tutorial</h1>
          <p className="subtitle">A comprehensive guide to React fundamentals</p>
        </header>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <h1>React Concepts Tutorial</h1>
              
              <section id="jsx" className="tutorial-section">
                <h2>1. JSX Example</h2>
                <p>JSX allows you to write HTML-like code in JavaScript:</p>
                <CodeExample code={`const name = "React Learner";
const element = <h1>Hello, {name}!</h1>;`} />
                <JSXExample />
              </section>

              <section id="functional" className="tutorial-section">
                <h2>2. Functional Components</h2>
                <p>Modern way to write React components using arrow functions:</p>
                <FunctionalComponent />
              </section>

              <section id="props" className="tutorial-section">
                <h2>3. Props</h2>
                <p>Passing data from parent to child components:</p>
                <PropsExample name="John Doe" age={25} />
              </section>

              <section id="state" className="tutorial-section">
                <h2>4. State Management (useState)</h2>
                <p>Managing component's internal state:</p>
                <CodeExample code={`const [count, setCount] = useState(0);
return (
  <div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);`} />
                <StateExample />
              </section>

              <section id="events" className="tutorial-section">
                <h2>5. Event Handling</h2>
                <p>Handling user interactions:</p>
                <EventHandlingExample />
              </section>

              <section id="conditional" className="tutorial-section">
                <h2>6. Conditional Rendering</h2>
                <p>Rendering different content based on conditions:</p>
                <ConditionalRenderingExample />
              </section>

              <section id="lists" className="tutorial-section">
                <h2>7. Lists and Keys</h2>
                <p>Rendering lists of elements with unique keys:</p>
                <ListExample />
              </section>

              <section id="styling" className="tutorial-section">
                <h2>8. Basic Styling</h2>
                <p>Styling components using inline styles and CSS classes:</p>
                <StylingExample />
              </section>

              <section id="effect" className="tutorial-section">
                <h2>9. useEffect Hook</h2>
                <p>Handling side effects in components:</p>
                <EffectExample />
              </section>

              <section id="ref" className="tutorial-section">
                <h2>10. useRef Hook</h2>
                <p>Accessing DOM elements and storing mutable values:</p>
                <RefExample />
              </section>

              <section id="context" className="tutorial-section">
                <h2>11. Context API</h2>
                <p>Sharing data between components without prop drilling:</p>
                <ContextExample />
              </section>

              <section id="state-lifting" className="tutorial-section">
                <h2>12. Lifting State Up</h2>
                <p>Sharing state between parent and child components:</p>
                <ParentComponent />
              </section>

              <section id="data-fetching" className="tutorial-section">
                <h2>13. Data Fetching</h2>
                <p>Fetching data from an API with loading and error states:</p>
                <DataFetchingExample />
              </section>

              <section id="reusable" className="tutorial-section">
                <h2>14. Reusable Components</h2>
                <p>Creating reusable button components with variants:</p>
                <div className="button-examples">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="danger">Danger Button</Button>
                </div>
              </section>

              <section id="composition" className="tutorial-section">
                <h2>15. Component Composition</h2>
                <p>Combining components to create complex UIs:</p>
                <Card>
                  <CardHeader>Card Title</CardHeader>
                  <CardBody>This is a card body with composed components</CardBody>
                </Card>
              </section>

              <section id="hooks" className="tutorial-section">
                <h2>16. Custom Hooks</h2>
                <p>Creating reusable logic with custom hooks:</p>
                <CustomHookExample />
              </section>

              <section id="performance" className="tutorial-section">
                <h2>17. Performance Optimization</h2>
                <p>Using useMemo and useCallback for performance optimization:</p>
                <PerformanceExample />
              </section>
            </>
          } />
          <Route path="/about" element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyComponent />
            </Suspense>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
