import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";
import { IoIosArrowRoundBack } from "react-icons/io";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(id);

  const fetchBlogDetails = async () => {
    try {
      const res = await fetch(`http://localhost:5000/recipe-details/${id}`);
      if (!res.ok) throw new Error("Failed to fetch blog details");
      const data = await res.json();
      setBlog(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogDetails();
  }, [id]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
  if (!blog) return null;

  return (
    <div className="w-11/12 mx-auto py-10">
      
       
     
      <div className="max-w-4xl mx-auto">
         <Link to={'/blogs'} className="flex items-center  text-sm underline mb-4 w-20 font-normal bg-primary/30   "> <IoIosArrowRoundBack size={24}/> Blog</Link>
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-lg"
        />
        <h1 className="text-4xl font-bold mt-6 mb-2">{blog.title}</h1>
        <div className="flex items-center gap-3 mb-6">
          <img
            src={blog.authorPhoto}
            alt={blog.authorName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">{blog.authorName}</p>
            <p className="text-gray-500 text-sm">
              {new Date(blog.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Blog Content */}
        <div className="space-y-6 text-gray-800 leading-8 text-lg">
          {blog.content.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Social Share */}
        <div className="mt-10 flex items-center space-x-6 text-orange-500 text-2xl">
          <h2 className="text-xl font-semibold">Share:</h2>
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
  );
};

export default BlogDetails;
