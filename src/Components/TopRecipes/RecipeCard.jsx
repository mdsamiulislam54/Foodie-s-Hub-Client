import React from 'react';
import { Link } from 'react-router';

const RecipeCard = ({ recipe }) => {
  const { image, title, cuisineType, likeCount } = recipe;

  return (
    <div className=" rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border-1 
      border-dotted border-primary">
      <img
        src={image}
        alt={title}
        className="w-50 h-50 object-contain mx-auto"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold  border-t-2 pt-2 border-dotted">{title}</h2>
        <p className="text-sm ">Cuisine: <span className="capitalize">{cuisineType}</span></p>
        <div className="flex items-center justify-between">
          <p className="text-sm ">❤️ {likeCount} Likes</p>
          <Link to={`/details/${recipe._id}`}  className="px-3 py-1  text-black bg-primary rounded-md font-fredoka font-medium hover:bg-primary/80 cursor-pointer transition-all duration-300">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
