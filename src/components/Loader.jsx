// src/components/Loader.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { PropagateLoader } from 'react-spinners';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <PropagateLoader color="#B88E2F" size={15} />
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 font-medium">
        Loading your furniture dreams...
      </p>
    </motion.div>
  );
};

export default Loader;
