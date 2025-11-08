import { Link, Outlet } from 'react-router-dom';
import './AllFoodCategoriesGallery.css';
import { useEffect, useState } from 'react';

export const AllFoodCategoriesGallery = () => {
    const [foodData, setFoodData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await res.json();
            setFoodData(data.categories);
        };
        fetchData();
    }, []);

    return (
        <div className="food-gallery">
            {foodData.map((food) => (
                <div className="food-card" key={food.idCategory}>
                    <img src={food.strCategoryThumb} alt={food.strCategory} />
                    <h3>{food.strCategory}</h3>
                    <p>{food.strCategoryDescription.substring(0, 120)}...</p>
                    {/* Correct Link with dynamic id or name */}
                    <Link to={`/food-category/${food.strCategory}`} className="food-link">
                        View Details
                    </Link>
                </div>
            ))}

            {/* Outlet for nested routes */}
            <div>
                <Outlet />
            </div>
        </div>
    );
};
