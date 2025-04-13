import React from 'react';
import { Link } from 'react-router-dom';
import CodeExplanation from '../components/CodeExplanation';
import CodeBlock from '../components/CodeBlock';
import IDE from '../components/IDE';

function Refs() {
  const refsExample = `import { useRef, useState } from 'react';

function InputFocus() {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={handleClick}>Focus Input</button>
      <p>Current value: {value}</p>
    </div>
  );
}`;

  return (
    <div className="content">
      <h1>Refs</h1>
      <p className="intro">
        Refs provide a way to access DOM nodes or React elements created in the render method. 
        They are useful when you need to:
      </p>
      <ul>
        <li>Manage focus, text selection, or media playback</li>
        <li>Trigger imperative animations</li>
        <li>Integrate with third-party DOM libraries</li>
      </ul>

      <div className="section">
        <h2>Creating Refs</h2>
        <p>
          Create a ref using the useRef hook:
        </p>

        <CodeBlock
          fileName="InputFocus.jsx"
          code={`import { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "useRef(null)",
              explanation: "Creates a ref object initialized with null."
            },
            {
              code: "ref={inputRef}",
              explanation: "Attaches the ref to the input element."
            },
            {
              code: "inputRef.current.focus()",
              explanation: "Accesses the DOM node and calls the focus method."
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Try It Yourself</h2>
        <p>
          Practice using React Refs by implementing an input focus component:
        </p>
        <ul>
          <li>Create a ref for an input element</li>
          <li>Add a button to focus the input</li>
          <li>Track the input value with state</li>
          <li>Display the current value</li>
        </ul>

        <IDE
          initialCode={refsExample}
          height="400px"
          instructions="Implement an input component that uses refs to manage focus. Add a button that focuses the input when clicked, and display the current input value."
        />
      </div>

      <div className="section">
        <h2>Ref Best Practices</h2>
        <ul>
          <li>Use refs sparingly - prefer declarative solutions when possible</li>
          <li>Don't use refs for anything that can be done declaratively</li>
          <li>Access refs in effects or event handlers, not during rendering</li>
          <li>Consider using callback refs for dynamic refs</li>
        </ul>
      </div>

      <div className="section">
        <h2>Next Steps</h2>
        <p>
          Learn about React 
          <Link to="/hooks"> Custom Hooks</Link> for reusing stateful logic.
        </p>
      </div>
    </div>
  );
}

export default Refs; 