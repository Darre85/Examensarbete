// Marketplace.js
import React from 'react';
import marketplaceBackground from './image/bild5.jpeg'; // Replace with your actual path

const Marketplace = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${marketplaceBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <h1>Marketplace</h1>
      {/* Add content for the Marketplace page */}
    </div>
  );
};

export default Marketplace;

