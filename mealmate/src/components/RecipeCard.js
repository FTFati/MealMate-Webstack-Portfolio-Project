import React from 'react';

function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <a href={`https://spoonacular.com/recipes/${recipe.id}`} target="_blank" rel="noopener noreferrer">
                View Recipe
            </a>
        </div>
    );
}

export default RecipeCard;