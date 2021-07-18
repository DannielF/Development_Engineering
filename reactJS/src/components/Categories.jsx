import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children }) => (
  <div className='categories'>
    <p className='carousel__container--list'>Tu lista</p>
    {children}
  </div>
);

export default Categories;
