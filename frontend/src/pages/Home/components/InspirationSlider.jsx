import React, { useState } from "react";
import Rectangle24 from "../../../assets/Rectangle24.png";
import Rectangle25 from "../../../assets/Rectangle25.png";
import Rectangle45 from "../../../assets/Rectangle45.png";
import { ChevronRight } from "lucide-react";

const images = [Rectangle24, Rectangle25, Rectangle45];

function InspirationSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className="flex flex-col lg:flex-row items-center px-6 py-12 lg:p-10 gap-8"
      style={{ backgroundColor: "#FCF8F3" }}
    >
      {/* Left Text Section */}
      <div className="flex-1 text-center lg:text-left lg:pr-10 lg:ml-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
          50+ Beautiful rooms <br className="hidden md:block" />
          inspiration
        </h1>
        <p className="text-md md:text-lg text-gray-600 mb-4">
          Our designer already made a lot of beautiful <br className="hidden md:block" />
          prototype of rooms that inspire you
        </p>
        <button className="bg-[#B88E2F] text-white px-6 py-2 font-semibold hover:bg-[#a5761f] transition">
          Explore More
        </button>
      </div>

      {/* Carousel Section */}
      <div className="flex-1 relative w-full flex flex-col items-center">
        {/* Carousel Track */}
        <div className="flex gap-3 md:gap-5 items-center transition-all duration-500 ease-in-out">
          {images.map((img, index) => {
            const relativeIndex = (index - currentIndex + images.length) % images.length;

            if (relativeIndex > 2) return null;

            // Responsive widths
            const widths = ["80%", "60%", "40%"];
            const zIndex = 10 - relativeIndex * 2;
            const opacity = 1 - relativeIndex * 0.2;
            const scale = 1 - relativeIndex * 0.05;

            return (
              <div
                key={index}
                className="transition-all duration-500 ease-in-out"
                style={{
                  width: widths[relativeIndex],
                  transform: `scale(${scale})`,
                  zIndex,
                  opacity,
                }}
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[250px] md:h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
            );
          })}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                index === currentIndex ? "bg-[#B88E2F]" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>

        {/* Arrow Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-[#B88E2F] hover:bg-[#a57e29] transition text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-xl z-30"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}

export default InspirationSlider;
