import React from 'react';
import RecipeCard from './RecipeCard'; // Import RecipeCard component

function Wishlist({ wishlist, removeFromWishlist }) {
  return (
    <div>
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="recipes-grid"> {/* Use same grid styling */}
          {wishlist.map((item, index) => (
            <RecipeCard
              key={item.id}
              recipe={item}
              addToWishlist={() => {}} // Pass empty function, since adding to wishlist doesn't apply here
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
