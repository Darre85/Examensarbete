// WelcomePage.js
import React, { useState } from 'react';
import { ethers } from 'ethers';
const { providers } = ethers;

const WelcomePage = ({ history }) => {
  const [account, setAccount] = useState(null);

  const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        if (accounts.length > 0) {
          const provider = new providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const connectedAccount = await signer.getAddress();
          setAccount(connectedAccount);

          // Update the line below to redirect to '/loggedin' instead of '/welcome'
          history.push('/loggedin');
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

  const handleNavigation = (path) => {
    // You can add logic here for additional functionality if needed
    history.push(path);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#add8e6' }}>
      {/* Navbar */}
      <nav style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
        <h2 style={{ margin: '0', color: 'white' }}>Real Estate NFT App</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }} onClick={() => handleNavigation('/')}>
            <span onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
              Home
            </span>
          </a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }} onClick={() => handleNavigation('/about-us')}>
            <span onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
              About Us
            </span>
          </a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }} onClick={() => handleNavigation('/contact-us')}>
            <span onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
              Contact Us
            </span>
          </a>
        </div>
      </nav>

      {/* Content */}
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {account ? (
          <div>
            <h1>Welcome!</h1>
            <p>Connected Account: {account}</p>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h1>Welcome to the Real Estate NFT App</h1>
            <p>Please connect your MetaMask account to continue.</p>
            <button onClick={connectToMetaMask} style={{ margin: '10px' }}>Connect with MetaMask</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;




