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
          linkUrl: 'shop/hats',
        },
        {
          title: 'Appliences',
          imageUrl:
            'https://5.imimg.com/data5/OV/KM/CR/ANDROID-37090388/product-jpeg-500x500.jpg',
          id: 2,
          linkUrl: 'shop/jackets',
        },
        {
          title: 'Books',
          imageUrl:
            'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/27/11/pile-of-books.jpg',
          id: 3,
          linkUrl: 'shop/sneakers',
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
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
        },
        {
          title: 'Kids',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSInkHOzreIGDmRinS7od-BT0PmbBc8oQc4Q&usqp=CAU',
          id: 6,
          linkUrl: 'shop/sneakers',
        },
        {
          title: 'Kids',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSInkHOzreIGDmRinS7od-BT0PmbBc8oQc4Q&usqp=CAU',
          id: 7,
          linkUrl: 'shop/sneakers',
        },
        {
          title: 'Kids',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSInkHOzreIGDmRinS7od-BT0PmbBc8oQc4Q&usqp=CAU',
          id: 8,
          linkUrl: 'shop/sneakers',
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
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ContentCardGroup;
