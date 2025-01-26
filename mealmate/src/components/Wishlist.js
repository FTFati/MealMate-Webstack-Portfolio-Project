import React from 'react';

function Wishlist({ wishlist, removeFromWishlist }) {
  return (
    <div>
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <button onClick={() => removeFromWishlist(index)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;