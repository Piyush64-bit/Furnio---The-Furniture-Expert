import React from "react";
import CardComponent from "../../Home/components/HeroSectionComponet/CardComponent";

import image1 from "../../../assets/image1.png";
import image2 from "../../../assets/image2.png";
import image3 from "../../../assets/image3.png";
import image4 from "../../../assets/image4.png";

const Otherprods = () => {
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
  ];
  return (
    <div className="HeroSection-wrapper mt-5 mb-20">
      <div className="product-list flex flex-wrap justify-center gap-4 mt-4">
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
      <div className="bottombutton flex justify-center items-center flex-wrap gap-2 sm:gap-4 my-8">
        <button className="px-4 py-2 bg-[#B88E2F] text-white rounded transition duration-300">
          1
        </button>
        <button className="px-4 py-2 bg-[#f3eee7] text-black rounded hover:bg-[#B88E2F] hover:text-white transition duration-300">
          2
        </button>
        <button className="px-4 py-2 bg-[#f3eee7] text-black rounded hover:bg-[#B88E2F] hover:text-white transition duration-300">
          3
        </button>
        <button className="px-4 py-2 bg-[#f3eee7] text-black rounded hover:bg-[#B88E2F] hover:text-white transition duration-300">
          Next
        </button>
      </div>
    </div>
  );
};

export default Otherprods;
