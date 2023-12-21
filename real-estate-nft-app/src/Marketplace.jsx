import React from 'react';
import marketplaceBackground from './image/bild5.jpeg'; // Replace with your actual path

const Marketplace = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${marketplaceBackground})`,
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
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Marketplace</h1>
      {/* Add content for the Marketplace page */}
    </div>
  );
};

export default Marketplace;
