import React from 'react';
import { Link } from 'react-router-dom';
import IDE from '../components/IDE';
import CodeBlock from '../components/CodeBlock';
import CodeExplanation from '../components/CodeExplanation';
import CodeEditor from '../components/CodeEditor';
import Quiz from '../components/Quiz';

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

  const complexStateExample = `function TodoList() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}`;

  const quizQuestions = [
    {
      question: "What is React state used for?",
      answers: [
        "Storing component data that can change over time",
        "Passing data between components",
        "Styling components",
        "Making API calls"
      ],
      correctAnswer: "Storing component data that can change over time"
    },
    {
      question: "Which hook is used to manage state in functional components?",
      answers: [
        "useEffect",
        "useState",
        "useContext",
        "useReducer"
      ],
      correctAnswer: "useState"
    },
    {
      question: "What is the correct way to update state?",
      answers: [
        "Directly modify the state variable",
        "Use the setState function from useState",
        "Use this.state = newValue",
        "Reassign the state variable"
      ],
      correctAnswer: "Use the setState function from useState"
    },
    {
      question: "What happens when state changes?",
      answers: [
        "Nothing happens automatically",
        "The component re-renders",
        "The application crashes",
        "The state resets to initial value"
      ],
      correctAnswer: "The component re-renders"
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">State in React</h1>
        <p className="page-description">
          Learn how to manage component state in React using hooks and understand state updates.
        </p>
      </header>

      <section className="section">
        <h2>Basic State Usage</h2>
        <p>
          Here's a simple counter component using state. Try running it and see how it works:
        </p>
        <CodeEditor
          initialCode={counterExample}
          language="jsx"
        />
      </section>

      <section className="section">
        <h2>Complex State Management</h2>
        <p>
          This example shows how to manage more complex state with arrays and multiple state variables:
        </p>
        <CodeEditor
          initialCode={complexStateExample}
          language="jsx"
        />
      </section>

      <section className="section">
        <h2>Test Your Knowledge</h2>
        <p>
          Take this quiz to check your understanding of React state:
        </p>
        <Quiz questions={quizQuestions} />
      </section>

      <section className="section">
        <h2>Key Takeaways</h2>
        <ul className="takeaways-list">
          <li>State is used for data that changes over time</li>
          <li>Always use setState to update state values</li>
          <li>State updates may be asynchronous</li>
          <li>Each component can have its own state</li>
        </ul>
      </section>

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