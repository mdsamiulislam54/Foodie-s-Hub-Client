import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import Swal from "sweetalert2";

const Details = () => {
  const recipe = useLoaderData();
  const {
    image,
    title,
    ingredients,
    instructions,
    preparationTime,
    cuisineType,
    categories,
    likeCount,

  } = recipe;
  console.log(recipe);





  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-10 space-y-6">
    

      <div className=" flex flex-col justify-center items-center gap-8">
        {/* Image */}
        <div className="lg:w-1/2 ">
          <img
            src={image}
            alt={title}
            className="w-full rounded-xl shadow-lg mb-5"
          />
         
        </div>

        {/* Details */}
        <div className="lg:w-1/2 space-y-4">
          <div className="text-md font flex justify-between "> <div>
            <span className="font-bold">Recipe Name : </span>{title} 
          </div>
            <p className="text-base">
            <span className="font-semibold">Likes:</span> ❤️ {likeCount}
          </p>
          </div>
          <p className="text-base">
            <span className="font-semibold">Cuisine Type:</span> {cuisineType}{" "}
            accordion
          </p>
          <p className="text-base">
            <span className="font-semibold">Preparation Time:</span>{" "}
            {preparationTime} mins
          </p>
        
          <p className="text-base">
            <span className="font-semibold">Categories:</span>{" "}
            {categories.join(", ")}
          </p>

          <div>
            <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside space-y-1">
              {ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
            <p className="leading-relaxed">{instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
