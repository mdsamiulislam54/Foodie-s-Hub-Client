import React, { useContext } from "react";
import WishlistContext from "../../ContextApi/WishListContex/WhislistContext";
import { Link } from "react-router";
import { FaTimes, FaEye } from "react-icons/fa";

const WishlistCart = ({ isClose }) => {
  const { wishlistData, toggleWishlist } = useContext(WishlistContext);

  if (!isClose) return null;

  return (
    <div className="fixed top-0 right-0 w-[85%] sm:w-[50%] md:w-[30%] h-screen bg-gradient-to-tr from-primary/55 bg-white text-black shadow-2xl z-50 overflow-y-auto p-4">
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <h2 className="text-2xl font-bold">My Wishlist ({wishlistData.length})</h2>
        <button onClick={isClose}>
          <FaTimes size={22} />
        </button>
      </div>

      {wishlistData.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No items in your wishlist!</p>
      ) : (
        <div className="space-y-4">
          {wishlistData.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-3 border border-gray-300 p-3 rounded-lg shadow-sm hover:shadow transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  Time: {item.preparationTime || "N/A"} min
                </p>
              </div>
              <Link to={`/details/${item._id}`}>
                <button className="p-2 bg-primary text-black rounded hover:bg-primary/80 transition">
                  <FaEye />
                </button>
              </Link>
              <button
                onClick={() => toggleWishlist(item)}
                className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistCart;
