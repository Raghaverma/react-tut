import React from 'react';
import { Link } from 'react-router-dom';
import IDE from '../components/IDE';
import CodeBlock from '../components/CodeBlock';
import CodeExplanation from '../components/CodeExplanation';
import CodeEditor from '../components/CodeEditor';
import Quiz from '../components/Quiz';

function Props() {
  const propsExample = `// UserProfile.jsx
function UserProfile({ 
  name, 
  role = 'User',
  isOnline = false,
  stats = { posts: 0, followers: 0 },
  onStatusChange
}) {
  return (
    <div className="profile">
      <div className="header">
        <h2>{name}</h2>
        <span className="role">{role}</span>
      </div>
      
      <div className="stats">
        <div>Posts: {stats.posts}</div>
        <div>Followers: {stats.followers}</div>
      </div>
      
      <div className="status">
        <span className={isOnline ? 'online' : 'offline'}>
          {isOnline ? '🟢 Online' : '⚫ Offline'}
        </span>
        <button onClick={() => onStatusChange(!isOnline)}>
          Toggle Status
        </button>
      </div>
    </div>
  );
}

// App.jsx
function App() {
  const [isUserOnline, setIsUserOnline] = React.useState(false);
  
  return (
    <div>
      <UserProfile
        name="John Doe"
        role="Admin"
        isOnline={isUserOnline}
        stats={{ posts: 42, followers: 1337 }}
        onStatusChange={setIsUserOnline}
      />
    </div>
  );
}`;

  const propTypesExample = `import PropTypes from 'prop-types';

function UserCard({ name, age, email }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired
};`;

  const quizQuestions = [
    {
      question: "What are props in React?",
      answers: [
        "Internal component state",
        "Arguments passed to components",
        "CSS styles",
        "JavaScript functions"
      ],
      correctAnswer: "Arguments passed to components"
    },
    {
      question: "How do you pass a prop to a component?",
      answers: [
        "<Component prop={value} />",
        "<Component prop='value' />",
        "Both A and B are correct",
        "Component(prop=value)"
      ],
      correctAnswer: "Both A and B are correct"
    },
    {
      question: "What is prop destructuring?",
      answers: [
        "Breaking down props object into individual variables",
        "Removing props from a component",
        "Combining multiple props into one",
        "Converting props to state"
      ],
      correctAnswer: "Breaking down props object into individual variables"
    },
    {
      question: "Which is the correct way to define default props?",
      answers: [
        "Component.defaultProps = { prop: value }",
        "default Component.props = { prop: value }",
        "props.default = { prop: value }",
        "Component.props = { prop: value }"
      ],
      correctAnswer: "Component.defaultProps = { prop: value }"
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Props in React</h1>
        <p className="page-description">
          Learn how to pass data between components using props and understand prop types.
        </p>
      </header>

      <section className="section">
        <h2>Basic Props Usage</h2>
        <p>
          Props are arguments passed to React components. Try modifying the props in this example:
        </p>
        <CodeEditor
          initialCode={propsExample}
          language="jsx"
        />
      </section>

      <section className="section">
        <h2>PropTypes</h2>
        <p>
          PropTypes help you catch bugs by validating the types of props being passed:
        </p>
        <CodeEditor
          initialCode={propTypesExample}
          language="jsx"
        />
      </section>

      <section className="section">
        <h2>Test Your Knowledge</h2>
        <p>
          Take this quiz to check your understanding of React props:
        </p>
        <Quiz questions={quizQuestions} />
      </section>

      <section className="section">
        <h2>Key Takeaways</h2>
        <ul className="takeaways-list">
          <li>Props are read-only and cannot be modified by a component</li>
          <li>Props can be of any type: strings, numbers, objects, functions</li>
          <li>Use PropTypes for runtime type checking</li>
          <li>Props make your components reusable and dynamic</li>
        </ul>
      </section>

      <div className="section">
        <h2>Using Props</h2>
        <p>
          Props are passed to components like HTML attributes and received as a single
          parameter object. You can use destructuring to make props easier to work with.
        </p>

        <CodeBlock
          fileName="Greeting.jsx"
          code={`function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}

// Usage
<Greeting name="Alice" age={25} />`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "{ name, age }",
              explanation: "Destructures the props object to get specific values"
            },
            {
              code: "<Greeting name=\"Alice\" age={25} />",
              explanation: "Passes props to the component using JSX attributes"
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Try It Yourself</h2>
        <p>
          Create a UserProfile component that accepts and uses various props:
        </p>
        <ul>
          <li>Required props (name)</li>
          <li>Props with default values (role, isOnline)</li>
          <li>Object props (stats)</li>
          <li>Function props (onStatusChange)</li>
        </ul>

        <IDE
          fileName="UserProfile.jsx"
          initialCode={propsExample}
          height="500px"
          instructions="Create a UserProfile component that demonstrates different types of props, including strings, booleans, objects, and functions."
        />
      </div>

      <div className="section">
        <h2>Default Props</h2>
        <p>
          You can specify default values for props in case they're not provided:
        </p>

        <CodeBlock
          fileName="Button.jsx"
          code={`function Button({ 
  label = 'Click Me',
  type = 'button',
  disabled = false,
  onClick 
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "label = 'Click Me'",
              explanation: "Sets a default value for the label prop"
            },
            {
              code: "disabled = false",
              explanation: "Provides a default value for the disabled state"
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Props Best Practices</h2>
        <ul>
          <li>Keep props simple and minimal</li>
          <li>Use descriptive prop names</li>
          <li>Provide default values when it makes sense</li>
          <li>Document your props with comments or TypeScript</li>
          <li>Avoid modifying props inside components</li>
        </ul>
      </div>

      <div className="section">
        <h2>Next Steps</h2>
        <p>
          Learn how to manage dynamic data with <Link to="/state">State</Link> in React.
        </p>
      </div>
    </div>
  );
}

export default Props; 