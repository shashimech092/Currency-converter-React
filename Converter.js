import React, { useState } from 'react';
import './App.css'

const Converter = () => {
  const [usdAmount, setUsdAmount] = useState('');
  const [inrAmount, setInrAmount] = useState('');

  const usdToInr = 82.83;

  const handleConvert = () => {
    if (usdAmount) {
      const convertedAmount = (parseFloat(usdAmount) * usdToInr).toFixed(2);
      setInrAmount(convertedAmount);
    }
  };

  return (
    <div className="converter">
      <h2>USD to INR Converter</h2>
      <div className="input-container">
        <label>USD:</label>
        <input type="number" value={usdAmount} onChange={(e) => setUsdAmount(e.target.value)} />
        <button onClick={handleConvert}>Convert</button>
      </div>
      {
        <div className="result">
          <p>{usdAmount} USD is approximately</p>
          <p>{inrAmount} INR</p>
        </div>
      }
    </div>
  );
};

export default Converter;
