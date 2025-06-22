import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";
import bgImg from "../../assets/Bglogin.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center lg:justify-end"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="w-full max-w-md h-[570px] bg-white/30 backdrop-blur-md p-5 rounded-3xl shadow-lg mx-4 lg:relative lg:left-[-80px] flex flex-col justify-between">
        {/* Header */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <div>
              <h2 className="text-xl font-medium">
                Welcome to{" "}
                <span className="text-[#B88E2F] font-semibold">Furnio</span>
              </h2>
              <h1 className="text-3xl font-bold mt-1">Sign up</h1>
            </div>
            <div className="text-sm text-right">
              <p className="text-gray-500">Already have an account?</p>
              <Link
                to="/login"
                className="text-[#B88E2F] font-medium hover:underline"
              >
                Sign in
              </Link>
            </div>
          </div>

          {/* Social Register
          <div className="mb-2">
            <button className="flex items-center justify-center gap-3 w-full bg-blue-100 hover:bg-blue-200 text-blue-600 font-medium py-1 px-2 rounded-lg">
              <FcGoogle className="text-xl" />
              Sign up with Google
            </button>

            <div className="flex justify-center gap-3 mt-3 text-xl">
              <button className="text-blue-600 hover:text-blue-800">
                <FaFacebookF />
              </button>
              <button className="text-gray-800 hover:text-black">
                <FaApple />
              </button>
            </div>
          </div> */}

          {/* Form Fields */}
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Create Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <button className="w-full bg-[#B88E2F] hover:bg-[#8E6F24] text-white font-semibold py-2 rounded-xl shadow-md transition-all">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
