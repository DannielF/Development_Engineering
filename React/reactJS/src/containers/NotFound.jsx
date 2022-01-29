import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => {
  return (
    <section className='error'>
      <img
        src='//live.staticflickr.com/7172/6508022985_b22200ced0_n.jpg'
        alt='Error-404'
        className='error__img'
      />
    </section>
  );
};

export default NotFound;
