import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import JSX from './pages/JSX';
import Components from './pages/Components';
import Props from './pages/Props';
import State from './pages/State';
import Events from './pages/Events';
import Effects from './pages/Effects';
import Context from './pages/Context';
import Refs from './pages/Refs';
import Hooks from './pages/Hooks';
import Performance from './pages/Performance';
import Testing from './pages/Testing';
import Deployment from './pages/Deployment';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jsx" element={<JSX />} />
              <Route path="/components" element={<Components />} />
              <Route path="/props" element={<Props />} />
              <Route path="/state" element={<State />} />
              <Route path="/events" element={<Events />} />
              <Route path="/effects" element={<Effects />} />
              <Route path="/context" element={<Context />} />
              <Route path="/refs" element={<Refs />} />
              <Route path="/hooks" element={<Hooks />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/testing" element={<Testing />} />
              <Route path="/deployment" element={<Deployment />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

