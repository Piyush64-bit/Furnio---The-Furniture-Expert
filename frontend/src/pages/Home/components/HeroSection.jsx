import React from "react";
import CardComponent from "./HeroSectionComponet/CardComponent";

import image1 from "../../../assets/image1.png";
import image2 from "../../../assets/image2.png";
import image3 from "../../../assets/image3.png";
import image4 from "../../../assets/image4.png";
import image5 from "../../../assets/image5.png";
import image6 from "../../../assets/image6.png";
import image7 from "../../../assets/image7.png";
import image8 from "../../../assets/image8.png";

function HeroSection() {
  const products = [
    {
      img: image1,
      title: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
    },
    {
      img: image2,
      title: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2500.000",
    },
    {
      img: image3,
      title: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
    },
    {
      img: image4,
      title: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
    },
    {
      img: image5,
      title: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
    },
    {
      img: image6,
      title: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
    },
    {
      img: image7,
      title: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
    },
    {
      img: image8,
      title: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
    },
  ];

  return (
    <div className="HeroSection-wrapper mt-5 mb-20 px-4">
      <div className="heading flex justify-center text-center">
        <h2 className="text-2xl font-semibold">Our Products</h2>
      </div>

      {/* Responsive grid layout */}
      <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product, index) => (
          <CardComponent
            key={index}
            img={product.img}
            title={product.title}
            description={product.description}
            price={product.price}
            oldPrice={product.oldPrice}
          />
        ))}
      </div>

      {/* Show More Button */}
      <div className="bottombutton flex justify-center mt-8">
        <button className="py-2 px-10 border-2 border-[#B88E2F] text-[#B88E2F] font-bold hover:bg-[#B88E2F] hover:text-white transition duration-300">
          Show More
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
