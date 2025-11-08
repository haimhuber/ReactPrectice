import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import './OneCategoryDishesGallery.css';
import { useEffect, useState } from 'react';


export const OneCategoryDishesGallery = () => {
    const params = useParams();
    const [foodCategoryData, setfoodCategoryData] = useState<any[]>([]);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`);
            const data = await res.json();
            setfoodCategoryData(data.meals);
        };
        fetchData();
    }, []);

    return (
        <div className="food-category">
            <button onClick={goBack}>Go back to Categories</button>

            <div className="cards-wrapper">
                {foodCategoryData.map((category) => (
                    <div className="inner-card-category" key={category.idMeal}>
                        <h2>Meal name: {category.strMeal}</h2>
                        <img src={category.strMealThumb} alt={category.strMeal} />
                        <Link
                            to={`/food-instruction/${category.idMeal}`}
                            className="food-link"
                        >
                            View Meal Instruction
                        </Link>
                    </div>
                ))}
            </div>

            <Outlet></Outlet>
        </div>
    );
};