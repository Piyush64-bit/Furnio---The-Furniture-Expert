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
    <div className="flex items-center p-10" style={{ backgroundColor: "#FCF8F3" }}>
      {/* Left Text Section */}
      <div className="flex-1 pr-10 ml-10">
        <h1 className="text-4xl font-bold mb-4 leading-snug">
          50+ Beautiful rooms <br />
          inspiration
        </h1>
        <p className="text-lg text-gray-600">
          Our designer already made a lot of beautiful <br />
          prototype of rooms that inspire you
        </p>
        <button className="bg-[#B88E2F] text-white px-6 py-2 font-semibold hover:bg-[#a5761f] transition">
            Explore More
          </button>
      </div>

      {/* Carousel Section */}
      <div className="flex-1 relative overflow-hidden flex flex-col items-center">
        {/* Carousel Track */}
        <div className="flex gap-5 items-center transition-all duration-500 ease-in-out">
          {images.map((img, index) => {
            const relativeIndex = (index - currentIndex + images.length) % images.length;

            if (relativeIndex > 2) return null;

            const widths = ["60%", "45%", "35%"];
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
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
            );
          })}
        </div>

        {/* Dot Indicators - below images */}
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
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#B88E2F] hover:bg-[#a57e29] transition text-white rounded-full w-12 h-12 flex items-center justify-center shadow-xl z-30"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default InspirationSlider;
