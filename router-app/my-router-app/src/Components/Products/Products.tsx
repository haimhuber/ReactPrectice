import React from 'react'
import { products } from '../../NavBarInfo'

export const Products = () => {
    return (
        <div>
            {products.map((curr, index) => {
                return (
                    <div key={index}>
                        <p>Product Title: {curr.title}</p>
                        <p>Product Price: {curr.image}</p>
                        <img src={curr.image} alt="" />

                    </div>
                )
            })}
        </div>
    )
}
