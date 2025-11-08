
import { ProductCard } from '../../RouterComponents/ProductCard/ProductCard';

const products = [
    { id: 'p1', title: 'Chocolate Cake', price: 130 },
    { id: 'p2', title: 'Vanilla Pie', price: 125 },
    { id: 'p3', title: 'Strawberry Tart', price: 128 },
];

export const ProductsGallery = () => {
    return (
        <div className="productsGallery">
            {
                products.map(p => (
                    <ProductCard key={p.id} match={p} />
                ))
            }
        </div>
    );
};
