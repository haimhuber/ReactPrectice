import { products } from '../../NavBarInfo';
import { ProductCard } from '../ProductCard/ProductCard';


export const ProductsGallery = () => {
    return (
        <div className="productsGallery">
            {
                products.map(p => (
                    <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} />
                ))
            }
        </div>
    );
};
