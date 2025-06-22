import React from 'react'

const Quality_assurance = () => {
  return (
    <div className="bg-[#faf3ea] w-screen flex flex-col md:flex-row justify-between p-5 md:p-[50px] gap-6">
      <div className="feature-item flex gap-[10px]">
        <img src='src/assets/trophy.png' class="h-[60px]"></img>
        <div className="">
          <h3>High Quality</h3>
          <p class="text-gray-500">crafted from top materials</p>
        </div>
      </div>

      <div className="feature-item flex gap-[10px]">
        <img src='src/assets/guarantee.png' class="h-[60px]"></img>
        <div className="">
          <h3>Warranty Protection</h3>
          <p class="text-gray-500">Over 2 years </p>
        </div>
      </div>

      <div className="feature-item flex gap-[10px]">
        <img src='src/assets/shipping.png' class="h-[60px]"></img>
        <div className="">
          <h3>Free Shipping</h3>
          <p class="text-gray-500">Orders over 150$ </p>
        </div>
      </div>

      <div className="feature-item flex gap-[10px]">
        <img src='src/assets/customer-support.png' class="h-[60px]"></img>
        <div className="">
          <h3>24 / 7</h3>
          <p class="text-gray-500">Dedicated support</p>
        </div>
      </div>
    </div>
  )
}

export default Quality_assurance