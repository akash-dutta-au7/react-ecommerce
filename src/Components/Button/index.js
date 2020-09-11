import React from 'react';
import './index.css';
const Button = ({ value, isGoogleSignIn, isCreateAcount, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : isCreateAcount ? 'create-acount' : ''} btn`}
      {...otherProps}
    >
      {value}
    </button>
  );
};

export default Button;
