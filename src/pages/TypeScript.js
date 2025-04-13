import React from 'react';
import { Link } from 'react-router-dom';
import IDE from '../components/IDE';
import CodeBlock from '../components/CodeBlock';
import CodeExplanation from '../components/CodeExplanation';
import Quiz from '../components/Quiz';

function TypeScript() {
  const typeScriptExample = `// Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  color = 'blue',
  disabled = false 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1
      }}
    >
      {label}
    </button>
  );
};

// App.tsx
const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>My App</h1>
      <Button 
        label="Click Me" 
        onClick={handleClick} 
        color="#087ea4" 
      />
      <Button 
        label="Disabled" 
        onClick={handleClick} 
        color="#ef4444"
        disabled={true}
      />
    </div>
  );
};`;

  const quizQuestions = [
    {
      question: "What is the main benefit of using TypeScript with React?",
      answers: [
        "Better performance",
        "Type safety and better developer experience",
        "Smaller bundle size",
        "Faster rendering"
      ],
      correctAnswer: 1
    },
    {
      question: "What does the 'FC' type stand for in React.FC?",
      answers: [
        "Function Component",
        "Functional Class",
        "Fast Component",
        "Form Component"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you define optional props in TypeScript?",
      answers: [
        "Using the optional keyword",
        "Using a question mark (?)",
        "Using the optional attribute",
        "Using the maybe type"
      ],
      correctAnswer: 1
    }
  ];

  return (
    <div className="content">
      <h1>TypeScript with React</h1>
      <p className="intro">
        TypeScript brings static typing to React, providing better developer experience,
        catching errors early, and improving code maintainability.
      </p>

      <div className="section">
        <h2>TypeScript Basics</h2>
        <p>
          TypeScript adds type annotations to JavaScript, making your code more robust
          and easier to maintain. Here's how to use it with React components:
        </p>

        <CodeBlock
          fileName="Button.tsx"
          code={`interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  color = 'blue',
  disabled = false 
}) => {
  // Component implementation
};`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "interface ButtonProps",
              explanation: "Defines the shape of props that the Button component accepts"
            },
            {
              code: "React.FC<ButtonProps>",
              explanation: "Specifies that this is a functional component with ButtonProps"
            },
            {
              code: "color?: string",
              explanation: "The question mark makes the color prop optional"
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Try It Yourself</h2>
        <p>
          Create a TypeScript React component with proper type definitions:
        </p>
        <ul>
          <li>Define an interface for your component's props</li>
          <li>Use React.FC type for the component</li>
          <li>Add optional props with proper typing</li>
        </ul>

        <IDE
          fileName="TypeScriptExample.tsx"
          initialCode={typeScriptExample}
          height="500px"
          instructions="Create a TypeScript React component with proper type definitions and demonstrate its usage."
        />
      </div>

      <div className="section">
        <h2>Advanced TypeScript Features</h2>
        <p>
          TypeScript offers many advanced features that can help with React development:
        </p>

        <CodeBlock
          fileName="AdvancedTypes.ts"
          code={`// Union Types
type Status = 'loading' | 'success' | 'error';

// Generic Components
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

// Utility Types
type PartialProps = Partial<ButtonProps>;
type RequiredProps = Required<ButtonProps>;`}
        />
      </div>

      <div className="section">
        <h2>Test Your Knowledge</h2>
        <Quiz questions={quizQuestions} />
      </div>

      <div className="section">
        <h2>Next Steps</h2>
        <p>
          Learn about <Link to="/testing">testing React components</Link> with TypeScript.
        </p>
      </div>
    </div>
  );
}

export default TypeScript; 