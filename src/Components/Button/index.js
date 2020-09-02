import React from 'react';
import './index.css';
const Button = ({ value, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} btn`}
      {...otherProps}
    >
      {value}
    </button>
  );
};

export default Button;
