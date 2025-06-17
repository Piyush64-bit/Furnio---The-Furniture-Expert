import React from 'react'

function GallerySection() {
  return (
    <div className="GallerySection-wrapper mt-5">
        <div className="heading flex justify-center">
            <h2>Browse The Range</h2>
        </div>
        <div className="p-tag flex justify-center mb-5" >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card-section-wrapper flex flex-col items-center gap-y-8 md:flex-row md:justify-center md:gap-x-6 lg:gap-x-10">
            <div className="card-one transform transition duration-300 hover:scale-105">
                <img className="h-auto w-full" src="src\assets\Mask Group.png" alt="" />
                <div className="title flex justify-center mt-3">
                    <h4>Dining</h4>
                </div>
            </div>
            <div className="card-one transform transition duration-300 hover:scale-105">
                <img className="h-auto w-full" src="src\assets\Image-living room.png" alt="" />
                <div className="title flex justify-center mt-3">
                    <h4>Living</h4>
                </div>
            </div>
            <div className="card-one transform transition duration-300 hover:scale-105">
                <img className="h-auto w-full" src="src\assets\image 101.png" alt="" />
                <div className="title flex justify-center mt-3">
                    <h4>Bedroom</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GallerySection