import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'transparent', padding: '10px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '10px' }}>
        <Link to="/" style={{ color: 'black', textDecoration: 'none', marginRight: '10px' }}>
          <span>Home</span>
        </Link>
        <Link to="/about-us" style={{ color: 'black', textDecoration: 'none', marginRight: '10px' }}>
          <span>About Us</span>
        </Link>
        <Link to="/contact-us" style={{ color: 'black', textDecoration: 'none' }}>
          <span>Contact Us</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;