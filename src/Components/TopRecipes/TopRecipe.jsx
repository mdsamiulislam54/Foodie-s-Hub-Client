import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard';
import { Link } from 'react-router';

const TopRecipe = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/recipe');
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    },[])
  return (
    <div className='max-lg:py-20'>
      <div className="w-10/12 mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Top Recipes By Likes</h2>
        <p className="text-gray-400 text-center mb-8">
          Check out the most liked recipes from each category — discover what foodies love the most!
        </p>
            
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20'>
            {
                recipes.map((recipe) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)
            }  
        </div>
        <div className='my-10 text-center'>
            <Link to={'/all-recipe'} className='bg-primary p-3 px-5 text-black rounded-md font-fredoka font-medium  hover:bg-primary/80 cursor-pointer transition-all duration-300'>See All Recipes</Link>
        </div>
      </div>
    </div>
  )
}

export default TopRecipe
