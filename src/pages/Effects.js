import React from 'react';
import { Link } from 'react-router-dom';
import IDE from '../components/IDE';
import CodeBlock from '../components/CodeBlock';
import CodeExplanation from '../components/CodeExplanation';
import CodeEditor from '../components/CodeEditor';
import Quiz from '../components/Quiz';
import { basicEffect, dataFetching } from './examples';

const quizQuestions = [
  {
    question: "What is the purpose of useEffect?",
    answers: [
      "To handle side effects in components",
      "To create new components",
      "To style components",
      "To manage state"
    ],
    correctAnswer: "To handle side effects in components"
  },
  {
    question: "When does useEffect run?",
    answers: [
      "Only once when the component mounts",
      "Every time the component renders",
      "When specified dependencies change",
      "All of the above, depending on the dependency array"
    ],
    correctAnswer: "All of the above, depending on the dependency array"
  },
  {
    question: "What is the cleanup function in useEffect used for?",
    answers: [
      "To clean up side effects before the component unmounts or re-renders",
      "To clear the component's state",
      "To remove the component from the DOM",
      "To reset the dependency array"
    ],
    correctAnswer: "To clean up side effects before the component unmounts or re-renders"
  },
  {
    question: "What happens if you omit the dependency array in useEffect?",
    answers: [
      "The effect runs only once",
      "The effect never runs",
      "The effect runs after every render",
      "The effect runs only when the component unmounts"
    ],
    correctAnswer: "The effect runs after every render"
  },
  {
    question: "Which is the correct way to fetch data with useEffect?",
    answers: [
      "useEffect(async () => { await fetch() }, [])",
      "useEffect(() => { async function fetchData() { await fetch() }; fetchData(); }, [])",
      "useEffect(() => { fetch().then() }, [])",
      "Both B and C are correct"
    ],
    correctAnswer: "Both B and C are correct"
  }
];

const Effects = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Effects in React</h1>
        <p className="page-description">
          Learn how to handle side effects in React components using the useEffect hook.
        </p>
      </header>

      <section className="section">
        <h2>Basic Effect Usage</h2>
        <p>
          Here's an example of using useEffect to manage a component's lifecycle:
        </p>
        <CodeEditor
          initialCode={basicEffect}
          language="jsx"
        />
      </section>

      <section className="section">
        <h2>Data Fetching with useEffect</h2>
        <p>
          A common use case for useEffect is fetching data from an API:
        </p>
        <CodeEditor
          initialCode={dataFetching}
          language="jsx"
        />
      </section>

      <section className="section">
        <h2>Test Your Knowledge</h2>
        <p>
          Take this quiz to check your understanding of React Effects:
        </p>
        <Quiz questions={quizQuestions} />
      </section>

      <section className="section">
        <h2>Key Takeaways</h2>
        <ul className="takeaways-list">
          <li>Effects handle side effects like data fetching, subscriptions, and DOM manipulation</li>
          <li>The dependency array controls when effects run</li>
          <li>Cleanup functions prevent memory leaks</li>
          <li>Effects run after every render unless optimized</li>
          <li>Async operations need special handling in effects</li>
        </ul>
      </section>
    </div>
  );
};

export default Effects; 