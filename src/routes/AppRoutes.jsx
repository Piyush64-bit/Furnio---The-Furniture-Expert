// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout'; 
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
import Shop from '../pages/Shop/Shop';
import Cart from '../pages/Cart/Cart';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Profile from '../pages/Profile/Profile';
import Single_Product from '../pages/Single_Product/Single_Product';
import Product_Comparison from '../pages/Product_Comparison/Product_Comparison';
import CheckOut from '../pages/CheckOut/CheckOut'
import Blog from '../pages/Blog/Blog'
import Wishlist from '../pages/Wishlist/Wishlist';
import Error404 from '../pages/Error404/Error404';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Layout wrapper for all pages */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Single_Product />} />
        <Route path="/comparison" element={<Product_Comparison />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<Error404 />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;
