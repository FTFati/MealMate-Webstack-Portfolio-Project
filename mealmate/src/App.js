import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Wishlist from './components/Wishlist';

function App() {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (recipe) => {
    if (!wishlist.some((item) => item.id === recipe.id)) {
      setWishlist([...wishlist, recipe]);
    } else {
      alert('Recipe already in wishlist!');
    }
  };

  const removeFromWishlist = (index) => {
    setWishlist(wishlist.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home addToWishlist={addToWishlist} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />} />
      </Routes>
    </Router>
  );
}

export default App;