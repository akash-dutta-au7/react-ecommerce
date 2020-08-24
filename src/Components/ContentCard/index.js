import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';

const ContentCard = ({ title, imageUrl, linkUrl, history, match }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='main-container'
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        <div className='content-container'>
          <h1 className='title'>{title}</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ContentCard);
