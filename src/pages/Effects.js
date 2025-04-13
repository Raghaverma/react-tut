import React from 'react';
import { Link } from 'react-router-dom';
import IDE from '../components/IDE';
import CodeBlock from '../components/CodeBlock';
import CodeExplanation from '../components/CodeExplanation';

function Effects() {
  const effectsExample = `function DataFetcher() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [count, setCount] = React.useState(0);

  // Effect for data fetching
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulating API call
        const response = await new Promise(resolve => 
          setTimeout(() => resolve({ data: 'Hello from API!' }), 1500)
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch data');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cancel any pending requests here
      console.log('Cleanup: Component unmounted');
    };
  }, []); // Empty dependency array = run once on mount

  // Effect with dependencies
  React.useEffect(() => {
    document.title = \`Clicked \${count} times\`;
    
    // Cleanup is optional
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Run when count changes

  return (
    <div className="data-fetcher">
      <div className="status">
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {data && <p className="data">{data}</p>}
      </div>

      <div className="counter">
        <p>Count: {count}</p>
        <button onClick={() => setCount(c => c + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
}`;

  return (
    <div className="content">
      <h1>Effects in React</h1>
      <p className="intro">
        Effects let you perform side effects in function components. Side effects include
        data fetching, subscriptions, manual DOM manipulations, and other operations that
        affect things outside the component.
      </p>

      <div className="section">
        <h2>Using useEffect</h2>
        <p>
          The useEffect Hook lets you tell React that your component needs to do something
          after render. React will remember the function you passed and call it later after
          performing the DOM updates.
        </p>

        <CodeBlock
          fileName="Timer.jsx"
          code={`function Timer() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(timer);
  }, []); // Empty dependency array

  return <h1>Count: {count}</h1>;
}`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "React.useEffect(() => { ... }, [])",
              explanation: "Effect runs after mount and cleanup runs before unmount"
            },
            {
              code: "return () => clearInterval(timer)",
              explanation: "Cleanup function prevents memory leaks by clearing the interval"
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Try It Yourself</h2>
        <p>
          Create a component that demonstrates different uses of effects:
        </p>
        <ul>
          <li>Data fetching with loading and error states</li>
          <li>Effects with cleanup functions</li>
          <li>Effects with dependencies</li>
          <li>Document title updates</li>
        </ul>

        <IDE
          fileName="DataFetcher.jsx"
          initialCode={effectsExample}
          height="600px"
          instructions="Create a component that fetches data and updates the document title, demonstrating different aspects of useEffect including cleanup and dependencies."
        />
      </div>

      <div className="section">
        <h2>Effect Dependencies</h2>
        <p>
          The dependency array controls when the effect runs:
        </p>

        <CodeBlock
          fileName="Dependencies.jsx"
          code={`function SearchResults({ query }) {
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    // Runs on mount AND when query changes
    const search = async () => {
      const data = await fetchResults(query);
      setResults(data);
    };
    search();
  }, [query]); // Dependency array with query

  return (
    <ul>
      {results.map(result => (
        <li key={result.id}>{result.title}</li>
      ))}
    </ul>
  );
}`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "}, [query])",
              explanation: "Effect runs when query prop changes"
            },
            {
              code: "const search = async () => { ... }",
              explanation: "Async function defined inside effect to handle data fetching"
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Effect Best Practices</h2>
        <ul>
          <li>Always include cleanup functions when needed</li>
          <li>Specify all required dependencies</li>
          <li>Keep effects focused on a single concern</li>
          <li>Avoid infinite effect loops</li>
          <li>Consider using useCallback for effect dependencies</li>
        </ul>
      </div>

      <div className="section">
        <h2>Next Steps</h2>
        <p>
          Learn about sharing data between components with <Link to="/context">Context</Link>.
        </p>
      </div>
    </div>
  );
}

export default Effects; 