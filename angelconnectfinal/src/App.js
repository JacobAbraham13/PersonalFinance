import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroPage from './HeroPage';
import Search from './Search';
import Profile from './Profile';
import ManageLoans from './ManageLoans';
import SearchBusinesses from './SearchBusinesses';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/searchlenders" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/manageloans" element={<ManageLoans />} />
        <Route path="/searchbusinesses" element={<SearchBusinesses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
