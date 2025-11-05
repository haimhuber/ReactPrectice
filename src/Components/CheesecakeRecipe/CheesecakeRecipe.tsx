import './CheesecakeRecipe.css';

import React from 'react'
import { useState } from 'react';
export const CheesecakeRecipe = () => {
    const [showInstructions, setShowInstructions] = useState(true);
    return (
        <div className='cheese-cake'>
            <h2>Cheesecake Recipe</h2>
            <img src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg" alt="Cheesecake" />
            <button onClick={() => setShowInstructions(!showInstructions)}>
                {showInstructions ? 'Hide Instructions' : 'Show Instructions'};
            </button>
            <h3>Instructions:</h3>
            {showInstructions && <ol>
                <li>Preheat the oven to 160°C (320°F).</li>
                <li>Mix the cream cheese, sugar, and eggs.</li>
                <li>Pour into a prepared crust and bake for 45 minutes.</li>
                <li>Let it cool and refrigerate for 4 hours.</li>
            </ol>}
        </div>
    )
}
