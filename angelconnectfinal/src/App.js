import React from 'react';
import HeroPage from './HeroPage';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'; // Remove 'BrowserRouter' from here
import HomePage from './HomePage.jsx'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
  );
}

export default App;
