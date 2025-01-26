import React, { useState } from 'react';
import { fetchRecipes } from '../api';
import RecipeCard from '../components/RecipeCard';

function Home() {
  const [ingredient, setIngredient] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const searchRecipes = async () => {
    if (!ingredient) {
      alert('Please enter an ingredient.');
      return;
    }
    const results = await fetchRecipes(ingredient);
    setRecipes(results);
  };

  const addToWishlist = (recipe) => {
    if (!wishlist.some((item) => item.id === recipe.id)) {
      setWishlist([...wishlist, recipe]);
    }
  };

  return (
    <div className="home">
      <header>
        <h1>MealMate</h1>
        <div className="search-bar">
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            placeholder="Enter an ingredient..."
          />
          <button onClick={searchRecipes}>Search</button>
        </div>
      </header>
      <main>
        {recipes.length === 0 ? (
          <p>No recipes found. Try another ingredient!</p>
        ) : (
          <div className="recipes-grid">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                addToWishlist={addToWishlist}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;