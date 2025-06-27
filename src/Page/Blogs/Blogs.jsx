import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [recipesPerPage, setRecipesPerPage] = useState(3);
  const totalPages = Math.ceil(count / recipesPerPage);
  const [cuisineType, setCuisineType] = useState("");
  const pageNumbers = [...Array(totalPages).keys()];
  console.log(cuisineType);
  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/blog-recipe?page=${currentPage}&limit=${recipesPerPage}&cuisineType=${cuisineType}&searchTerm=${searchTerm}`
      );
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      setBlogs(data.blogs);
      setCount(data.count);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [currentPage, recipesPerPage, cuisineType, searchTerm]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>;

  // Latest 3 blogs for sidebar
  const latestBlogs = blogs?.slice(0, 3);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements[0].value.trim();
    setSearchTerm(searchValue);
    
  };

  return (
    <div>
      <div className="w-11/12 mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <div className="md:col-span-1 space-y-8">
          <form onSubmit={handleSearch} className="relative mb-6">
            <input
              type="text"
              placeholder="Search blog title..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded w-full  focus:outline-none relative"
            />
            <button
              type="submit"
              className="absolute right-2  h-full  text-gray-500 hover:text-orange-500 transition"
            >
              <CiSearch size={30} color="green" />
            </button>
          </form>
          <div>
            <h2 className="text-xl font-semibold mb-3">Categories</h2>
            <ul className="space-y-2 grid  grid-cols-4 gap-4">
              {blogs.map((blog, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-sm  hover:text-orange-500 cursor-pointer bg-primary/10 px-3 py-2 rounded"
                  >
                    {blog.category}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Latest Blogs</h2>
            <div className="flex flex-col space-y-4">
              {latestBlogs.map((blog, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-14 h-14 rounded object-cover"
                  />
                  <div>
                    <p className="text-sm">{blog.title}</p>
                    <p className="text-sm">{blog.preparationTime}</p>
                    <Link
                      to={`/blog-details/${blog._id}`}
                      className="text-orange-500 hover:underline text-sm"
                    >
                      Read More <FaArrowRight className="inline" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Blog Content */}
        <div className="md:col-span-2 space-y-6">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-2">
                <h2 className="text-2xl font-bold ">{blog.title}</h2>
                <p className="text-sm ">by {blog.authorName}</p>
                <p className="">{blog.content[0].slice(0, 100)}...</p>
                <Link
                  to={`/blog-details/${blog._id}`}
                  className="mt-3 flex items-center text-orange-500 hover:underline"
                >
                  Read More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
          {/* center blog post  */}
          {blogs.length === 0 && (
            <div className="text-center mt-20">
              <h2 className="text-2xl font-bold">No Blogs Found</h2>
              <p className="text-gray-500">Please try a different search.</p>
            </div>
          )}

          {/* Pagination */}
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

        {/* Right Sidebar (Optional / Popular Tags etc.) */}
        <div className="md:col-span-1 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <select
              onChange={(e) => setCuisineType(e.target.value)}
              className="border border-gray-300 bg-primary/10 px-4 py-2 rounded  w-full"
            >
              <option value="">Default</option>
              <option value="Bangladeshi">Bangladeshi</option>

              <option value="Indian">Indian</option>
              <option value="chinese">Chinese</option>
              <option value="Italian">Italian</option>
              <option value="French">French</option>
              <option value="Greek">Greek</option>
              <option value="Vietnamese">Vietnamese</option>
              <option value="American">American</option>
            </select>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-full">
                Spicy
              </span>
              <span className="px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-full">
                Dessert
              </span>
              <span className="px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-full">
                Quick
              </span>
              <span className="px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-full">
                Vegan
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
            <div className="flex space-x-4 text-orange-500 text-2xl">
              <Link>
                <FaFacebook />
              </Link>
              <Link>
                <FaYoutube />
              </Link>
              <Link>
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
