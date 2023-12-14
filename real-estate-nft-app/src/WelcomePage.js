// WelcomePage.js
import React, { useState } from 'react';
import { ethers } from 'ethers';
// Import ethers as a whole object
// Note: You might need to check your ethers version, as newer versions might have changes
// If the issue persists, consider using the specific import syntax (e.g., import { Web3Provider } from 'ethers/providers';)
const { providers } = ethers;

const WelcomePage = ({ history }) => {
  const [account, setAccount] = useState(null);

  const connectToMetaMask = async () => {
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request account access if needed
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        if (accounts.length > 0) {
          // Use the providers object from ethers
          const provider = new providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();

          // Get the connected account
          const connectedAccount = await signer.getAddress();
          setAccount(connectedAccount);

          // Navigate to another page after successful connection
          history.push('/welcome');
        } else {
          console.error('User denied account access');
        }
      } else {
        console.error('MetaMask is not installed');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error.message);
    }
  };

  return (
    <div>
      {account ? (
        // If an account is connected, show welcome message and account address
        <div>
          <h1>Welcome!</h1>
          <p>Connected Account: {account}</p>
          {/* Add more content here for the logged-in state */}
        </div>
      ) : (
        // If no account is connected, show a message to connect
        <div>
          <h1>Welcome to the Real Estate NFT App</h1>
          <p>Please connect your MetaMask account to continue.</p>
          {/* You can add a button or link to trigger the MetaMask connection */}
          <button onClick={connectToMetaMask}>Connect with MetaMask</button>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;



