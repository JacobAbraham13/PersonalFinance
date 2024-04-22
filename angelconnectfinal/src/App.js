import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroPage from './HeroPage';
import Search from './Search';
import Profile from './Profile';
import ManageLoans from './ManageLoans';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/manageloans" element={<ManageLoans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
