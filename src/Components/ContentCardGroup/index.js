import React from 'react';
import ContentCard from '../ContentCard';
import './index.css';

class ContentCardGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'Electronics',
          imageUrl:
            'https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg',
          id: 1,
          linkUrl: 'shop/electronics',
        },
        {
          title: 'Appliences',
          imageUrl:
            'https://5.imimg.com/data5/OV/KM/CR/ANDROID-37090388/product-jpeg-500x500.jpg',
          id: 2,
          linkUrl: 'shop/appliences',
        },
        {
          title: 'Books',
          imageUrl:
            'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/27/11/pile-of-books.jpg',
          id: 3,
          linkUrl: 'shop/booka',
        },
        {
          title: 'Furniture',
          imageUrl:
            'https://cdn.shopify.com/s/files/1/0191/2234/products/SC-8172_9ddd60a9-5b9a-4645-9f28-279a68c88aa9_2048x.jpg?v=1538245816',
          id: 7,
          linkUrl: 'shop/furniture',
        },
        {
          title: 'Womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens',
        },
        {
          title: 'Mens',
          imageUrl:
            'https://content.api.news/v3/images/bin/6fcbdefafc6444cd030fc9527a97c763',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
        },
        {
          title: 'Kids',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSInkHOzreIGDmRinS7od-BT0PmbBc8oQc4Q&usqp=CAU',
          id: 6,
          linkUrl: 'shop/kids',
        },

        {
          title: 'Sports',
          imageUrl:
            'https://m.economictimes.com/thumb/msid-68263202,width-1200,height-900,resizemode-4,imgsize-1551391/6.jpg',
          id: 8,
          linkUrl: 'shop/sportsgoods',
        },
      ],
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
