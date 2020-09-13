import React from "react";
import "./index.css";
import { connect } from "react-redux";
import CartItem from "../CartItem";
import Button from "../Button";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <div className="cart-item">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button value="CHECKOUT" isCartButton />
    </div>
  );
};

const mapStateToProps = ({cartReducer: {cartItems}}) => ({
  cartItems
});
export default connect(mapStateToProps)(Cart);
