import React from 'react';
import { Link } from 'react-router-dom';
import IDE from '../components/IDE';
import CodeBlock from '../components/CodeBlock';
import CodeExplanation from '../components/CodeExplanation';

function Events() {
  const eventsExample = `function EventsDemo() {
  const [inputValue, setInputValue] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  
  // Event handler for input changes
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  
  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    alert(\`Form submitted with value: \${inputValue}\`);
  };
  
  // Event handler for mouse events
  const handleMouseEnter = (event) => {
    event.target.style.backgroundColor = '#e2e8f0';
  };
  
  const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = 'transparent';
  };
  
  return (
    <form onSubmit={handleSubmit} className="events-demo">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ padding: '20px', borderRadius: '8px' }}
      >
        <label>
          Enter text:
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Type something..."
          />
        </label>
        
        <button type="submit">
          Submit
        </button>
      </div>
      
      {submitted && (
        <p>You submitted: {inputValue}</p>
      )}
    </form>
  );
}`;

  return (
    <div className="content">
      <h1>Events in React</h1>
      <p className="intro">
        React events are named using camelCase and passed as props to elements. They provide
        a consistent way to handle user interactions across different browsers.
      </p>

      <div className="section">
        <h2>Handling Events</h2>
        <p>
          Event handlers in React are similar to handling events in HTML, but with some
          syntactical differences:
        </p>

        <CodeBlock
          fileName="Button.jsx"
          code={`function Button() {
  const handleClick = (event) => {
    event.preventDefault();
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "onClick={handleClick}",
              explanation: "Event handler is passed as a prop using camelCase naming"
            },
            {
              code: "event.preventDefault()",
              explanation: "Prevents the default browser behavior for the event"
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Try It Yourself</h2>
        <p>
          Create a form component that handles various events:
        </p>
        <ul>
          <li>Form submission (onSubmit)</li>
          <li>Input changes (onChange)</li>
          <li>Mouse events (onMouseEnter, onMouseLeave)</li>
          <li>Prevent default form behavior</li>
        </ul>

        <IDE
          fileName="EventsDemo.jsx"
          initialCode={eventsExample}
          height="500px"
          instructions="Create a form component that demonstrates different types of event handling in React, including form events, input changes, and mouse events."
        />
      </div>

      <div className="section">
        <h2>Common Events</h2>
        <p>
          React supports all standard DOM events. Here are some commonly used ones:
        </p>

        <CodeBlock
          fileName="Events.jsx"
          code={`function EventExamples() {
  return (
    <div>
      {/* Click events */}
      <button onClick={(e) => console.log('Clicked!')}>
        Click
      </button>

      {/* Form events */}
      <input
        onChange={(e) => console.log(e.target.value)}
        onFocus={() => console.log('Focused!')}
        onBlur={() => console.log('Blurred!')}
      />

      {/* Keyboard events */}
      <input
        onKeyDown={(e) => console.log(\`Key: \${e.key}\`)}
        onKeyPress={(e) => console.log(\`Char: \${e.key}\`)}
      />
    </div>
  );
}`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "e.target.value",
              explanation: "Accesses the current value of the input element"
            },
            {
              code: "e.key",
              explanation: "Gets the key that was pressed in keyboard events"
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Event Best Practices</h2>
        <ul>
          <li>Use descriptive handler names (handleClick, handleSubmit)</li>
          <li>Avoid inline arrow functions for performance</li>
          <li>Remember to clean up event listeners in useEffect</li>
          <li>Use event delegation when handling many similar events</li>
          <li>Always handle potential errors in event handlers</li>
        </ul>
      </div>

      <div className="section">
        <h2>Next Steps</h2>
        <p>
          Learn about managing side effects with <Link to="/effects">Effects</Link> in React.
        </p>
      </div>
    </div>
  );
}

export default Events; 