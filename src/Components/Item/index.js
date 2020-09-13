import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../Redux/Actions/";
import Button from "../Button";
import "./index.css";


const Item = ({ item, addItemToCart }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="Item">
      <div className="img" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="item-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        value="Add to cart"
        isAddToCart={true}
        onClick={() => addItemToCart(item)}
      />
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(Item);
