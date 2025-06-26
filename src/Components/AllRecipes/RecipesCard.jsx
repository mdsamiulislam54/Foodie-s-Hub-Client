import { useContext, useState } from "react";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router";
import WishlistContext from "../../ContextApi/WishListContex/WhislistContext";

const RecipeCard = ({ recipe }) => {
  const { image, title, cuisineType, likeCount, _id } = recipe;
  const { wishlistData, toggleWishlist } = useContext(WishlistContext);

  // Check if this recipe is in wishlist
  const isFavorite = wishlistData.some((item) => item._id === _id);

  return (
    <div className="rounded-2xl shadow-md p-2">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-70 object-cover" />
        <button
          onClick={() => toggleWishlist(recipe)}
          className={`absolute top-2 right-2 `}
        >
          {isFavorite ? (
            <MdOutlineFavorite color="red" size={30} />
          ) : (
            <MdFavoriteBorder size={30} color="red" />
          )} 
        </button>
      </div>
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm">Cuisine: {cuisineType}</p>
        <p>❤️ {likeCount} Likes</p>
        <Link to={`/details/${_id}`} className="btn bg-primary text-black">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
