import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { UserContext } from "../../ContextApi/userContext";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = use(UserContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const fromData = new FormData(form);
    const newFromData = Object.fromEntries(fromData.entries());
    
    const { email, password } = newFromData;

   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Password must be at least 6 characters long and contain at least one letter and one number.",
        icon: "error",
        confirmButtonColor: "#f3274c",
        });
        return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // Update user profile
        updateProfile(user, {
          displayName: newFromData.name,
          photoURL: newFromData.photo,
        })
          .then(() => {
            Swal.fire({
              title: "Registration Successful!",
              text: "Welcome to the application.",
              icon: "success",
              confirmButtonColor: "#ffd40d",
            }).then(() => {
              form.reset();
              navigate("/");
            });
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#f3274c",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-accent)] p-5">
      <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-bold text-center text-[var(--color-secondary)]">
          Create an Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-semibold text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-1 font-semibold text-gray-600">
              Photo URL
            </label>
            <input
              type="url"
              name="photo"
              placeholder="Link to your profile photo"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-semibold text-gray-600">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                name="password"
                className="input input-bordered w-full pr-12"
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

          {/* Register Button */}
          <button
            type="submit"
            className="btn w-full bg-[var(--color-primary)] border-none text-black font-bold hover:bg-yellow-400"
          >
            Register
          </button>
        </form>

        {/* OR Divider */}
        <div className="divider">OR</div>

        {/* Google Sign In Button */}
        <button
          className="btn w-full flex items-center gap-2 border border-gray-300 hover:bg-gray-100"
          onClick={() => console.log("Google Sign In Clicked")}
        >
          <FcGoogle size={24} /> Continue with Google
        </button>

        {/* Login Redirect */}
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[var(--color-secondary)] hover:underline"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
