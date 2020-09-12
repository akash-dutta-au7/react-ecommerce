import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { auth } from "../../Firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Cart from "../Cart";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";
import CartIcon from "../CartIcon";
import "./index.css";

const Header = ({ currentUser, hidden }) => {
  // const cartHandler = () => {
  //   if (currentUser) <Redirect to="/cart" />;
  //   else <Redirect to="/signin" />;
  // };
  return (
    <div>
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="searchbar">
          <input
            className="searchfield"
            type="text"
            placeholder="Search for products"
          />
        </div>

        <div className="nav-menus">
          <Link className="menu" to="/shop">
            Shop
          </Link>

          {currentUser ? (
            <div
              className="menu"
              style={{ cursor: "pointer" }}
              onClick={() => auth.signOut()}
              data-tip
              data-for="sign-out"
            >
              <ReactTooltip id="sign-out" type="error" effect="solid">
                <span>CLICK TO SIGN OUT</span>
              </ReactTooltip>
              Hello, there!
              <Redirect to="/" />
            </div>
          ) : (
            <div>
              <Link className="menu" to="/register">
                Register
              </Link>
              <Link className="menu" to="/signin">
                Sign In
              </Link>
            </div>
          )}

          {/*<Link
            onClick={() => {
              currentUser ? <Redirect to="/cart" /> : <Redirect to="/signin" />;
            }}
            to="/cart"
          ></Link>*/}
          <CartIcon />
        </div>
        { !hidden ? <Cart /> : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  //here 'userReducer' in the userReducer function in user.reducer.js
  currentUser: state.userReducer.currentUser,
  hidden: state.cartReducer.hidden,
});
export default connect(mapStateToProps, null)(Header);
