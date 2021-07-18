import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
  <div className='categories'>
    <p className='carousel__container--list'>{title}</p>
    {children}
  </div>
);

export default Categories;
