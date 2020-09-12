import React from "react";
import "./index.css";
const Button = ({
  value,
  isGoogleSignIn,
  isCreateAcount,
  isCartButton,
  isAddToCart,
  ...otherProps
}) => {
  return (
    <button
      className={`${
        isAddToCart
          ? "add-to-cart"
          : isCartButton
          ? "cart-button"
          : isGoogleSignIn
          ? "google-sign-in"
          : isCreateAcount
          ? "create-acount"
          : ""
      } btn`}
      {...otherProps}
    >
      {value}
    </button>
  );
};

export default Button;
