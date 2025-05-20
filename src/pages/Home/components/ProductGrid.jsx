import React from "react";

function ProductGrid() {
  return (
      <div className="productgrid-wrapper mt-5 mb-20">
        <div className="sub-heading flex justify-center">
          <h5>Share your setup with</h5>
        </div>
        <div className="heading flex justify-center mb-5">
          <h2>#FuniroFurniture</h2>
        </div>
        <div className="image-colage flex">
          <div className="left">
            <div className="left-top flex">
              <img className="mr-5" src="src\assets\Rectangle36.png" alt="" />
              <img
                className="h-80 w-auto mt-20"
                src="src\assets\Rectangle38.png"
                alt=""
              />
            </div>
            <div className="left-bottom flex">
              <img className="mt-3" src="src\assets\Rectangle37.png" alt="" />
              <img
                className="mt-3 ml-5 h-60 w-auto"
                src="src\assets\Rectangle39.png"
                alt=""
              />
            </div>
          </div>
          <div className="middle">
            <img
              className="ml-5 mt-45 h-auto w-85"
              src="src\assets\Rectangle40.png"
              alt=""
            />
          </div>
          <div className="right">
            <div className="right-top flex">
              <img
                className="ml-5 w-auto h-90 mt-30"
                src="src\assets\Rectangle43.png"
                alt=""
              />
              <img className="ml-5" src="src\assets\Rectangle45.png" alt="" />
            </div>
            <div className="right-bottom flex">
              <img
                className="ml-5 mt-3 h-auto w-51"
                src="src\assets\Rectangle41.png"
                alt=""
              />
              <img
                className="mt-3 ml-5 h-60 w-auto"
                src="src\assets\Rectangle44.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default ProductGrid;
