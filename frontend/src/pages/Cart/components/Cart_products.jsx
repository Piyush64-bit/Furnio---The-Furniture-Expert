import React from 'react'

const Cart_products = () => {
  return (
    <div className="w-full h-auto p-4 box-border overflow-x-hidden">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left Panel */}
        <div className="left-panel flex flex-col w-full">
          <div className="bg-[#faf3ea] h-[60px] items-center justify-center hidden md:flex">
            <ul className="flex font-bold mb-0 p-4 w-full justify-center items-center">
              <li className="text-center flex-1">PRODUCT IMAGE</li>
              <li className="text-center flex-1">NAME</li>
              <li className="text-center flex-1">PRICE</li>
              <li className="text-center flex-1">QUANTITY</li>
              <li className="text-center flex-1">SUBTOTAL</li>
              <li className="text-center flex-1">REMOVE</li>
            </ul>
          </div>

          <div className="flex items-center justify-center border border-gray-300 overflow-x-auto">
            <ul className="flex flex-col md:flex-row mb-0 p-4 w-full justify-center items-center gap-4 md:gap-0 overflow-x-auto">
              <li className="text-center flex-1 min-w-[100px]">
                <img src='src/assets/image8.png' className="h-[150px] rounded-[8px] cursor-pointer hover:opacity-80 transition duration-300 mx-auto" />
              </li>
              <li className="text-center flex-1 min-w-[100px]">ASGARD SOFA</li>
              <li className="text-center flex-1 min-w-[100px]">$250,000</li>
              <li className="text-center flex-1 min-w-[100px] border border-gray-500 flex justify-center items-center rounded-[8px] font-bold">1</li>
              <li className="text-center flex-1 min-w-[100px] font-bold">$250,000</li>
              <li className="flex-1 text-center min-w-[100px]">
                <img src="src/assets/del-button.png" className="cursor-pointer hover:opacity-80 transition duration-300 mx-auto" />
              </li>
            </ul>
          </div>
        </div>

        {/* Cart Total */}
        <div className="bg-[#faf3ea] flex flex-col items-center mb-0 gap-3 p-2 w-full lg:w-auto">
          <h2>Cart Total</h2>
          <div className="flex w-[300px] justify-around">
            <p className="font-bold">SubTotal</p>
            <p className="text-gray-500">Rs. 250,000.00 </p>
          </div>
          <div className="flex w-[300px] justify-around">
            <p className="font-bold">Total</p>
            <p className="text-[#B88E2F]">Rs. 250,000.00 </p>
          </div>
          <button className="py-2 px-10 border-2 border-[#B88E2F] text-[#B88E2F] font-bold hover:bg-[#B88E2F] hover:text-white transition duration-300">
            Check Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart_products
