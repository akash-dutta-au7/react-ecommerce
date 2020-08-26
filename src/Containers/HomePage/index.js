import React from 'react';
import ContentCardGroup from '../../Components/ContentCardGroup';
import NavBar from '../../Components/NavBar';
import Header from '../../Components/Header';
import './index.css';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <NavBar />
      <Header />
      <ContentCardGroup />
    </div>
  );
};

export default HomePage;
