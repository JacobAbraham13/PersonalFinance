import React from 'react';
import HeroPage from './HeroPage';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
