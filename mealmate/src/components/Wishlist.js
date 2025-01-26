import React, { useState } from 'react';

function Wishlist() {
    const [wishlist, setWishlist] = useState([]);

    return (
        <div>
            <h2>My Wishlist</h2>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                wishlist.map((item, index) => (
                    <div key={index}>
                        <p>{item.title}</p>
                        <button onClick={() => setWishlist(wishlist.filter((_, i) => i !== index))}>
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Wishlist;