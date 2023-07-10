import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// page imports
import Yellow from './pages/dungeon/Yellow.js';
import Green from './pages/dungeon/Green.js';
import SimpleMain from './pages/simple/SimpleMain';

const App = () => {

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/simple" element={<SimpleMain/>}/>
        <Route path="/dungeon" element={<Yellow />}/>
        <Route path="/green" element={<Green />}/>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
