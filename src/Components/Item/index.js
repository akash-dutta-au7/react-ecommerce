import React from "react";
import Button from "../Button";
import "./index.css";
const Item = ({ id, name, imageUrl, price }) => {
  return (
    <div className="Item">
      <div className="img" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="item-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button value="Add to cart" isAddToCart />
    </div>
  );
};

export default Item;
