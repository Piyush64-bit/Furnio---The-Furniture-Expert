import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Error404 = () => {
  return (
    <div className="w-screen h-screen bg-[#faf3ea] flex flex-col justify-center items-center text-center p-4 overflow-hidden">
      {/* Logo bounce in */}
      <motion.img
        src="src/assets/Furnio-logo.png"
        alt="Furnio Logo"
        className="h-[60px] w-[60px] mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* 404 Zoom effect */}
      <motion.h1
        className="text-6xl font-bold text-[#B88E2F] mb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        404
      </motion.h1>

      {/* Subtitle slide in */}
      <motion.p
        className="text-xl md:text-2xl font-medium text-gray-700 mb-2"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      <motion.p
        className="text-md text-gray-500 mb-6"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Maybe it’s chilling on a designer sofa somewhere 🛋️
      </motion.p>

      {/* Button pop-in */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link to="/" className="no-underline">
          <button className="py-2 px-8 border-2 border-[#B88E2F] text-[#B88E2F] font-bold hover:bg-[#B88E2F] hover:text-white transition duration-300 rounded-md">
            Go Home
          </button>
        </Link>
      </motion.div>

      {/* Floating image fade in */}
      <motion.img
        src="src/assets/image8.png"
        alt="Decorative Furniture"
        className="h-[200px] mt-10 opacity-80 rounded-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      />
    </div>
  );
};

export default Error404;
