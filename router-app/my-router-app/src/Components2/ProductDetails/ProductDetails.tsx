import { useState } from 'react';
import { products as initialProducts } from '../../NavBarInfo';
import { useNavigate, useParams } from 'react-router-dom';

export const ProductDetails = () => {
    const params = useParams();
    const productId = params.id;
    const navigate = useNavigate();
    const [productList, setProductList] = useState(initialProducts);
    const goBack = () => {
        navigate(-1);
    }
    const deleteProduct = () => {
        alert("Product Deleted");
        updatedArray('1');
        navigate('/products');
    }

    const updatedArray = (id: string) => {
        setProductList(productList.filter((p) => p.id !== id))
    }

    return (
        <div>
            <h2>Product Details</h2>
            <p>You selected product with id: {productId}</p>
            <button onClick={goBack}> Back to Products</button>
            <button onClick={deleteProduct}>Click to delete product</button>
        </div>
    );
};
