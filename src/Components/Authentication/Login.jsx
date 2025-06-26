import React, { use, useState } from "react";
import { Link, useLocation } from "react-router";
import { UserContext } from "../../ContextApi/userContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { logingUser, createUserWithGoogle } = use(UserContext);
  const { state } = useLocation();

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const fromData = new FormData(form);
    const newFromData = Object.fromEntries(fromData.entries());
    console.log(newFromData);

    const { email, password } = newFromData;

    logingUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        // SweetAlert2 Success message
        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back!",
          icon: "success",
          confirmButtonColor: "#ffd40d",
        }).then(() => {
           navigate(state.from || "/");
        });
      })
      .catch((error) => {
        console.error(error);

        // SweetAlert2 Error message
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#f3274c",
        });
      });
  };
  const handleGoogleLogin = () => {
    createUserWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back!",
          icon: "success",
          confirmButtonColor: "#ffd40d",
        }).then(() => {
          navigate(state.from || "/");
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#f3274c",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-[var(--color-secondary)]">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold ">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-white text-black"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-semibold ">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                name="password"
                className="input input-bordered w-full pr-12 bg-white text-black"
                required
              />
              <div
                className="absolute top-3 right-3 cursor-pointer text-xl text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link className="text-sm text-[var(--color-secondary)] hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn w-full bg-[var(--color-primary)] border-none text-black font-bold hover:bg-yellow-400"
          >
            Login
          </button>
        </form>
        {/* OR Divider */}
        <div className="divider">OR</div>

        {/* Google Sign In Button */}
        <button
          className="btn w-full flex items-center gap-2 border border-gray-300 hover:bg-gray-100"
          onClick={handleGoogleLogin}
        >
          <FcGoogle size={24} /> Continue with Google
        </button>
        {/* Register Redirect */}
        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[var(--color-secondary)] hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
