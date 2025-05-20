// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout'; 
import Home from '../pages/Home/Home';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Layout wrapper for all pages */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* Loads on '/' */}
        <Route path="home" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
