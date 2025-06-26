import React from "react";
import { Link } from "react-router";

const Addrecipe = () => {
  return (
    <div className=" py-20">
      <div className="w-10/12 mx-auto">
     
        <div className=" flex max-lg:flex-col-reverse max-lg:text-center items-center  p-5">
          <div className="  py-10 rounded-t-xl ">
            <h2 className="text-3xl font-fredoka font-bold  mb-4 tracking-wider">
              Add Your Recipe
            </h2>
           
            <p className="lg:w-8/12 mb-5 text-sm " >
              Share your favorite recipes with the world! Fill out the form
              below to add your recipe to our collection.
            </p>

            <Link to={'add-recipe'} className="px-10 py-2 rounded-md hover:bg-primary/80 cursor-pointer bg-primary border-transparent font-fredoka font-medium text-md text-black">Add Recipe</Link>
          </div>
          <div>
            <img src="https://i.postimg.cc/ydnFkb8M/food-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addrecipe;
