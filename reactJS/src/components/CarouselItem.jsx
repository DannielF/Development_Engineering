import React from 'react';
import '../assets/styles/components/Carousel.scss';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src='./Photos/photo1.jpg'
      alt='groups'
    />
    <div className='carousel-item__details'>
      <div>
        <img src='./PlatziVideo/icons8-play-64.png' alt='Play icon' />
        <img src='./PlatziVideo/icons8-plus-64.png' alt='Plus icon' />
      </div>
      <p className='carousel-item__details--title'>Titulo descriptivo</p>
      <p className='carousel-item__details--subtitle'>2020 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarouselItem;
