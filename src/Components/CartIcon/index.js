import React from "react";
import "./index.css";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Actions";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon">
      <FaShoppingCart className="shopping-icon" onClick={toggleCartHidden} />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
