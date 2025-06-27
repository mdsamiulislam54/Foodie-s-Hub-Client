import React from "react";
import { RecipeContext } from "./RecipeContext";
import { useEffect } from "react";

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = React.useState([]);
  const [count, setCount] = React.useState(0);

  const fetchRecipes = async (page = 0, limit = 10, uid="") => {
    try {
      const response = await fetch(`https://food-recipe-app-server-lac.vercel.app/all-recipe?page=${page}&limit=${limit}&uid=${uid}`);
      const data = await response.json();
      console.log(data);
      
      setRecipes(data.recipes);
        setCount(data.count);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, []);

  return <RecipeContext.Provider value={{recipes,count,fetchRecipes}}>{children}</RecipeContext.Provider>;
};

export default RecipeProvider;
