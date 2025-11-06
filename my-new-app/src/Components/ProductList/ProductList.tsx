import './ProductList.css';

import React from 'react'

export const ProductList = () => {
    const products = [
        { id: 1, name: "Laptop", price: 4500, inStock: true },
        { id: 2, name: "Phone", price: 2800, inStock: false },
        { id: 3, name: "Headphones", price: 320, inStock: true },
        { id: 4, name: "Keyboard", price: 150, inStock: true },
        { id: 5, name: "Camera", price: 1200, inStock: false },
]; 
  return (
    <div>
        {products.map((product, index) => 
        <div key={index} className='product-map'>
            <h2>{product.name}</h2>
            <h2>{product.price}$</h2>
            <h2>{product.inStock ? "True" : "False"}</h2>
        </div>
        )}
        
    </div>
  )
}
