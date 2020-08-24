import React from 'react';
import './index.css';

const ContentCard = ({ title, imageUrl }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='main-container'
      >
        <div className='content-container'>
          <h1 className='title'>{title}</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
