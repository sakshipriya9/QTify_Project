import React from 'react';
import './Buttons.css';

const Buttons = ({ text, handleOpen }) => (
  <button className="btn" onClick={handleOpen} style={{ cursor: 'pointer' }}>
    {text}
  </button>
);

export default Buttons;
