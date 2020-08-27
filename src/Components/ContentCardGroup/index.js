import React from 'react';
import ContentCard from '../ContentCard';
import CategoryData from '../../MockData/categoryData';
import './index.css';

class ContentCardGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: CategoryData,
    };
  }
  render() {
    return (
      <div>
        <h1 className='HeadLine'>Shop by category</h1>
        <div className='ContentCardGroup'>
          {this.state.sections.map((section) => (
            <ContentCard
              title={section.title}
              key={section.id}
              imageUrl={section.imageUrl}
              linkUrl={section.linkUrl}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ContentCardGroup;
