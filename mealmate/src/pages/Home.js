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
        <div className="recipes-grid">
          {recipes.length === 0 ? (
            <p>No recipes found. Try another ingredient!</p>
          ) : (
            recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                addToWishlist={addToWishlist}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );  