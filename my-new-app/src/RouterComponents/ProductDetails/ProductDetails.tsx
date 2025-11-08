
import { useParams, useNavigate } from 'react-router-dom';

export const ProductDetails = () => {
    const params = useParams();
    const productId = params.id;

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // go back to previous page
        // navigate(-1)
        // מחזיר לעמוד הקודם בדפדפן, כמו כפתור 
        // "Back"
        // אפשר גם 
        // navigate('/products'); 
        // אם רוצים תמיד לחזור לעמוד מוצרים
    };

    return (
        <div>
            <h2>Product Details</h2>
            <p>You selected product with id: {productId}</p>

            <button onClick={goBack}>Back to Products</button>
        </div>
    );
};
