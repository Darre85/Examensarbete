import React from 'react';
import assetsBackground from './image/bild6.jpeg'; // Replace with your actual path

const Assets = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${assetsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // Move content to the top
        color: 'white', // Change text color to white for better visibility
        padding: '40px 20px', // Adjusted padding
        position: 'relative',
      }}
    >
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Assets Page</h1>
      {/* Add content for the Assets page */}
    </div>
  );
};

export default Assets;
