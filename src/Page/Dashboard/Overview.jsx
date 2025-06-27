import React, { useEffect, useState } from "react";
import { FaBox, FaHeart, FaUtensils } from "react-icons/fa";

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
import OverviewCard from "./OverviewCard";
import { useContext } from "react";
import { RecipeContext } from "../../ContextApi/AllRecipeDataContext/RecipeContext";

const Overview = () => {
  // const [recipes, setRecipes] = useState([]);
  const { recipes,fetchRecipes } = useContext(RecipeContext);

  const chartData = recipes.map((recipe) => ({
    name: recipe.cuisineType || "Unknown",
    value: recipe.likeCount || 0,
    time: recipe.preparationTime || 0,
  }));

  useEffect(() => {
    fetchRecipes(0, 0);
  }, []);


  return (
    <div className="space-y-8">
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
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="time" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <OverviewCard recipe={recipes}></OverviewCard>
      </div>
    </div>
  );
};

export default Overview;
