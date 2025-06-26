import { useLoaderData } from "react-router";
import RecipesCard from "./RecipesCard";
import { useEffect, useState } from "react";

const AllRecipes = () => {
  const recipes = useLoaderData();
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [cuisineType, setCuisineType] = useState("");

  useEffect(() => {
   if (cuisineType === "") {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter(
        (rec) =>
          rec.cuisineType.toLowerCase() === cuisineType.toLowerCase()
      );
      setFilteredRecipes(filtered);
    }


  }, [cuisineType,recipes]);
  console.log(filteredRecipes);

  return (
    <div className="min-h-screen">
      <div className="w-10/12 mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center mt-6">
          🍽️ All Recipes
        </h2>
        <p className="text-center text-lg  mb-8 w-9/12 mx-auto">
          Explore a wide variety of recipes that are delicious and easy to make.
          Whether you're looking for a quick breakfast, hearty lunch, or a
          delicious dinner, we have something for every taste!
        </p>

        <div>
          <fieldset className="border border-gray-200 p-4 rounded-xl">
            <label className="label font-semibold">
              Filter by Cuisine Type
            </label>
            <select
              name="cuisineType"
              className="select select-bordered w-full"
              onChange={(e) => setCuisineType(e.target.value)}
            >
              <option value="">All Recipe</option>
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
              <option value="Indian">Indian</option>
              <option value="Chinese">Chinese</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Others">Others</option>
            </select>
          </fieldset>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-20">
          {filteredRecipes.map((recipe) => (
            <RecipesCard key={recipe._id} recipe={recipe}></RecipesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllRecipes;
