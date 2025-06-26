import React, { use } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../ContextApi/userContext";

const AddRecipe = () => {
  const {user} = use(UserContext)
  


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const recipeData = {
      image: formData.get("image"),
      title: formData.get("title"),
      ingredients: formData.get("ingredients").split(","),
      instructions: formData.get("instructions"),
      cuisineType: formData.get("cuisineType"),
      preparationTime: formData.get("preparationTime"),
      categories: formData.getAll("categories"),
      likeCount: formData.get("likeCount"),
      userId: user.uid,
    };
    console.log(recipeData);

    // data submit to the server
    fetch("http://localhost:5000/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          
          Swal.fire({
            title: "Recipe Added Successfully!",
            text: "Your recipe has been added to the collection.",
            icon: "success",
            draggable: true,
          });
          event.target.reset();
        }
      });
  };
  return (
    <div className="w-10/12 mx-auto my-10">
      <h2 className="text-3xl font-bold mb-6">Add a New Recipe</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Image URL */}
        <fieldset className="border border-gray-200 p-4 rounded-xl">
          <label className="label font-semibold">Image URL</label>
          <input
            type="text"
            name="image"
            className="input input-bordered w-full"
            placeholder="Enter image URL"
          />
        </fieldset>

        {/* Title */}
        <fieldset className="border border-gray-200 p-4 rounded-xl">
          <label className="label font-semibold">Title</label>
          <input
            type="text"
            required
            name="title"
            className="input input-bordered w-full"
            placeholder="Enter recipe title"
          />
        </fieldset>

        {/* Ingredients */}
        <fieldset className="border border-gray-200 p-4 rounded-xl lg:col-span-2">
          <label className="label font-semibold">Ingredients</label>
          <textarea
            name="ingredients"
            rows="3"
            required
            className="textarea textarea-bordered w-full"
            placeholder="Enter ingredients separated by commas"
          ></textarea>
        </fieldset>

        {/* Instructions */}
        <fieldset className="border border-gray-200 p-4 rounded-xl lg:col-span-2">
          <label className="label font-semibold">Instructions</label>
          <textarea
            name="instructions"
            rows="4"
            className="textarea textarea-bordered w-full"
            placeholder="Write cooking instructions"
          ></textarea>
        </fieldset>

        {/* Cuisine Type */}
        <fieldset className="border border-gray-200 p-4 rounded-xl">
          <label className="label font-semibold">Cuisine Type</label>
          <select name="cuisineType" className="select select-bordered w-full">
            <option value="">Select</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Others">Others</option>
          </select>
        </fieldset>

        {/* Preparation Time */}
        <fieldset className="border border-gray-200 p-4 rounded-xl">
          <label className="label font-semibold">Preparation Time (min)</label>
          <input
            type="number"
            required
            name="preparationTime"
            className="input input-bordered w-full"
            placeholder="Enter preparation time"
          />
        </fieldset>

        {/* Categories */}
        <fieldset className="border border-gray-200 p-4 rounded-xl lg:col-span-2">
          <label className="label font-semibold mb-2">Categories</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="categories" value="Breakfast" />{" "}
              Breakfast
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="categories" value="Lunch" /> Lunch
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="categories" value="Dinner" /> Dinner
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="categories" value="Dessert" />{" "}
              Dessert
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="categories" value="Vegan" /> Vegan
            </label>
          </div>
        </fieldset>

        {/* Like Count */}
        <fieldset className="border border-gray-200 p-4 rounded-xl">
          <label className="label font-semibold">Like Count</label>
          <input
            type="number"
            required
            name="likeCount"
            className="input input-bordered w-full"
            placeholder="Enter number of likes"
          />
        </fieldset>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn bg-primary cursor-pointer text-lg font-bold lg:col-span-2"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
