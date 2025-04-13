import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'));
const Components = lazy(() => import('./pages/Components'));
const Props = lazy(() => import('./pages/Props'));
const State = lazy(() => import('./pages/State'));
const Events = lazy(() => import('./pages/Events'));
const JSX = lazy(() => import('./pages/JSX'));
const Hooks = lazy(() => import('./pages/Hooks'));
const Effects = lazy(() => import('./pages/Effects'));
const Context = lazy(() => import('./pages/Context'));
const Refs = lazy(() => import('./pages/Refs'));
const TypeScript = lazy(() => import('./pages/TypeScript'));
const Testing = lazy(() => import('./pages/Testing'));
const Performance = lazy(() => import('./pages/Performance'));
const Deployment = lazy(() => import('./pages/Deployment'));
const CLI = lazy(() => import('./pages/CLI'));
const Packages = lazy(() => import('./pages/Packages'));

// Loading component for Suspense fallback
const LoadingPage = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
  </div>
);

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
              <Suspense fallback={<LoadingPage />}>
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
              </Suspense>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

