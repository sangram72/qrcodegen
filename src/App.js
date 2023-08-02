// App.js

import React from 'react';
// import DynamicQRCodeGenerator from './DynamicQRCodeGenerator';
import Qr from './Qr';

const App = () => {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>QR Code Generator App</h1>
      <Qr />
    </div>
  );
};

export default App;
