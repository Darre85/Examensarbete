import React from 'react';
import backgroundImage from './image/bild2.jpeg';

const AboutUsPage = () => {
  return (
    <div style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`, // Added overlay
      backgroundSize: 'cover', 
      height: '100vh', 
      color: 'white', 
      padding: '40px 20px', // Adjusted padding
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start', // Moved content to the top
      backgroundPosition: 'center',
      position: 'relative',
    }}>
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>About Us</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2em', opacity: '0.8' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.<br></br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br> Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur.<br></br> Excepteur sint occaecat cupidatat non proident,<br></br> sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
};

export default AboutUsPage;

