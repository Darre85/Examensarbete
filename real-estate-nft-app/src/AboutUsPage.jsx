// AboutUsPage.js
import React from 'react';
import backgroundImage from './image/bild2.jpeg';

const AboutUsPage = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`, // Use template literal for dynamic image path
      backgroundSize: 'cover', 
      height: '100vh', 
      color: 'white', 
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
};

export default AboutUsPage;




