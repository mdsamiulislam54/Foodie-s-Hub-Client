import React from "react";
import img from "../../assets/404.gif";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-5">

      <h2 className="text-6xl font-fredoka mb-6 font-bold tracking-wider animate-bounce">404</h2>

      {/* Title */}
      <h1 className="text-5xl font-bold mb-4">Oops! Page Not Found</h1>

      {/* Text */}
      <p className="text-gray-500 mb-8 text-lg max-w-xl">
        Sorry, the page you're looking for doesn't exist. It might have been
        moved or deleted.
      </p>

      {/* Go Back Button */}
      <Link
        to="/"
        className="bg-primary text-black px-6 py-3 rounded hover:bg-primary/80 transition-all duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
