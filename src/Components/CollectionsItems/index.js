import React from 'react';
import Item from '../Item';
import './index.css';

const CollectionsItems = ({ title, items }) => {
  return (
    <div className='CollectionsItems'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionsItems;
