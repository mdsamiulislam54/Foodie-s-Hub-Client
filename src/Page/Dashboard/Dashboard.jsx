import React from "react";
import { Outlet, Link, useNavigate,  } from "react-router";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../../ContextApi/userContext";
import {
  FaChartPie,
  FaBoxOpen,
  FaClipboardList,
  FaPlusCircle,
} from "react-icons/fa";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { user,logOut } = useContext(UserContext);
  const navigate = useNavigate()
  

 const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logout Successful!",
          text: "You have been logged out.",
          icon: "success",
          confirmButtonColor: "#ffd40d",
        });
        navigate('/')
      })
      .catch(() => {
        Swal.fire({
          title: "Logout Failed!",
          text: "An error occurred while logging out.",
          icon: "error",
          confirmButtonColor: "#f3274c",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="lg:flex w-11/12 mx-auto ">
        {/* Sidebar */}
        <aside className="  bg-gray-100 text-black p-6 space-y-6 relative">
          <div className="flex flex-col items-center">
            {user ? (
              <img src={user.photoURL} alt="" className="rounded-full" />
            ) : (
              <FaUserCircle size={60} />
            )}
            <p className="mt-2">Welcome, {user.displayName}</p>
          </div>

          <nav className="space-y-4">
            <Link
              to="/dashboard/overview"
              className="flex items-center gap-4 hover:text-secondary font-medium tracking-wider"
            >
              <FaChartPie /> Overview
            </Link>
            <Link
              to="/dashboard/all-items"
              className="flex items-center gap-4 hover:text-secondary font-medium tracking-wider"
            >
              <FaBoxOpen /> All Items
            </Link>
            <Link
              to="/dashboard/my-items"
              className="flex items-center gap-4 hover:text-secondary font-medium tracking-wider"
            >
              <FaClipboardList /> My Items
            </Link>
            <Link
              to="/dashboard/add-item"
              className="flex items-center gap-4 hover:text-secondary font-medium tracking-wider"
            >
              <FaPlusCircle /> Add Item
            </Link>
          </nav>

          <button onClick={handleLogOut} className="flex items-center gap-2 text-red-400 hover:text-red-600 absolute bottom-4 bg-accent btn w-full left-0  ">
            <FaSignOutAlt /> Logout
          </button>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
