import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function RecipeCard({ recipe, addToWishlist }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <Link to={`/recipe/${recipe.id}`} target="_blank" rel="noopener noreferrer">
        View Recipe
      </Link>
      {/* Wishlist Button */}
      <button
        className="wishlist-btn"
        onClick={() => addToWishlist(recipe)}
        style={{ display: 'block', marginTop: '10px', background: '#ff6666', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
      >
        ♥ Wishlist
      </button>
    </div>
  );
}

export default RecipeCard;
