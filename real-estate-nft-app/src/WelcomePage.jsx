// WelcomePage.js
import React from 'react';
import { ethers } from 'ethers';
import backgroundImage from './image/bild1.jpeg';
const { providers } = ethers;

const WelcomePage = ({ history }) => {
  const connectToMetaMask = async () => {
    // Implement your MetaMask connection logic here
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#add8e6',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Content for Home section */}
        <h1 style={{ color: 'white', fontFamily: 'Arial, sans-serif', marginBottom: '20px' }}>
          Welcome to the Real Estate NFT App
        </h1>
        {/* Connect button */}
        <button
          onClick={connectToMetaMask}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Connect with MetaMask
        </button>
        {/* Add more content or buttons as needed */}
      </div>
    </div>
  );
};

export default WelcomePage;
