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
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',  // Set minHeight to ensure the image covers the entire page
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        justifyContent: 'center',
      }}
    >
   {/* Content */}
      <div
        style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20vh',
        }}
      >
        <h1 style={{ color: 'white', fontFamily: 'Arial, sans-serif', marginBottom: '20px' }}>
          Welcome to the Real Estate NFT App
        </h1>
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
      </div>
    </div>
  );
};

export default WelcomePage;
