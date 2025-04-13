// import React from 'react';
// import { Link } from 'react-router-dom';
// import IDE from '../components/IDE';
// import CodeBlock from '../components/CodeBlock';
// import CodeExplanation from '../components/CodeExplanation';
// import CodeEditor from '../components/CodeEditor';
// import Quiz from '../components/Quiz';

// const Context = () => {
//   const contextExample = `// Create a context
// const ThemeContext = React.createContext('light');

// // Provider component
// function ThemeProvider({ children }) {
//   const [theme, setTheme] = React.useState('light');

//   const toggleTheme = () => {
//     setTheme(prev => prev === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// // Consumer component
// function ThemedButton() {
//   const { theme, toggleTheme } = React.useContext(ThemeContext);
  
//   return (
//     <button
//       onClick={toggleTheme}
//       style={{
//         background: theme === 'light' ? '#fff' : '#333',
//         color: theme === 'light' ? '#333' : '#fff',
//         padding: '8px 16px',
//         border: '1px solid #ccc',
//         borderRadius: '4px'
//       }}
//     >
//       Current theme: {theme}
//     </button>
//   );
// }

// // App component
// function App() {
//   return (
//     <ThemeProvider>
//       <div>
//         <h1>Theme Switcher</h1>
//         <ThemedButton />
//       </div>
//     </ThemeProvider>
//   );
// }

// const multipleContextsExample = `// Create contexts
// const UserContext = React.createContext();
// const ThemeContext = React.createContext();

// function App() {
//   const [user, setUser] = React.useState({ name: 'John' });
//   const [theme, setTheme] = React.useState('light');

//   return (
//     <UserContext.Provider value={user}>
//       <ThemeContext.Provider value={theme}>
//         <Layout />
//       </ThemeContext.Provider>
//     </UserContext.Provider>
//   );
// }

// function Layout() {
//   const user = React.useContext(UserContext);
//   const theme = React.useContext(ThemeContext);

//   return (
//     <div className={\`layout \${theme}\`}>
//       <h1>Welcome, {user.name}!</h1>
//     </div>
//   );
// }`;

//   const quizQuestions = [
//     {
//       question: "What problem does Context solve in React?",
//       answers: [
//         "Prop drilling",
//         "Component styling",
//         "State management",
//         "Event handling"
//       ],
//       correctAnswer: "Prop drilling"
//     },
//     {
//       question: "What are the two main parts of Context?",
//       answers: [
//         "Provider and Consumer",
//         "State and Props",
//         "Actions and Reducers",
//         "Model and View"
//       ],
//       correctAnswer: "Provider and Consumer"
//     },
//     {
//       question: "When should you use Context?",
//       answers: [
//         "For global state that needs to be accessed by many components",
//         "For passing props to immediate children",
//         "For styling components",
//         "For handling form submissions"
//       ],
//       correctAnswer: "For global state that needs to be accessed by many components"
//     },
//     {
//       question: "What hook is used to consume context in functional components?",
//       answers: [
//         "useContext",
//         "useState",
//         "useEffect",
//         "useReducer"
//       ],
//       correctAnswer: "useContext"
//     },
//     {
//       question: "What happens to components that consume context when the context value changes?",
//       answers: [
//         "They re-render with the new value",
//         "Nothing happens automatically",
//         "They unmount and remount",
//         "They throw an error"
//       ],
//       correctAnswer: "They re-render with the new value"
//     }
//   ];

//   return (
//     <div className="page-container">
//       <header className="page-header">
//         <h1 className="page-title">Context in React</h1>
//         <p className="page-description">
//           Learn how to share state between components without prop drilling using React Context.
//         </p>
//       </header>

//       <section className="section">
//         <h2>Basic Context Usage</h2>
//         <p>
//           Here's an example of creating and using a theme context:
//         </p>
//         <CodeEditor
//           initialCode={contextExample}
//           language="jsx"
//         />
//       </section>

//       <section className="section">
//         <h2>Multiple Contexts</h2>
//         <p>
//           You can use multiple contexts in your application:
//         </p>
//         <CodeEditor
//           initialCode={multipleContextsExample}
//           language="jsx"
//         />
//       </section>

//       <section className="section">
//         <h2>Test Your Knowledge</h2>
//         <p>
//           Take this quiz to check your understanding of React Context:
//         </p>
//         <Quiz questions={quizQuestions} />
//       </section>

//       <section className="section">
//         <h2>Key Takeaways</h2>
//         <ul className="takeaways-list">
//           <li>Context provides a way to pass data through the component tree without prop drilling</li>
//           <li>Use Context for global state that many components need</li>
//           <li>Context changes trigger re-renders of consuming components</li>
//           <li>Multiple contexts can be used together</li>
//           <li>Consider performance implications when using Context</li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Context;