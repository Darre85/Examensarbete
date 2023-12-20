// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import LoggedInPage from './LoggedInPage';
import AboutUsPage from './AboutUsPage';
import ContactUsPage from './ContactUsPage';
import Marketplace from './Marketplace'; // Import your Marketplace component
import Assets from './Assets'; // Import your Assets component
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/loggedin" element={<LoggedInPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/assets" element={<Assets />} />
      </Routes>
    </Router>
  );
};

export default App;
