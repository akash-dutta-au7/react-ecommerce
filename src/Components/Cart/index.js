import React from "react";
import "./index.css";
import Button from "../Button";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-item"> </div>
      <Button value="CHECKOUT" isCartButton/>
    </div>
  );
};

export default Cart;
