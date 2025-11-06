import './ProductListRevised.css';
import ProductCard from '../ProductCard/ProductCard';
import React from 'react'

export const ProductListRevised = () => {

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
                <div key={index}>
                    <ProductCard
                        name={product.name}
                        price={product.price}
                        inStock={product.inStock}
                    ></ProductCard>
                </div>
            )}
        </div>
    )
}
