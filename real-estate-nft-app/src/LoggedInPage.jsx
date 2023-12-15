// LoggedInPage.js
import React from 'react';

const LoggedInPage = ({ account }) => {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Connected Account: <strong>{account}</strong></p>
      {/* Add other content for the logged-in view */}
    </div>
  );
};

export default LoggedInPage;
