import React, { useState } from 'react';
import { fetchRecipes } from '../api';
import RecipeCard from '../components/RecipeCard';

function Home() {
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
        <div>
            <header>
                <h1>MealMate</h1>
                <input
                    type="text"
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                    placeholder="Enter an ingredient..."
                />
                <button onClick={searchRecipes}>Search</button>
            </header>
            <main>
                {recipes.length === 0 ? (
                    <p>No recipes found. Try another ingredient!</p>
                ) : (
                    recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
                )}
            </main>
        </div>
    );
}

export default Home;