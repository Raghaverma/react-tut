import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// Import pages
import Home from './pages/Home';
import Components from './pages/Components';
import Props from './pages/Props';
import State from './pages/State';
import Events from './pages/Events';
import JSX from './pages/JSX';
import Hooks from './pages/Hooks';
import Effects from './pages/Effects';
import Context from './pages/Context';
import Refs from './pages/Refs';
import TypeScript from './pages/TypeScript';
import Testing from './pages/Testing';
import Performance from './pages/Performance';
import Deployment from './pages/Deployment';
import CLI from './pages/CLI';
import Packages from './pages/Packages';
import './App.css';

function App() {
  // Set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content-wrapper">
            <main className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/components" element={<Components />} />
                <Route path="/props" element={<Props />} />
                <Route path="/state" element={<State />} />
                <Route path="/events" element={<Events />} />
                <Route path="/jsx" element={<JSX />} />
                <Route path="/hooks" element={<Hooks />} />
                <Route path="/effects" element={<Effects />} />
                <Route path="/context" element={<Context />} />
                <Route path="/refs" element={<Refs />} />
                <Route path="/typescript" element={<TypeScript />} />
                <Route path="/testing" element={<Testing />} />
                <Route path="/performance" element={<Performance />} />
                <Route path="/deployment" element={<Deployment />} />
                <Route path="/cli" element={<CLI />} />
                <Route path="/packages" element={<Packages />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

