import './ProductCard.css';
import React from 'react'

type ProductProps = {
    name: string;
    price: number;
    inStock: boolean;

}

const ProductCard: React.FC<ProductProps> =
    ({ name, price, inStock }) => {
        return (
            <div className='product-card'>
                <h3>Name: {name}</h3>
                <p>Price: {price}$</p>
                <p>In Stock : {inStock ? 'No' : 'Yes'}</p>
            </div>
        );
    }

export default ProductCard;

