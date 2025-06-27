import React from "react";
import { RecipeContext } from "../../ContextApi/AllRecipeDataContext/RecipeContext";
import { useContext } from "react";
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
import { useState } from "react";
import { useEffect } from "react";

const AllItems = () => {
  const { recipes, count, fetchRecipes } = useContext(RecipeContext);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(count / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];

  useEffect(() => {
    fetchRecipes(currentPage, itemsPerPage);
  }, [currentPage]);
  const chartData = recipes.map((recipe) => ({
    name: recipe.cuisineType || "Unknown",
    total: recipes.length || 0,
    time: recipe.preparationTime || 0,
  }));

  return (
    <div>
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

          <div>
            {/* table formate korbo  */}
            <table className="table w-full overflow-x-scroll">
              <thead>
                <tr>
                  <th>Images</th>
                  <th>Title</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {recipes.map((recipe,) => (
                  <tr key={recipe._id}>
                    <td>
                      <img src={recipe.image} alt={recipe.title} className="w-10 h-10  rounded-full"  />
                    </td>
                    <td>{recipe.title}</td>
                    <td>{recipe.preparationTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItems;
