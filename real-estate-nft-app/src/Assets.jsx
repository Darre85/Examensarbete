// Assets.js
import React from 'react';
import assetsBackground from './image/bild6.jpeg'; // Replace with your actual path

const Assets = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${assetsBackground})`,
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
      <h1>Assets Page</h1>
      {/* Add content for the Assets page */}
    </div>
  );
};

export default Assets;
