import React from 'react';
import './index.css';
const Item = ({ id, name, imageUrl, price }) => {
  return (
    <div className='Item'>
      <div className='img' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='item-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};

export default Item;
