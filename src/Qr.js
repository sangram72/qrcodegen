import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import './styles.css'; 

const Qr = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const qrCodeRef = useRef();

  const handleInputChange = (event) => {
    setWebsiteUrl(event.target.value);
  };

  const downloadQRCode = () => {
    const canvas = qrCodeRef.current.querySelector('canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'qr_code.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="container">
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter website URL"
        value={websiteUrl}
        onChange={handleInputChange}
      />
      {websiteUrl && (
        <div className="qrcode-container" ref={qrCodeRef}>
          <h3>QR Code for:</h3>
          <p className="url-display">{websiteUrl}</p>
          <div className="qrcode">
            <QRCode value={websiteUrl} size={256} fgColor="#000000" bgColor="#ffffff" />
          </div>
          <button className="download-button" onClick={downloadQRCode}>
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
};

export default Qr;
