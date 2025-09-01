import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <ParticleBackground />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;