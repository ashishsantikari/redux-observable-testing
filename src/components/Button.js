import React from 'react';
import './Button.css';

const Button = ({ children, handleClick }) => (
  <button type="button" className="btn" onClick={handleClick}>
    <span>{children}</span>
  </button>
);

export default Button;
