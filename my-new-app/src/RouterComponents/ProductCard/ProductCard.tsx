import React from "react";
import { Link } from "react-router-dom";

type Match = {
    id: string;
    title: string;
    price: number;
};

type ProductCardProps = {
    match: Match;
};

export const ProductCard: React.FC<ProductCardProps> = ({ match }) => {
    return (
        <div className="productCard">
            <Link to={`/products/${match.id}`}>
                <h3>{match.title}</h3>
                <p>Price: ${match.price}</p>
            </Link>
        </div>
    );
};
