import React from 'react';
import '../assets/styles/components/Carousel.scss';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src={cover}
      alt={title}
    />
    <div className='carousel-item__details'>
      <div>
        <img src='./PlatziVideo/icons8-play-64.png' alt='Play icon' />
        <img src='./PlatziVideo/icons8-plus-64.png' alt='Plus icon' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>{` ${year} ${contentRating} ${duration} `}</p>
    </div>
  </div>
);

export default CarouselItem;
