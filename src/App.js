import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ContactPage from './components/ContactPage';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/contact" element={<ContactPage />} />

        </Routes>
      </Router>
    </>
  );
};

export default App;
