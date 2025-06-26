import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-20  bg-accent text-gray-800 mt-10">
      <div className="w-10/12 mx-auto grid md:grid-cols-3 gap-10">

        {/* Column 1 */}
        <div>
             <h2 className="text-3xl font-fredoka font-bold mb-4">
              Foodie's
              <span className="bg-primary px-1 rounded-md text-black"> Hub</span>
            </h2>
          <p className="mb-3">123 Food Street, Flavor Town, BD</p>
          <p>Email: contact@foodieshub.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <div className="flex flex-wrap">
            {/* First 5 */}
            <div className="w-1/2 flex flex-col space-y-2">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="*" className="hover:underline">About Us</Link>
              <Link to="/my-recipes" className="hover:underline">My Recipes</Link>
              <Link to="*" className="hover:underline">Services</Link>
              <Link to="/add-recipe" className="hover:underline">Add Recipes</Link>
            </div>
            {/* Next 5 */}
            <div className="w-1/2 flex flex-col space-y-2">
              <Link to="*" className="hover:underline">Blog</Link>
              <Link to="*" className="hover:underline">FAQ</Link>
              <Link to="*" className="hover:underline">Terms</Link>
              <Link to="*" className="hover:underline">Privacy</Link>
              <Link to="*" className="hover:underline">Contact</Link>
            </div>
          </div>
        </div>

        {/* Column 3: Newsletter */}
        <div>
          <h2 className="text-xl font-bold mb-4">Subscribe Newsletter</h2>
          <p className="mb-4 text-sm">Get the latest updates and offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="input w-full border bg-white border-gray-300 rounded-l px-4 py-2"
            />
            <button className="bg-primary text-black hover:bg-primary/80 px-4 cursor-pointer rounded-r">Subscribe</button>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-5 text-xl">
            <a href="#" className="hover:text-black"><FaFacebookSquare color='blue' /></a>
            <a href="#" className="hover:text-black"><FaTwitterSquare  color='green'/></a>
            <a href="#" className="hover:text-black"><FaInstagramSquare color='red' /></a>
            <a href="#" className="hover:text-black"><FaLinkedinIn color='blue' /></a>
          </div>
        </div>
        
      </div>

          {/* Copyright */}
      <div className="text-center mt-10 text-sm py-4 border-t border-gray-300">
       <p className="text-center"> © {new Date().getFullYear()} Foodie's Hub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
