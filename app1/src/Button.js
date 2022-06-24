import React from 'react';

const Button = ({ label = 'Exposed App1 button' }) => (
  <button className="ap1-button" onClick={() => alert('Hello from App1')}>
    {label}
  </button>
);

export default Button;
