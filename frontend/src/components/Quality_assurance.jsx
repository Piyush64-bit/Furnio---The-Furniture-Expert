import React from 'react'
{/* quality_assurance strip*/}
const Quality_assurance = () => {
  return (
    <div className="bg-[#faf3ea] w-full flex flex-col md:flex-row justify-between p-5 md:p-[50px] gap-6 overflow-x-hidden">
      <div className="feature-item flex gap-[10px]">
        <img src='src/assets/trophy.png' className="h-[60px]" />
        <div>
          <h3>High Quality</h3>
          <p className="text-gray-500">crafted from top materials</p>
        </div>
      </div>

      <div className="feature-item flex gap-[10px]">
        <img src='src/assets/guarantee.png' className="h-[60px]" />
        <div>
          <h3>Warranty Protection</h3>
          <p className="text-gray-500">Over 2 years </p>
        </div>
      </div>

      <div className="feature-item flex gap-[10px]">
        <img src='src/assets/shipping.png' className="h-[60px]" />
        <div>
          <h3>Free Shipping</h3>
          <p className="text-gray-500">Orders over 150$ </p>
        </div>
      </div>

      <div className="feature-item flex gap-[10px]">
        <img src='src/assets/customer-support.png' className="h-[60px]" />
        <div>
          <h3>24 / 7</h3>
          <p className="text-gray-500">Dedicated support</p>
        </div>
      </div>
    </div>
  )
}

export default Quality_assurance
