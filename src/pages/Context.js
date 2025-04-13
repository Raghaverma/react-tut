import React from 'react';
import { Link } from 'react-router-dom';
import IDE from '../components/IDE';
import CodeBlock from '../components/CodeBlock';
import CodeExplanation from '../components/CodeExplanation';

function Context() {
  const contextExample = `// ThemeContext.js
const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {}
});

// ThemeProvider.jsx
function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// ThemedButton.jsx
function ThemedButton() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#333333' : '#ffffff',
        padding: '10px 20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Current theme: {theme}
    </button>
  );
}

// App.jsx
function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: '20px' }}>
        <h1>Theme Switcher</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}`;

  return (
    <div className="content">
      <h1>Context in React</h1>
      <p className="intro">
        Context provides a way to pass data through the component tree without having to
        pass props manually at every level. It's designed to share data that can be
        considered "global" for a tree of React components.
      </p>

      <div className="section">
        <h2>Creating Context</h2>
        <p>
          Context is created using React.createContext and includes a Provider and Consumer.
          The Provider allows child components to subscribe to context changes.
        </p>

        <CodeBlock
          fileName="UserContext.jsx"
          code={`const UserContext = React.createContext({
  user: null,
  setUser: () => {}
});

function UserProvider({ children }) {
  const [user, setUser] = React.useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "React.createContext(defaultValue)",
              explanation: "Creates a Context object with an optional default value"
            },
            {
              code: "<UserContext.Provider value={...}>",
              explanation: "Provides the context value to child components"
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Using Context</h2>
        <p>
          Components can consume context using the useContext hook or Context.Consumer:
        </p>

        <CodeBlock
          fileName="UserProfile.jsx"
          code={`function UserProfile() {
  const { user, setUser } = React.useContext(UserContext);

  if (!user) {
    return <button onClick={() => setUser({ name: 'John' })}>Log in</button>;
  }

  return <div>Welcome, {user.name}!</div>;
}`}
        />

        <CodeExplanation
          title="Code Explanation:"
          items={[
            {
              code: "const { user, setUser } = React.useContext(UserContext)",
              explanation: "Subscribes to context changes using the useContext hook"
            },
            {
              code: "setUser({ name: 'John' })",
              explanation: "Updates the context value, triggering re-renders of consuming components"
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Try It Yourself</h2>
        <p>
          Create a theme switcher using Context:
        </p>
        <ul>
          <li>Create a ThemeContext</li>
          <li>Implement a ThemeProvider with toggle functionality</li>
          <li>Create a themed button that uses the context</li>
          <li>Apply the theme to your components</li>
        </ul>

        <IDE
          fileName="ThemeContext.jsx"
          initialCode={contextExample}
          height="600px"
          instructions="Implement a theme switcher using Context that allows components to toggle between light and dark themes."
        />
      </div>

      <div className="section">
        <h2>Context Best Practices</h2>
        <ul>
          <li>Use Context for truly global data (theme, user auth, preferences)</li>
          <li>Keep context providers as close as possible to consuming components</li>
          <li>Split contexts by concern to avoid unnecessary re-renders</li>
          <li>Consider performance implications of context changes</li>
          <li>Provide meaningful default values</li>
        </ul>
      </div>

      <div className="section">
        <h2>Next Steps</h2>
        <p>
          Explore React's built-in hooks and learn to create custom hooks in the <Link to="/hooks">Hooks</Link> section.
        </p>
      </div>
    </div>
  );
}

export default Context; 