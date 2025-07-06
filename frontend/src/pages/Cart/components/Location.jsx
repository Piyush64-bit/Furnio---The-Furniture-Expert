import React from 'react'

const Location = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background blurred image */}
      <div className="w-full h-[300px] bg-[url('src/assets/cartimg.jpg')] bg-cover bg-center blur-[2px] opacity-70"></div>

      {/* Centered content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-black">
        <img src="src/assets/Furnio-logo.png" className="h-[50px] w-[50px]" />
        <h1 className="text-2xl font-semibold">CART</h1>
        <h6 className="text-sm">
          <span className="font-bold">Home &gt;</span> Cart
        </h6>
      </div>
    </div>
  )
}

export default Location
