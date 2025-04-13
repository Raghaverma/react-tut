import React from 'react';
import { Link } from 'react-router-dom';
import IDE from '../components/IDE';
import CodeBlock from '../components/CodeBlock';
import CodeExplanation from '../components/CodeExplanation';
import CodeEditor from '../components/CodeEditor';
import Quiz from '../components/Quiz';

const Components = () => {
  const basicComponentExample = `function Welcome() {
  return <h1>Hello, React Developer!</h1>;
}

// Try changing the text above and click Run!`;

  const propsExample = `function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Try rendering with different names:
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}`;

  const quizQuestions = [
    {
      question: "What is a React component?",
      answers: [
        "A reusable piece of UI",
        "A JavaScript function",
        "A class that extends React.Component",
        "All of the above"
      ],
      correctAnswer: "All of the above"
    },
    {
      question: "Which syntax is used to render a component?",
      answers: [
        "<Component />",
        "Component()",
        "render(Component)",
        "Component.render()"
      ],
      correctAnswer: "<Component />"
    },
    {
      question: "What's the naming convention for React components?",
      answers: [
        "camelCase",
        "PascalCase",
        "snake_case",
        "kebab-case"
      ],
      correctAnswer: "PascalCase"
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">React Components</h1>
        <p className="page-description">
          Learn about React components - the building blocks of React applications.
          Try out the interactive examples and test your knowledge!
        </p>
      </header>

      <section className="section">
        <h2>Basic Component</h2>
        <p>
          Here's a simple React component. Try modifying the code and see the changes live:
        </p>
        <CodeEditor
          initialCode={basicComponentExample}
          language="jsx"
        />
      </section>

      <section className="section">
        <h2>Components with Props</h2>
        <p>
          Components can accept props to make them dynamic. Edit this example to understand how props work:
        </p>
        <CodeEditor
          initialCode={propsExample}
          language="jsx"
        />
      </section>

      <section className="section">
        <h2>Practice Time!</h2>
        <p>
          Now that you've learned about components, test your knowledge with this quick quiz:
        </p>
        <Quiz questions={quizQuestions} />
      </section>

      <section className="section">
        <h2>Key Takeaways</h2>
        <ul className="takeaways-list">
          <li>Components are reusable pieces of UI</li>
          <li>They can be function or class-based</li>
          <li>Props make components dynamic and reusable</li>
          <li>Component names must start with a capital letter</li>
        </ul>
      </section>
    </div>
  );
};

export default Components; 