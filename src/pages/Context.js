import React from 'react';
import CodeEditor from '../components/CodeEditor';
import Quiz from '../components/Quiz';

const Context = () => {
  const contextExample = '// Create a context\n' +
    'const ThemeContext = React.createContext(\'light\');\n\n' +
    '// Provider component\n' +
    'function ThemeProvider({ children }) {\n' +
    '  const [theme, setTheme] = React.useState(\'light\');\n\n' +
    '  const toggleTheme = () => {\n' +
    '    setTheme(prev => prev === \'light\' ? \'dark\' : \'light\');\n' +
    '  };\n\n' +
    '  return (\n' +
    '    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n' +
    '      {children}\n' +
    '    </ThemeContext.Provider>\n' +
    '  );\n' +
    '}\n\n' +
    '// Consumer component\n' +
    'function ThemedButton() {\n' +
    '  const { theme, toggleTheme } = React.useContext(ThemeContext);\n' +
    '  \n' +
    '  return (\n' +
    '    <button\n' +
    '      onClick={toggleTheme}\n' +
    '      style={{\n' +
    '        background: theme === \'light\' ? \'#fff\' : \'#333\',\n' +
    '        color: theme === \'light\' ? \'#333\' : \'#fff\',\n' +
    '        padding: \'8px 16px\',\n' +
    '        border: \'1px solid #ccc\',\n' +
    '        borderRadius: \'4px\'\n' +
    '      }}\n' +
    '    >\n' +
    '      Current theme: {theme}\n' +
    '    </button>\n' +
    '  );\n' +
    '}\n\n' +
    '// App component\n' +
    'function App() {\n' +
    '  return (\n' +
    '    <ThemeProvider>\n' +
    '      <div>\n' +
    '        <h1>Theme Switcher</h1>\n' +
    '        <ThemedButton />\n' +
    '      </div>\n' +
    '    </ThemeProvider>\n' +
    '  );\n' +
    '}';

  const multipleContextsExample = '// Create contexts\n' +
    'const UserContext = React.createContext();\n' +
    'const ThemeContext = React.createContext();\n\n' +
    'function App() {\n' +
    '  const [user, setUser] = React.useState({ name: \'John\' });\n' +
    '  const [theme, setTheme] = React.useState(\'light\');\n\n' +
    '  return (\n' +
    '    <UserContext.Provider value={user}>\n' +
    '      <ThemeContext.Provider value={theme}>\n' +
    '        <Layout />\n' +
    '      </ThemeContext.Provider>\n' +
    '    </UserContext.Provider>\n' +
    '  );\n' +
    '}\n\n' +
    'function Layout() {\n' +
    '  const user = React.useContext(UserContext);\n' +
    '  const theme = React.useContext(ThemeContext);\n\n' +
    '  return (\n' +
    '    <div className={\'layout \' + theme}>\n' +
    '      <h1>Welcome, {user.name}!</h1>\n' +
    '    </div>\n' +
    '  );\n' +
    '}';

  const quizQuestions = [
    {
      question: "What problem does Context solve in React?",
      answers: [
        "Prop drilling",
        "Component styling",
        "State management",
        "Event handling"
      ],
      correctAnswer: "Prop drilling"
    },
    {
      question: "What are the two main parts of Context?",
      answers: [
        "Provider and Consumer",
        "State and Props",
        "Actions and Reducers",
        "Model and View"
      ],
      correctAnswer: "Provider and Consumer"
    },
    {
      question: "When should you use Context?",
      answers: [
        "For global state that needs to be accessed by many components",
        "For passing props to immediate children",
        "For styling components",
        "For handling form submissions"
      ],
      correctAnswer: "For global state that needs to be accessed by many components"
    },
    {
      question: "What hook is used to consume context in functional components?",
      answers: [
        "useContext",
        "useState",
        "useEffect",
        "useReducer"
      ],
      correctAnswer: "useContext"
    },
    {
      question: "What happens to components that consume context when the context value changes?",
      answers: [
        "They re-render with the new value",
        "Nothing happens automatically",
        "They unmount and remount",
        "They throw an error"
      ],
      correctAnswer: "They re-render with the new value"
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Context in React</h1>
        <p className="page-description">
          Learn how to share state between components without prop drilling using React Context.
        </p>
      </header>

      <section className="section">
        <h2>Basic Context Usage</h2>
        <p>
          Here's an example of creating and using a theme context:
        </p>
        <CodeEditor
          initialCode={contextExample}
          language="jsx"
        />
      </section>

      <section className="section">
        <h2>Multiple Contexts</h2>
        <p>
          You can use multiple contexts in your application:
        </p>
        <CodeEditor
          initialCode={multipleContextsExample}
          language="jsx"
        />
      </section>

      <section className="section">
        <h2>Test Your Knowledge</h2>
        <p>
          Take this quiz to check your understanding of React Context:
        </p>
        <Quiz questions={quizQuestions} />
      </section>

      <section className="section">
        <h2>Key Takeaways</h2>
        <ul className="takeaways-list">
          <li>Context provides a way to pass data through the component tree without prop drilling</li>
          <li>Use Context for global state that many components need</li>
          <li>Context changes trigger re-renders of consuming components</li>
          <li>Multiple contexts can be used together</li>
          <li>Consider performance implications when using Context</li>
        </ul>
      </section>
    </div>
  );
};

export default Context;