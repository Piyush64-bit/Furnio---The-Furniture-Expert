// src/pages/homePage/Home.jsx
import React from "react";
import Navbar from "../../layout/Navbar";
import CategorySection from "./components/CategorySection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import InspirationSlider from "./components/InspirationSlider";
import ProductGrid from "./components/ProductGrid";
import Footer from "../../layout/Footer";

const Home = () => {
  return (
    <div>
      <CategorySection />
      <GallerySection />
      <HeroSection />
      <InspirationSlider />
      <ProductGrid />
    </div>
  );
};

export default Home;
