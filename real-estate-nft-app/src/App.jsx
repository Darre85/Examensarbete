// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change 'Switch' to 'Routes'
import WelcomePage from './WelcomePage';
import AboutUsPage from './AboutUsPage';
import ContactUsPage from './ContactUsPage';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Change 'Switch' to 'Routes' */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes> {/* Change 'Switch' to 'Routes' */}
    </Router>
  );
};

export default App;




