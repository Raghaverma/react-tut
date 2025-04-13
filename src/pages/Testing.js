import React from 'react';
import { Link } from 'react-router-dom';
import CodeExplanation from '../components/CodeExplanation';
import CodeBlock from '../components/CodeBlock';

function Testing() {
  return (
    <div className="content">
      <h1>Testing</h1>
      <p className="intro">
        Testing is crucial for building reliable React applications. React provides 
        tools and libraries to help you write effective tests for your components.
      </p>

      <div className="section">
        <h2>Component Testing</h2>
        <p>
          Test React components using React Testing Library:
        </p>

        <CodeBlock
          fileName="Button.test.jsx"
          code={`import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with correct text', () => {
  render(<Button>Click me</Button>);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick handler when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "render(<Button>Click me</Button>)",
              explanation: "Renders the Button component in a test environment."
            },
            {
              code: "screen.getByText(/click me/i)",
              explanation: "Finds the button element by its text content."
            },
            {
              code: "fireEvent.click(...)",
              explanation: "Simulates a click event on the button."
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Hook Testing</h2>
        <p>
          Test custom hooks using React Hooks Testing Library:
        </p>

        <CodeBlock
          fileName="useCounter.test.js"
          code={`import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

test('increments counter', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

test('resets counter', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
    result.current.reset();
  });

  expect(result.current.count).toBe(0);
});`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "renderHook(() => useCounter())",
              explanation: "Renders the hook in a test environment."
            },
            {
              code: "act(() => { ... })",
              explanation: "Wraps state updates to ensure they are processed."
            },
            {
              code: "result.current.count",
              explanation: "Accesses the current value returned by the hook."
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Async Testing</h2>
        <p>
          Test asynchronous operations in your components:
        </p>

        <CodeBlock
          fileName="DataFetcher.test.jsx"
          code={`import { render, screen, waitFor } from '@testing-library/react';
import DataFetcher from './DataFetcher';

test('loads and displays data', async () => {
  const mockData = { name: 'John Doe' };
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: () => Promise.resolve(mockData)
  });

  render(<DataFetcher userId="123" />);
  
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "jest.spyOn(global, 'fetch')",
              explanation: "Mocks the fetch API to return test data."
            },
            {
              code: "waitFor(() => { ... })",
              explanation: "Waits for the async operation to complete."
            },
            {
              code: "expect(...).toBeInTheDocument()",
              explanation: "Checks if the element is rendered in the DOM."
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Testing Best Practices</h2>
        <ul>
          <li>Test component behavior, not implementation</li>
          <li>Use meaningful test descriptions</li>
          <li>Mock external dependencies</li>
          <li>Test edge cases and error states</li>
          <li>Keep tests focused and maintainable</li>
        </ul>
      </div>

      <div className="section">
        <h2>Try It Yourself</h2>
        <p>
          Write tests for a component that:
        </p>
        <ul>
          <li>Handles user input</li>
          <li>Makes API calls</li>
          <li>Manages state with hooks</li>
        </ul>
      </div>

      <div className="section">
        <h2>Next Steps</h2>
        <p>
          Learn about React 
          <Link to="/deployment"> Deployment</Link> to share your app with the world.
        </p>
      </div>
    </div>
  );
}

export default Testing; 