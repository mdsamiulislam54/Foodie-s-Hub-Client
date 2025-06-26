import React from 'react'
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDeleteForever } from 'react-icons/md';

const RecipesCard = ({recipe,handleDelete,handleEdit}) => {
    const { image, title,  likeCount,ingredients ,cuisineType,preparationTime,categories } = recipe;
  return (
    <div
      
      className="rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-dotted border-primary"
    >
      <img
        src={image}
        alt={title}
        className="w-50 h-50 object-contain mx-auto"
      />

      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold border-t-2 pt-2 border-dotted">{title} 

        </h2>
        <p className="text-sm">Cuisine: <span className="capitalize">{cuisineType}</span></p>
        <p className="text-sm">Preparation Time: {preparationTime} mins</p>
        <p className="text-sm">Categories: {categories?.join(", ")}</p>
        <p className="text-sm">Ingredients: {ingredients?.slice(0, 3).join(", ")}...</p>

        <div className="flex items-center justify-between">
          <p className="text-sm">❤️ {likeCount} Likes</p>
         <div className="flex justify-between gap-2   ">
                    <button
                    data-tip="Delete"                      onClick={() => handleDelete(recipe._id)}
                      className="cursor-pointer  tooltip tooltip-top"
                    >
                      <MdDeleteForever size={25} color="red" />
                    </button>
                    <button
                    data-tip="Edit"
                      onClick={() => handleEdit(recipe)}
                      className="cursor-pointer tooltip tooltip-top"
                    >
                      <AiTwotoneEdit  size={25}  />
                    </button>
                  </div>
        </div>
      </div>
    </div>
  )
}

export default RecipesCard