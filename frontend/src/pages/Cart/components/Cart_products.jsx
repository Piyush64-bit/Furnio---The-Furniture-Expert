import React from 'react'

const Cart_products = () => {
  return (
    <div class="w-screen h-auto p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="left-panel flex flex-col w-full">
          <div className="bg-[#faf3ea] h-[60px] items-center justify-center hidden md:flex">
            <ul class="flex font-bold mb-0 p-4 w-full justify-center items-center">
              <li class=" text-center flex-1">PRODUCT IMAGE</li>
              <li class=" text-center flex-1">NAME</li>
              <li class=" text-center flex-1">PRICE</li>
              <li class=" text-center flex-1">QUANTITY</li>
              <li class=" text-center flex-1">SUBTOTAL</li>
              <li class=" text-center flex-1">REMOVE</li>
            </ul>
          </div>
          <div className="flex items-center justify-center border border-gray-300">
            <ul class="flex flex-col md:flex-row mb-0 p-4 w-full justify-center items-center gap-4 md:gap-0">
              <li class="text-center flex-1">
                <img src='src/assets/image8.png' class=" h-[150px] rounded-[8px] cursor-pointer hover:opacity-80 transition duration-300 mx-auto"></img>
              </li>
              <li class=" text-center flex-1">ASGARD SOFA</li>
              <li class=" text-center flex-1">$250,000</li>
              <li class=" text-center flex-1 border-1 border-gray-500 flex justify-center items-center rounded-[8px] font-bold">1</li>
              <li class=" text-center flex-1 font-bold">$250,000</li>
              <li class="flex-1 text-center">
                <img src="src/assets/del-button.png" class="cursor-pointer hover:opacity-80 transition duration-300 mx-auto"/>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-[#faf3ea]  flex flex-col items-center mb-0 gap-3 p-2">
          <h2>Cart Total</h2>
          <div className="flex w-[300px] justify-around">
            <p class="font-bold">SubTotal</p>
            <p class="text-gray-500">Rs. 250,000.00 </p>
          </div>
          <div className="flex w-[300px] justify-around">
            <p class="font-bold">Total</p>
            <p class="text-[#B88E2F]">Rs. 250,000.00 </p>
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