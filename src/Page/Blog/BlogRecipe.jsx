import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const BlogRecipe = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlog = async () => {
    try {
      const response = await fetch("http://localhost:5000/blog-recipe?limit=6");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setBlog(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error)
    return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  if (blog.length === 0)
    return <div className="text-center py-20">No blog posts available.</div>;

  const mainBlog = blog[0];
  const recentBlogs = blog?.slice(1, 4);

  // 📌 date format helper
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="py-20 bg-base-100 ">
      <div className="w-8/12 mx-auto text-center mb-12 ">
        <h2 className="text-4xl font-bold mb-4 ">
          🍳 Latest From Our Foodie's Hub Blog
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Discover mouth-watering recipes, expert cooking tips, and inspiring
          stories from chefs around the world. Stay updated with the latest food
          trends and learn how to create restaurant-quality dishes at home.
          Explore our hand-picked articles crafted just for passionate food
          lovers like you!
        </p>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Main Blog */}
        <div
          className="md:col-span-2 relative bg-cover bg-center p-8 rounded-lg shadow-lg text-white overflow-hidden rounded-md"
          style={{
            backgroundImage: `url(${mainBlog.coverImage})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-[1]"></div>

          {/* Content */}
          <div className="relative z-[2] flex flex-col justify-center h-full gap-5">
            <p className="text-sm text-gray-300 mb-2">
              {formatDate(mainBlog.createdAt)}
            </p>
            <h2 className="text-3xl font-bold mb-4">{mainBlog.title}</h2>
            <p>{mainBlog.content.slice(0, 1)}..</p>

            <Link
              to={`/blog-details/${mainBlog._id}`}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Read Full Blog <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Recent Blog List */}
        <div className="space-y-6">
          {recentBlogs?.map((item) => (
            <div
              key={item._id}
              className=" p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <p className="text-sm  mb-1">{formatDate(item.createdAt)}</p>
              <h4 className="text-lg font-semibold mb-2 ">{item.title}</h4>
              <p className="text-base leading-relaxed whitespace-pre-line mb-6">
                {item.content?.slice(0, 1)}...
              </p>
              <Link
                to={`/blog-details/${item._id}`}
                className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
              >
                Read More <FaArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogRecipe;
