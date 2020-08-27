import React, { Component } from 'react';
import ShopData from '../../MockData/shopData';
import CollectionsItems from '../CollectionsItems';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: ShopData,
    };
  }
  render() {
    const { categories } = this.state;
    return (
      <div className='categories'>
        {categories.map(({ id, title, routeName, items }) => (
          <CollectionsItems
            key={id}
            items={items}
            title={title}
            routeName={routeName}
          />
        ))}
      </div>
    );
  }
}

export default Categories;
