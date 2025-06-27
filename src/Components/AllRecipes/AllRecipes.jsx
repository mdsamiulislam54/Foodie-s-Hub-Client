import RecipesCard from "./RecipesCard";
import { useEffect, useState } from "react";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  const [count, setCount] = useState(0);
  const [cuisineType, setCuisineType] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [recipesPerPage, setRecipesPerPage] = useState(6);
  const totalPages = Math.ceil(count / recipesPerPage);
  const pageNumbers = [...Array(totalPages).keys()];

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `https://food-recipe-app-server-lac.vercel.app/all-recipe?page=${currentPage}&limit=${recipesPerPage}&cuisineType=${cuisineType}`
      );
      const data = await response.json();
      setRecipes(data.recipes);
      setCount(data.count);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [currentPage, recipesPerPage, cuisineType]);

  const handleIteaPerPageChange = (e) => {
    const value = parseInt(e.target.value);
    setRecipesPerPage(value);
    setCurrentPage(0);
  };
  useEffect(() => {
    setCurrentPage(0);
  }, [cuisineType]);

  return (
    <div className="min-h-screen pb-20">
      <div className="w-10/12 mx-auto">
        <div>
          <fieldset className="flex justify-between space-x-3">
            <h2 className="text-3xl font-bold mb-6 text-center mt-6">
              🍽️ All Recipes
            </h2>
            <div className="flex items-center space-x-3">
              <label className="label font-semibold">
                Filter by Cuisine Type
              </label>
              <select
                name="cuisineType"
                className="select select-bordered "
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
            </div>
          </fieldset>
        </div>
        <div>
          {recipes.length === 0 ? (
            <div className="text-center mt-20">
              <h2 className="text-2xl font-bold">No Recipes Found</h2>
              <p className="text-gray-500">Please try a different filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20">
              {recipes?.map((recipe) => (
                <RecipesCard key={recipe._id} recipe={recipe}></RecipesCard>
              ))}
            </div>
          )}

          <div>
            <div className="flex justify-center mt-20">
              <button
                className="btn btn-outline hover:bg-primary transition-all duration-500 border-gray-300 mr-2"
                disabled={currentPage === 0}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                prev
              </button>
              <div className="btn-group space-x-2 ">
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    className={`btn btn-outline hover:bg-primary transition-all duration-500 border-gray-300 ${
                      currentPage === number ? "bg-primary" : ""
                    }`}
                  >
                    {number}
                  </button>
                ))}
              </div>

              <div>
                <select
                  className="btn btn-outline ml-2 border-gray-300 hover:bg-primary transition-all duration-500  "
                  onChange={handleIteaPerPageChange}
                >
                  <option value="6">6</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
              </div>
              <button
                className="btn border-gray-300 btn-outline hover:bg-primary transition-all duration-500 ml-2"
                disabled={currentPage === totalPages - 1}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
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
