import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, [])

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map(products => (
          <ProductItem />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
