import React from 'react'
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
      }
    ]
  return (
    <div className="HeroSection-wrapper mt-5 mb-20">
      <div className="heading flex justify-center">
        <h2>Related Products</h2>
      </div>
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
      <div className="bottombutton flex justify-center mt-5">
        <button className="py-2 px-10 border-2 border-[#B88E2F] text-[#B88E2F] font-bold hover:bg-[#B88E2F] hover:text-white transition duration-300">
          Show More
        </button>
      </div>
    </div>
  )
}

export default Otherprods