import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { auth } from "../../Firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { FaShoppingCart } from "react-icons/fa";
import {connect} from 'react-redux'
import ReactTooltip from "react-tooltip";
import "./index.css";

const Header = ({ currentUser }) => {
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

          <Link className="menu" to="/cart">
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  //here 'userReducer' in the userReducer function in user.reducer.js
  currentUser: state.userReducer.currentUser
})
export default connect(mapStateToProps, null)(Header);
