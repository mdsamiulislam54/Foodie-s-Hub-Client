
import RecipesCard from "./RecipesCard";
import {  useEffect, useState } from "react";

const AllRecipes = () => {
const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [count, setCount] = useState(0);
  const [cuisineType, setCuisineType] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [recipesPerPage, setRecipesPerPage] = useState(6);
  const totalPages = Math.ceil(count / recipesPerPage);
  const pageNumbers = [...Array(totalPages).keys()];


  const fetchRecipes = async () => {
    try {
      const response = await fetch(`http://localhost:5000/all-recipe?page=${currentPage}&limit=${recipesPerPage}`);
      const data = await response.json();
      setRecipes(data.recipes);
      setCount(data.count);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, [currentPage, recipesPerPage]);

  useEffect(() => {
    if (cuisineType === "") {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter(
        (rec) => rec.cuisineType.toLowerCase() === cuisineType.toLowerCase()
      );
      setFilteredRecipes(filtered);
    }
  }, [cuisineType,recipes ]);

const handleIteaPerPageChange = (e) => {
  const value = parseInt(e.target.value);
  setRecipesPerPage(value);
  setCurrentPage(0); 
}
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
        <div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20">
            {filteredRecipes?.map((recipe) => (
              <RecipesCard key={recipe._id} recipe={recipe}></RecipesCard>
            ))}
          </div>

          <div>
            <span>{currentPage}</span>
            <div className="flex justify-center mt-8">
              <button className="btn btn-sm mr-2" disabled={currentPage === 0} onClick={() => setCurrentPage(currentPage - 1)}>
               prev
              </button>
              <div className="btn-group ">
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    className={`btn btn-sm ${
                      currentPage === number ? "bg-primary" : ""
                    }`}
                  >
                    {number }
                  </button>
                ))}
              </div>
          
              <div>
              <select className="btn btn-sm ml-2  " onChange={handleIteaPerPageChange}>
                <option value="6">6</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>
                <button className="btn btn-sm ml-2" disabled={currentPage === totalPages - 1} onClick={() => setCurrentPage(currentPage + 1)}>
                next
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRecipes;
