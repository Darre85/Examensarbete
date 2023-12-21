import React from 'react';
import backgroundImage from './image/bild3.jpeg';

const ContactUsPage = () => {
  return (
    <div style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      height: '100vh',
      color: 'white',
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start', // Move content to the top
      position: 'relative',
    }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '3em', marginBottom: '20px' }}>Contact Us</h1>
      <p style={{ fontWeight: 'bold', fontSize: '1.2em', marginBottom: '10px' }}>
        If you have any questions or concerns, please feel free to reach out to us.
      </p>
      <p style={{ fontWeight: 'bold', fontSize: '1.2em', marginBottom: '10px' }}>
        Address: 123 Main Street, Cityville
      </p>
      <p style={{ fontWeight: 'bold', fontSize: '1.2em', marginBottom: '10px' }}>
        Phone: +1 (555) 123-4567
      </p>
      <p style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
        Email: info@example.com
      </p>
    </div>
  );
};

export default ContactUsPage;
