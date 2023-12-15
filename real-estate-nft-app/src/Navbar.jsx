// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
      <h2 style={{ margin: '0', color: 'white' }}>Real Estate NFT App</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          <span>Home</span>
        </Link>
        <Link to="/about-us" style={{ color: 'white', textDecoration: 'none' }}>
          <span>About Us</span>
        </Link>
        <Link to="/contact-us" style={{ color: 'white', textDecoration: 'none' }}>
          <span>Contact Us</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
