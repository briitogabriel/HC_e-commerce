import React, { useState } from "react";
import ProductItem from "../ProductItem";

import * as Style from './style';

export default function Products() {
  const [products] = useState([
    {
      id: '1',
      name: 'Cookies',
      price: 11.50,
      img: '/assets/img/products/cookies.jpg'
    },
    {
      id: '2',
      name: 'Croissant + Coffee',
      price: 13.00,
      img: '/assets/img/products/croissant.jpg'
    },
    {
      id: '3',
      name: 'Calories (Eggs, Ham, Salsages)',
      price: 19.00,
      img: '/assets/img/products/eggs.jpg'
    },
    {
      id: '4',
      name: 'Pancakes + Juice',
      price: 20.50,
      img: '/assets/img/products/pancakes.jpg'
    }
  ]);
  localStorage.setItem('products', JSON.stringify(products));
  return (
    <>
      <Style.Title>Products</Style.Title>
      <Style.Products>
        {products.map((product, index) => {
          return <ProductItem key={product.id} item={product}></ProductItem>
        })}

      </Style.Products>
    </>
  );
}