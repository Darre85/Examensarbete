// LoggedInPage.js
import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Web3 from 'web3';
import Marketplace from './Marketplace'; // Import your Marketplace component
import Assets from './Assets'; // Import your Assets component
import backgroundImage from './image/bild4.jpeg'; // Update the path to your background image

const LoggedInPage = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    const loadWeb3 = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3.eth.getAccounts();
          setWalletAddress(accounts[0]);
        } catch (error) {
          console.error('Error connecting to MetaMask:', error.message);
        }
      } else {
        console.error('MetaMask not installed');
      }
    };

    loadWeb3();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
      }}
    >
      <h1>Welcome!</h1>
      <p>Connected Account: <strong>{walletAddress}</strong></p>

      {/* Navigation Links */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
        <Link to="/marketplace" style={{
          color: 'black',
          textDecoration: 'none',
          fontSize: '24px',
          border: '2px solid black',
          padding: '10px 20px',
          borderRadius: '10px',
          marginRight: '20px',
        }}>
          Marketplace
        </Link>
        <Link to="/assets" style={{
          color: 'black',
          textDecoration: 'none',
          fontSize: '24px',
          border: '2px solid black',
          padding: '10px 20px',
          borderRadius: '10px',
          marginLeft: '20px',
        }}>
          Assets
        </Link>
      </div>

      {/* Add routes for Marketplace and Assets */}
      {/* Use Routes instead of Route */}
      <Routes>
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/assets" element={<Assets />} />
      </Routes>

      {/* Add other content for the logged-in view */}
    </div>
  );
};

export default LoggedInPage;
