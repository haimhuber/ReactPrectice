
import { Link } from 'react-router-dom';

export const ProductCard = (props: { id: string; title: string; price: number }) => {
    return (
        <div className="productCard">
            <Link to={`/products/${props.id}`}>
                <h3>{props.title}</h3>
                <p>Price: ${props.price}</p>
            </Link>
        </div>
    );
};
