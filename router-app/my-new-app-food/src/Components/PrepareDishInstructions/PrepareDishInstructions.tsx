import { useNavigate, useParams } from 'react-router-dom';
import './PrepareDishInstructions.css';
import { useEffect, useState } from 'react';

export const PrepareDishInstructions = () => {
    const { idMeal } = useParams();
    const [meal, setMeal] = useState<any>(null); // single meal object
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
                const data = await res.json();
                setMeal(data.meals ? data.meals[0] : null); // first meal
            } catch (error) {
                console.error('Failed to fetch meal:', error);
            }
        };
        fetchMeal();
    }, [idMeal]);

    if (!meal) return <p>Loading...</p>; // optional loading state

    return (
        <div className='instruction-meal'>
            <button onClick={goBack}>Go Back to meals</button>

            <div className="meal-details">
                <h2>{meal.strMeal}</h2>
                <h3>Category: {meal.strCategory}</h3>
                <h3>Area: {meal.strArea}</h3>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <p>{meal.strInstructions}</p>
            </div>
        </div>
    );
}
