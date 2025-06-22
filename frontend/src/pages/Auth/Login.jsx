import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";
import bgImg from "../../assets/Bglogin.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center lg:justify-end"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="w-full max-w-md h-[570px] bg-white/30 backdrop-blur-md p-5 rounded-3xl shadow-lg mx-4 lg:relative lg:left-[-80px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <div>
            <h2 className="text-xl font-medium">
              Welcome to <span className="text-[#B88E2F] font-semibold">Furnio</span>
            </h2>
            <h1 className="text-4xl font-bold mt-1">Sign in</h1>
          </div>
          <div className="text-sm text-right">
            <p className="text-gray-500">No Account?</p>
            <Link
              to="/register"
              className="text-[#B88E2F] font-medium no-underline hover:underline visited:text-[#B88E2F]"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Social Login */}
        <div className="mb-3">
          <button className="flex items-center justify-center gap-3 w-full bg-blue-100 hover:bg-blue-200 text-blue-600 font-medium py-2 px-4 rounded-lg">
            <FcGoogle className="text-xl" />
            Sign in with Google
          </button>

          <div className="flex justify-center gap-4 mt-4 text-xl">
            <button className="text-blue-600 hover:text-blue-800">
              <FaFacebookF />
            </button>
            <button className="text-gray-800 hover:text-black">
              <FaApple />
            </button>
          </div>
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">
            Enter your username or email address
          </label>
          <input
            type="email"
            placeholder="Username or email address"
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Enter your Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
          />
          <div className="text-right mt-1">
            <button className="text-sm text-blue-600 hover:underline">Forgot Password</button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button className="w-full bg-[#B88E2F] hover:bg-[#8E6F24] text-white font-semibold py-2 px-4 shadow-md transition-all">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
