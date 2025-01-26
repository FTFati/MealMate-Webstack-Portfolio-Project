import React, { useState } from 'react';
import { fetchRecipes } from '../api';
import RecipeCard from '../components/RecipeCard';

function Home({ addToWishlist }) {
  const [ingredient, setIngredient] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    if (!ingredient) {
      alert('Please enter an ingredient.');
      return;
    }
    const results = await fetchRecipes(ingredient);
    setRecipes(results);
  };

  return (
    <div className="home">
      <header>
        <h1>Add an ingredient to get delicious recipes tailored to what you have!</h1>
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
          <h1>No recipes found. Try another ingredient!</h1>
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