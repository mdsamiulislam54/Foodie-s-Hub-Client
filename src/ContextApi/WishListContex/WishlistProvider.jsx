import React, { useState, useEffect } from "react";
import WishlistContext from "./WhislistContext";

export const WishlistProvider = ({ children }) => {
  const [wishlistData, setWishList] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // LocalStorage sync
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistData));
  }, [wishlistData]);

  // Add / Remove toggle function
  const toggleWishlist = (recipe) => {
    const exists = wishlistData.find((item) => item._id === recipe._id);
    if (exists) {
      const updated = wishlistData.filter((item) => item._id !== recipe._id);
      setWishList(updated);
    } else {
      const updated = [...wishlistData, recipe];
      setWishList(updated);
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistData, toggleWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
