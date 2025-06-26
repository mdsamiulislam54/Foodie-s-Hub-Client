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
    userId,
  } = recipe;
  const [likeCounts, setLikeCount] = useState(likeCount);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisLiked, setisDisLiked] = useState(false);

  const handleLikeCount = () => {
    if (isLiked) {
      Swal.fire(
        "Already Liked!",
        "You have already liked this recipe.",
        "info"
      );
      return;
    }
    if (userId) {
      Swal.fire({
        title: "you don't like this recipe",
        text: "Do you want to like this recipe?",

        icon: "warning",
        showCancelButton: true,
      });
    } else {
      const updatedLikeCount = likeCounts + 1;
      setLikeCount(updatedLikeCount);
      setIsLiked(true);
      setisDisLiked(false);

      fetch(`http://localhost:5000/details/${recipe._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likeCount: likeCounts }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount === 1) {
       

            console.log("Like count updated successfully");
          }
        })
        .catch((error) => {
          console.error("Error updating like count:", error);
        });
    }
  };
  const handleDisLikeCount = () => {
    if (userId) {
      Swal.fire({
        title: "you don't Dislike this recipe",
        text: "Do you want to Dislike this recipe?",

        icon: "warning",
        showCancelButton: true,
      });
    } else {
      if (isDisLiked) {
        Swal.fire(
          "Already DisLiked!",
          "You have already Disliked this recipe.",
          "info"
        );
        return;
      }
      const updatedLikeCount = likeCounts - 1;
      setLikeCount(updatedLikeCount);
      setisDisLiked(true);
      setIsLiked(false);

      fetch(`http://localhost:5000/details/${recipe._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likeCount: likeCounts }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount === 1) {
            
            console.log("Like count updated successfully");
          }
        })
        .catch((error) => {
          console.error("Error updating like count:", error);
        });
    }
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-10 space-y-6">
      <h2 className="text-3xl font-bold text-center">{title}</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image */}
        <div className="lg:w-1/2 ">
          <img
            src={image}
            alt={title}
            className="w-full rounded-xl shadow-lg mb-5"
          />
          <div className="font-fredoka text-2xl flex justify-between items-center">
            <p>
              <strong>{likeCounts}</strong> people interested in this recipe
            </p>
            <div className="flex items-center gap-4">
              <AiFillDislike
                size={30}
                onClick={handleDisLikeCount}
                className={` cursor-pointer ${
                  isDisLiked ? "text-secondary" : ""
                }`}
              />
              <AiFillLike
                size={30}
                className={` cursor-pointer ${isLiked ? "text-secondary" : ""}`}
                onClick={handleLikeCount}
              />
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="lg:w-1/2 space-y-4">
          <p className="text-base">
            <span className="font-semibold">Cuisine Type:</span> {cuisineType}{" "}
            accordion
          </p>
          <p className="text-base">
            <span className="font-semibold">Preparation Time:</span>{" "}
            {preparationTime} mins
          </p>
          <p className="text-base">
            <span className="font-semibold">Likes:</span> ❤️ {likeCounts}
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
            <p className="text-gray-700 leading-relaxed">{instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
