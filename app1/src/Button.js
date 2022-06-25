import React from 'react';
import './Button.css';

const Button = ({ label = 'Exposed App1 button' }) => (
  <button className="app1-button" onClick={() => alert('Hello from App1')}>
    {label}
  </button>
);

export default Button;
