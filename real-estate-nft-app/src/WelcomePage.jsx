import React, { useState } from 'react';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './image/bild1.jpeg';

const { Web3Provider } = require('@ethersproject/providers');

const WelcomePage = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);

  const connectToMetaMask = async () => {
    try {
      console.log('Attempting to connect to MetaMask...');

      if (!window.ethereum) {
        console.error('MetaMask is not installed or not available');
        return;
      }

      console.log('MetaMask is available');

      await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Use getDefaultProvider from ethers providers
      const provider = new Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const connectedAccount = await signer.getAddress();
      setAccount(connectedAccount);

      console.log('Before redirection');
      navigate('/loggedin');
      console.log('After redirection');
    } catch (error) {
      console.error('Error connecting to MetaMask:', error.message);
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Background Image with Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1, // Move the overlay to the background
        }}
      />

      {/* Content */}
      <div
        style={{
          zIndex: 1, // Ensure the content is above the overlay
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          marginTop: '20vh', // Adjusted to move the content up
        }}
      >
        <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '3em', marginBottom: '20px' }}>
          Welcome to the Real Estate NFT App
        </h1>
        <button
          onClick={connectToMetaMask}
          style={{
            padding: '10px 20px',
            fontSize: '1.2em', // Adjusted font size
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Connect with MetaMask
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
