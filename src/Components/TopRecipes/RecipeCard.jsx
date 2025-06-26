import React, { useContext } from "react";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router";
import WishlistContext from "../../ContextApi/WishListContex/WhislistContext";

const RecipeCard = ({ recipe }) => {
  const { image, title, cuisineType, likeCount, _id } = recipe;

  const { wishlistData, toggleWishlist } = useContext(WishlistContext);

  // Check if this recipe is in wishlist
  const isFavorite = wishlistData.some((item) => item._id === _id);

 

  return (
    <div className="rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border-1 border-dotted border-primary p-2">
      <div className="overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-70 object-cover hover:scale-105 transition-all duration-300"
        />
        <button
          onClick={() => toggleWishlist(recipe)}
          className={`absolute top-2 right-2 `}
        >
          {isFavorite ? (
            <MdOutlineFavorite color="red" size={30} />
          ) : (
            <MdFavoriteBorder size={30} color="red"/>
          )}
        </button>
      </div>
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold border-t-2 pt-2 border-dotted">{title}</h2>
        <p className="text-sm">Cuisine: <span className="capitalize">{cuisineType}</span></p>
        <div className="flex items-center justify-between">
          <p className="text-sm">❤️ {likeCount} Likes</p>
          <Link
            to={`/details/${_id}`}
            className="px-3 py-1 text-black bg-primary rounded-md font-fredoka font-medium hover:bg-primary/80 cursor-pointer transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
