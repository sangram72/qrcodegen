

import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './styles.css'; 

const Qr = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');

  const handleInputChange = (event) => {
    setWebsiteUrl(event.target.value);
  };

  return (
    <div className="container">
      
      <input

        type="text"
        placeholder="Enter website URL"
        value={websiteUrl}
        onChange={handleInputChange}
      />
      {websiteUrl && (
        <div>
          <h3>QR Code for {websiteUrl}</h3>
          <div className="qrcode">
            <QRCode value={websiteUrl} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Qr;
