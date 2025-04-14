import React from 'react';
import { Link } from 'react-router-dom';
import IDE from '../components/IDE';
import CodeBlock from '../components/CodeBlock';
import CodeExplanation from '../components/CodeExplanation';

function Performance() {
  const memoExample = `// MemoExample.jsx
function ExpensiveList({ items, onItemClick }) {
  console.log('ExpensiveList rendered');
  
  return (
    <div className="list">
      {items.map(item => (
        <ExpensiveItem
          key={item.id}
          item={item}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
}

// Memoize the component to prevent unnecessary re-renders
const MemoizedList = React.memo(ExpensiveList);

// Expensive item component
function ExpensiveItem({ item, onClick }) {
  console.log('ExpensiveItem rendered:', item.id);
  
  // Simulate expensive calculation
  const expensiveValue = React.useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += Math.random();
    }
    return result;
  }, []);

  return (
    <div
      className="item"
      onClick={() => onClick(item.id)}
    >
      <h3>{item.title}</h3>
      <p>Expensive Value: {expensiveValue.toFixed(2)}</p>
    </div>
  );
}

// Parent component
function App() {
  const [items, setItems] = React.useState([
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' }
  ]);
  
  const [count, setCount] = React.useState(0);

  // Memoize callback to prevent unnecessary re-renders
  const handleItemClick = React.useCallback((id) => {
    console.log('Item clicked:', id);
  }, []);

  return (
    <div>
      <h1>Performance Example</h1>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      <MemoizedList
        items={items}
        onItemClick={handleItemClick}
      />
    </div>
  );
}`;

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Performance in React</h1>
        <p className="page-description">
          Learn how to optimize your React applications for better performance and user experience.
        </p>
      </header>

      <section className="section">
        <h2>React.memo</h2>
        <p>
          Use React.memo to prevent unnecessary re-renders of function components:
        </p>

        <CodeBlock
          fileName="MemoComponent.jsx"
          code={`const MyComponent = React.memo(function MyComponent(props) {
  // Your component logic
  return (
    <div>
      <h2>{props.title}</h2>
      <ExpensiveChart data={props.data} />
    </div>
  );
});

// Only re-renders if title or data change
<MyComponent title="Chart" data={chartData} />`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "React.memo(function MyComponent(props))",
              explanation: "Wraps component with memo to skip re-rendering if props are unchanged"
            },
            {
              code: "<MyComponent title='Chart' data={chartData} />",
              explanation: "Component only re-renders when title or data props change"
            }
          ]}
        />
      </section>

      <section className="section">
        <h2>useMemo and useCallback</h2>
        <p>
          Memoize expensive calculations and callbacks to optimize performance:
        </p>

        <CodeBlock
          fileName="Memoization.jsx"
          code={`function SearchResults({ query, data }) {
  // Memoize expensive calculation
  const filteredData = React.useMemo(() => {
    return data.filter(item =>
      item.text.toLowerCase().includes(query.toLowerCase())
    );
  }, [data, query]);

  // Memoize callback
  const handleClick = React.useCallback((id) => {
    console.log('Item clicked:', id);
  }, []); // Empty deps = never changes

  return (
    <ul>
      {filteredData.map(item => (
        <SearchResult
          key={item.id}
          item={item}
          onClick={handleClick}
        />
      ))}
    </ul>
  );
}`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "React.useMemo(() => { ... }, [data, query])",
              explanation: "Memoizes filtered data, only recalculating when data or query change"
            },
            {
              code: "React.useCallback((id) => { ... }, [])",
              explanation: "Memoizes callback to prevent child components from re-rendering"
            }
          ]}
        />
      </section>

      <section className="section">
        <h2>Try It Yourself</h2>
        <p>
          Implement performance optimizations in a list component:
        </p>
        <ul>
          <li>Use React.memo to prevent unnecessary re-renders</li>
          <li>Implement useMemo for expensive calculations</li>
          <li>Use useCallback for event handlers</li>
          <li>Monitor render counts in the console</li>
        </ul>

        <IDE
          fileName="MemoExample.jsx"
          initialCode={memoExample}
          height="600px"
          instructions="Create a performant list component that demonstrates the use of React.memo, useMemo, and useCallback to prevent unnecessary re-renders."
        />
      </section>

      <section className="section">
        <h2>Code Splitting</h2>
        <p>
          Split your code into smaller chunks to improve initial load time:
        </p>

        <CodeBlock
          fileName="Routes.jsx"
          code={`import React, { Suspense, lazy } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "const Dashboard = lazy(() => import('./Dashboard'))",
              explanation: "Dynamically imports component when needed"
            },
            {
              code: "<Suspense fallback={<Loading />}>",
              explanation: "Shows loading component while chunk is being loaded"
            }
          ]}
        />
      </section>

      <section className="section">
        <h2>Performance Best Practices</h2>
        <ul>
          <li>Use production builds for deployment</li>
          <li>Implement virtualization for long lists</li>
          <li>Avoid unnecessary re-renders</li>
          <li>Use React DevTools Profiler to identify performance issues</li>
          <li>Optimize images and other assets</li>
          <li>Implement proper error boundaries</li>
        </ul>
      </section>

      <section className="section">
        <h2>Next Steps</h2>
        <p>
          Learn how to write tests for your React components in the <Link to="/testing">Testing</Link> section.
        </p>
      </section>
    </div>
  );
}

export default Performance; 