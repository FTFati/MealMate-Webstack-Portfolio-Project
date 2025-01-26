import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe details from the API using the recipe ID
    const fetchRecipeDetails = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=f884b7ff00ec4c448873fed5048e444d`);
      const data = await response.json();
      setRecipe(data);
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.instructions}</p>
      <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">Full Recipe</a>
    </div>
  );
}

export default RecipeDetails;
