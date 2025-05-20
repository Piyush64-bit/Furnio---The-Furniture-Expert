import React from "react";

function CategorySection() {
  return (
    <div className="categorysection-wrapper relative w-full h-[600px]">
      <div className="background-image-wrapper w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="src/assets/scandinavian-interior-mockup-wall-decal-background 1.png"
          alt="Interior"
        />
      </div>

      <div className="box-wrapper absolute top-1/2 left-[60%] transform -translate-y-1/2 bg-[#FFF3E3] p-10 rounded-md w-[35%] shadow-md">
        <div className="top-heading mb-2">
          <h6 className="text-sm tracking-widest font-semibold text-[#B88E2F]">
            New Arrival
          </h6>
        </div>

        <div className="headline mb-4">
          <h2 className="text-4xl font-bold text-[#B88E2F] leading-tight">
            Discover Our <br /> New Collection
          </h2>
        </div>

        <div className="p-tag mb-6">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>

        <div className="button">
          <button className="bg-[#B88E2F] text-white px-6 py-3 font-semibold hover:bg-[#a5761f] transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;