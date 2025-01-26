import React from 'react';
import { FaHeart } from 'react-icons/fa';

function RecipeCard({ recipe, addToWishlist }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <button className="wishlist-btn" onClick={() => addToWishlist(recipe)}>
        <FaHeart />
      </button>
      <a
        href={`https://spoonacular.com/recipes/${recipe.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Recipe
      </a>
    </div>
  );
}

export default RecipeCard;