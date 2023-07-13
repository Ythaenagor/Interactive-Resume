import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// page imports
import Landing from './pages/Landing';
import SimpleMain from './pages/simple/SimpleMain';

// dungeon pages
import Entrance from './pages/dungeon/Entrance';
import AboutThis from './pages/dungeon/AboutThis';
import AboutMe from './pages/dungeon/AboutMe';
import Skills from './pages/dungeon/Skills';
import Education from './pages/dungeon/Education';
import Experience from './pages/dungeon/Experience';
import Contact from './pages/dungeon/Contact';

const App = () => {

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/"           element={<Landing/>}/>
        <Route path="/simple"     element={<SimpleMain/>}/>
        <Route path="/dungeon"    element={<Entrance/>}/>
        <Route path="/aboutthis"  element={<AboutThis/>}/>
        <Route path="/aboutme"    element={<AboutMe/>}/>
        <Route path="/skills"     element={<Skills/>}/>
        <Route path="/education"  element={<Education/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/contact"    element={<Contact/>}/>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
