import React from 'react';
import HeroPage from './HeroPage';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'; // Remove 'BrowserRouter' from here
import HomePage from './HomePage.jsx'
import Search from './Search.jsx'
import Profile from './Profile.jsx'
import ManageLoans from './ManageLoans.jsx';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/manageloans" element={<ManageLoans />} />
      </Routes>
  );
}

export default App;
