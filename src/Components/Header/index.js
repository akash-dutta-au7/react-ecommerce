import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './index.css';

const Header = () => {
  return (
    <div>
      <div className='header'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='searchbar'>
          <input
            className='searchfield'
            type='text'
            placeholder='Search for products'
          />
        </div>
        <div className='nav-menus'>
          <Link className='menu' to='/shop'>
            SHOP
          </Link>
          <Link className='menu' to='/signin'>
            SIGN IN
          </Link>
          <Link className='menu' to='/register'>
            REGISTER
          </Link>
          <Link className='menu' to='/cart'>
            CART
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
