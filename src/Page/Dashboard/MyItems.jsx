import React, { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../../ContextApi/AllRecipeDataContext/RecipeContext";
import { UserContext } from "../../ContextApi/userContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MyItems = () => {
  const { user } = useContext(UserContext); // replace with your auth context value

  const { recipes, count, fetchRecipes } = useContext(RecipeContext);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(count / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];

  useEffect(() => {
    fetchRecipes(currentPage, itemsPerPage, user.uid);
  }, [currentPage, user.uid,itemsPerPage]);

  const chartData = recipes.map((recipe) => ({
    name: recipe.cuisineType || "Unknown",
    total: recipes.length || 0,
    time: recipe.preparationTime || 0,
  }));

  // // Filter recipes by user ID
  // const userRecipes = recipes?.filter((recipe) => recipe.userId === user.uid);

  return (
    <div>
      <div>
        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="time" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Images</th>
            <th>Title</th>
            <th>Cuisine</th>
            <th>Time</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe._id}>
              <td>
                <img src={recipe.image} alt={recipe.title} className="w-12 h-12 object-cover rounded-full" />
              </td>
              <td>{recipe.title}</td>
              <td>{recipe.cuisineType}</td>
              <td>{recipe.preparationTime}</td>
              <td>{recipe.likeCount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
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
              {number + 1}
            </button>
          ))}
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
  );
};

export default MyItems;
