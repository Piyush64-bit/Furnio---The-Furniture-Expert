import React from 'react';

function GallerySection() {
  return (
    <div className="GallerySection-wrapper mt-5 px-4">
      <div className="heading flex justify-center text-center">
        <h2>Browse The Range</h2>
      </div>
      <div className="p-tag flex justify-center mb-5 text-center">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="card-section-wrapper grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row md:justify-center md:gap-x-6 lg:gap-x-10 gap-y-8">
        {/* Card 1 */}
        <div className="card-one transform transition duration-300 hover:scale-105 w-full sm:w-auto">
          <img className="h-auto w-full max-w-[300px] mx-auto" src="src/assets/Mask Group.png" alt="Dining" />
          <div className="title flex justify-center mt-3">
            <h4>Dining</h4>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-one transform transition duration-300 hover:scale-105 w-full sm:w-auto">
          <img className="h-auto w-full max-w-[300px] mx-auto" src="src/assets/Image-living room.png" alt="Living" />
          <div className="title flex justify-center mt-3">
            <h4>Living</h4>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card-one transform transition duration-300 hover:scale-105 w-full sm:w-auto">
          <img className="h-auto w-full max-w-[300px] mx-auto" src="src/assets/image 101.png" alt="Bedroom" />
          <div className="title flex justify-center mt-3">
            <h4>Bedroom</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
