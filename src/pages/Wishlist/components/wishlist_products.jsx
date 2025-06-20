import React from 'react';

const Wishlist_products = () => {
  return (
    <div className="w-screen h-auto p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="left-panel flex flex-col w-full">
          <div className="bg-[#faf3ea] h-[60px] items-center justify-center hidden md:flex">
            <ul className="flex font-bold mb-0 p-4 w-full justify-center items-center">
              <li className="text-center flex-1">PRODUCT IMAGE</li>
              <li className="text-center flex-1">NAME</li>
              <li className="text-center flex-1">PRICE</li>
              <li className="text-center flex-1">ACTION</li>
              <li className="text-center flex-1">REMOVE</li>
            </ul>
          </div>

          {/* Wishlist Item Row */}
          <div className="flex items-center justify-center border border-gray-300">
            <ul className="flex flex-col md:flex-row mb-0 p-4 w-full justify-center items-center gap-4 md:gap-0">
              <li className="text-center flex-1">
                <img
                  src="src/assets/image8.png"
                  className="h-[150px] rounded-[8px] cursor-pointer hover:opacity-80 transition duration-300 mx-auto"
                  alt="Product"
                />
              </li>
              <li className="text-center flex-1">ASGARD SOFA</li>
              <li className="text-center flex-1">$250,000</li>
              <li className="text-center flex-1">
                <button className="py-2 px-4 border border-[#B88E2F] text-[#B88E2F] font-bold hover:bg-[#B88E2F] hover:text-white transition duration-300 rounded-md">
                  Move to Cart
                </button>
              </li>
              <li className="text-center flex-1">
                <img
                  src="src/assets/del-button.png"
                  className="cursor-pointer hover:opacity-80 transition duration-300 mx-auto"
                  alt="Remove"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist_products;
