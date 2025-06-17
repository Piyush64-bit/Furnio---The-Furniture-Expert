import React from "react";

function CategorySection() {
  return (
    <div className="categorysection-wrapper relative w-full min-h-[450px] h-auto py-12 md:h-[600px] md:py-0">
      <div className="background-image-wrapper w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="src/assets/scandinavian-interior-mockup-wall-decal-background 1.png"
          alt="Interior"
        />
      </div>

      <div className="box-wrapper absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] p-6 sm:w-[70%] sm:p-8 md:w-[50%] md:left-[55%] lg:left-[60%] lg:w-[40%] xl:w-[35%] lg:p-10 lg:-translate-x-0 bg-[#FFF3E3] rounded-md shadow-md">
        <div className="top-heading mb-2">
          <h6 className="text-sm tracking-widest font-semibold text-[#B88E2F]">
            New Arrival
          </h6>
        </div>

        <div className="headline mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#B88E2F] leading-tight">
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