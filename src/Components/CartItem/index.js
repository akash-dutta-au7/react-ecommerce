import React from "react";
import "./index.css";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          INR {quantity} x {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
