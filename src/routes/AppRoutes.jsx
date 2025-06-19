// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout'; 
import Home from '../pages/Home/Home';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';
import Shop from '../pages/Shop/Shop';
import Cart from '../pages/Cart/Cart';
import Single_Product from '../pages/Single_Product/Single_Product'
import Product_Comparison from '../pages/Product_Comparison/Product_Comparison'
const AppRoutes = () => {
  return (
    <Routes>
      {/* Layout wrapper for all pages */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* Loads on '/' */}
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product" element={<Single_Product/>} />
        <Route path="/comparison" element={<Product_Comparison/>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
