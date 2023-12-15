// ContactUsPage.js
import React from 'react';
import backgroundImage from './image/bild3.jpeg';

const ContactUsPage = () => {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      height: '100vh',
      color: 'black',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1 style={{ fontWeight: 'bold' }}>Contact Us</h1>
      <p style={{ fontWeight: 'bold' }}>
        If you have any questions or concerns, please feel free to reach out to us.
      </p>
      <p style={{ fontWeight: 'bold' }}>
        Address: 123 Main Street, Cityville
      </p>
      <p style={{ fontWeight: 'bold' }}>
        Phone: +1 (555) 123-4567
      </p>
      <p style={{ fontWeight: 'bold' }}>
        Email: info@example.com
      </p>
    </div>
  );
};

export default ContactUsPage;


