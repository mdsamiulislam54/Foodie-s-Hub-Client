import React, { use, useEffect, useRef, useState } from "react";
import { Link } from "react-router";

import "./style.css";
import { IoSunny, IoSunnyOutline } from "react-icons/io5";
import { FaBars, FaClipboardList, FaTimes } from "react-icons/fa";

import gsap from "gsap";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { UserContext } from "../../ContextApi/userContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const [theme, setTheme] = useState("");
    const [scrollY, setScrollY] = useState(0);
  const menuRef = useRef();
  const tl = useRef(gsap.timeline({ paused: true }));

  const {user,logOut} = use(UserContext)

  useEffect(() => {
    const savedThems = localStorage.getItem("theme") || "light";
    setTheme(savedThems);
    document.documentElement.setAttribute("data-theme", savedThems);
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    tl.current.to(menuRef.current, {
      right: 0,
      duration: 0.8,
    });
  }, []);
  const handleMenu = () => {
    tl.current.play();
  };
  const handleMenuColse = () => {
    tl.current.reverse();
  };
  const [text] = useTypewriter({
    words: [
      "Search Recipes...",
      "Find Your Favorite Dish...",
      "Explore New Tastes...",
    ],
    loop: 0, // infinite loop
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });
  
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logout Successful!",
          text: "You have been logged out.",
          icon: "success",
          confirmButtonColor: "#ffd40d",
        })
      })
      .catch(() => {
      
        Swal.fire({
          title: "Logout Failed!",
          text: "An error occurred while logging out.",
          icon: "error",
          confirmButtonColor: "#f3274c",
        });
      });
  }

    useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 

  return (
    <nav className={`
      ${scrollY > 50 ? "fixed-nav  shadow-lg bg-gradient-to-br from-primary to-base-100" : "border-b border-gray-600 absolute top-0 left-0 w-full z-10 transition-all duration-500  text-white  "}
    `} >
      <div className="w-10/12 mx-auto">
        <div className="flex items-center justify-between py-3">
          <span className="flex items-center">
            <Link to={'/'} className="xl:text-3xl text-xl font-fredoka font-bold">
              Foodie's
              <span className="bg-primary px-1 rounded-md text-black"> Hub</span>
            </Link>
            <input
              type="text"
              placeholder={text}
              className=" border xl:w-[500px] lg:w-[400px] ml-40 xl:p-2.5 p-2 rounded-tl-md rounded-bl-md border-primary max-lg:hidden "
            />
            <button className=" xl:py-[11px] py-[10px] px-4 bg-primary  max-lg:hidden rounded-tr-md rounded-br-md text-black  hover:bg-primary/80 cursor-pointer transition-all duration-300">
              Search
            </button>
          </span>
          <div className="flex items-center gap-4  max-lg:hidden  ">
            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
              {
                user ?   <img
                src={user?.photoURL}
                alt="user"
                className="w-8 rounded-full"
              />:<img src="https://i.postimg.cc/br5XckZ4/banner-1.png" alt="user" className="w-8 rounded-full" />
              }
            
              
            </div>

            {
              user ?  <Link onClick={handleLogOut} className="btn px-5 text-lg font-fredoka tracking-wide bg-primary rounded-md text-black  hover:bg-primary/80 cursor-pointer transition-all duration-300">
              logout
            </Link> :  <Link to={'/login'} className="btn px-5 text-lg font-fredoka tracking-wide bg-primary rounded-md text-black  hover:bg-primary/80 cursor-pointer transition-all duration-300">
              login
            </Link>
            }
          
           
          </div>
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden cursor-pointer" onClick={handleMenu}>
            <FaBars size={28} />
          </div>
        </div>
        <div className="w-full flex justify-between items-center py-4 max-lg:hidden ">
          <div className="space-x-10">
            <Link to={"/"} className="lg:text-md  font-bold item">
              Home
            </Link>
            <Link to={"/all-recipe"} className="lg:text-md  font-bold item">
              All Recipes
            </Link>
            <Link to={"/add-recipe"} className="lg:text-md  font-bold item">
              Add Recipe
            </Link>
            <Link to={"/my-recipes"} className="lg:text-md  font-bold item">
              My Recipes
            </Link>
            <Link to={"/*"} className="lg:text-md  font-bold item">
              All Blog
            </Link>
            <Link to={"/*"} className="lg:text-md  font-bold item">
              Dashboard
            </Link>
          </div>
          <div className="flex gap-5 items-center">
            <Link onClick={toggleTheme}>
              {theme === "light" ? (
                <IoSunny size={30} />
              ) : (
                <IoSunnyOutline size={30} />
              )}
            </Link>
            <Link className="relative">
              <FaClipboardList size={30} />
              <p className="absolute -top-2 -right-2 font-bold bg-primary rounded-full px-1.5 text-black">
                0
              </p>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}

        <div
          ref={menuRef}
          className="absolute w-[70%] top-0 right-[-9999px] h-screen bg-base-100 shadow-2xl p-10"
        >
          <div className="flex justify-between items-center mb-6">
             <h2 className="text-3xl font-fredoka font-bold">
              Foodie's
              <span className="bg-primary px-1 rounded-md text-black"> Hub</span>
            </h2>
            <FaTimes
              size={28}
              onClick={handleMenuColse}
              className="cursor-pointer"
            />
          </div>

          <div className="flex">
            <input
              type="text"
              placeholder="Search Recipes..."
              className="input input-bordered w-full mb-4"
            />
            <button className="btn bg-primary   ">Search</button>
          </div>

          <div className="flex flex-col gap-4 ">
            <Link to="/">Home</Link>
            <Link to="/all-recipe">All Recipes</Link>
            <Link to="/add-recipe">Add Recipe</Link>
            <Link to="/my-recipes">My Recipes</Link>
            <Link to="/*">Blog</Link>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div onClick={toggleTheme} className="cursor-pointer">
              {theme === "light" ? (
                <IoSunny size={25} />
              ) : (
                <IoSunnyOutline size={25} />
              )}
            </div>
            <Link>
              <FaClipboardList size={30} />
            </Link>
            <Link className="btn px-5 bg-primary text-white rounded-md">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
