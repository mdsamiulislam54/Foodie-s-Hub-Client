import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../ContextApi/userContext";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import RecipesCard from "./RecipesCard";

const MyRecipes = () => {
  const { user } = useContext(UserContext);
  const [myRecipes, setMyRecipes] = useState([]);

  const [recipe, setRecipe] = useState({});

  // fetch my recipes
  const fetchMyRecipes = async () => {
    const res = await fetch(`http://localhost:5000/recipe/${user.uid}`);
    const data = await res.json();
    setMyRecipes(data);
  };

  useEffect(() => {
    fetchMyRecipes();
  }, [user]);

  // delete recipe
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`http://localhost:5000/recipe/${id}`, {
          method: "DELETE",
        });
        Swal.fire("Deleted!", "Your recipe has been deleted.", "success");
        fetchMyRecipes();
      }
    });
  };

  const handleEdit = (recipe) => {
    setRecipe(recipe);
    const modal = document.getElementById("my_modal_4");
    modal.showModal();
  };

  // update recipe
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedRecipe = {
      image: formData.get("image"),
      title: formData.get("title"),
      ingredients: formData.get("ingredients").split(","),
      instructions: formData.get("instructions"),
      cuisineType: formData.get("cuisineType"),
      preparationTime: formData.get("preparationTime"),
      categories: formData.getAll("categories"),
      likeCount: formData.get("likeCount"),
    };

    fetch(`http://localhost:5000/recipe/${recipe._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          document.getElementById("my_modal_4").close();
          Swal.fire({
            title: "Recipe Updated Successfully!",
            text: "Your recipe has been updated.",
            icon: "success",
            draggable: true,
          });
          form.reset();

          fetchMyRecipes();
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Failed to update the recipe.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="min-h-screen">
      <h2 className="text-3xl font-bold text-center my-10 font-fredoka">
        My Recipes
      </h2>
      {myRecipes.length === 0 ? (
        <div className="flex items-center justify-center h-screen">
          <h2 className="text-2xl font-bold text-gray-500">
            No recipes found. Please add some recipes.
          </h2>
        </div>
       
      ) : (
        <div className="grid gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-11/12 mx-auto">
          {myRecipes.map((recipe) => (
             <RecipesCard key={recipe._id} recipe={recipe} handleDelete={handleDelete} handleEdit={handleEdit}></RecipesCard>
          ))}
        </div>
      )}

      {/* Update Modal */}

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-10/12 max-w-7xl ">
          <div className="w-10/12 mx-auto my-10">
            <h2 className="text-3xl font-bold mb-6">Update Recipe</h2>
            <form
              onSubmit={handleUpdate}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {/* Image URL */}
              <fieldset className="border border-gray-200 p-4 rounded-xl">
                <label className="label font-semibold">Image URL</label>
                <input
                  type="text"
                  name="image"
                  defaultValue={recipe?.image}
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
                  defaultValue={recipe?.title}
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
                  defaultValue={
                    recipe.ingredients ? recipe.ingredients.join(",") : ""
                  }
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
                  defaultValue={recipe?.instructions}
                  className="textarea textarea-bordered w-full"
                  placeholder="Write cooking instructions"
                ></textarea>
              </fieldset>

              {/* Cuisine Type */}
              <fieldset className="border border-gray-200 p-4 rounded-xl">
                <label className="label font-semibold">Cuisine Type</label>
                <select
                  name="cuisineType"
                  className="select select-bordered w-full"
                >
                  <option value="">{recipe?.cuisineType}</option>
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
                <label className="label font-semibold">
                  Preparation Time (min)
                </label>
                <input
                  type="number"
                  required
                  defaultValue={recipe?.preparationTime}
                  name="preparationTime"
                  className="input input-bordered w-full"
                  placeholder="Enter preparation time"
                />
              </fieldset>

              {/* Categories */}
              <fieldset className="border border-gray-200 p-4 rounded-xl lg:col-span-2">
                <label className="label font-semibold mb-2">Categories</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map(
                    (item) => (
                      <label key={item} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="categories"
                          value={item}
                          defaultChecked={recipe.categories?.includes(item)}
                        />{" "}
                        {item}
                      </label>
                    )
                  )}
                </div>
              </fieldset>

              {/* Like Count */}
              <fieldset className="border border-gray-200 p-4 rounded-xl">
                <label className="label font-semibold">Like Count</label>
                <input
                  type="number"
                  defaultValue={recipe?.likeCount}
                  required
                  name="likeCount"
                  className="input input-bordered w-full"
                  placeholder="Enter number of likes"
                />
              </fieldset>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn bg-primary  hover:bg-primary/90 text-black lg:col-span-2 font-fredoka"
              >
                Update Recipe
              </button>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyRecipes;
