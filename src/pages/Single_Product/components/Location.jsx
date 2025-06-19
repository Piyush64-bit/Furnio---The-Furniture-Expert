import React from 'react'

const location = () => {
  return (
    <div className='bg-[#faf3ea] w-screen flex items-center p-4 gap-4'>
        <button className="text-gray-500 hover:text-gray-700 transition-colors duration-200">Home</button>
        <div className="font-bold text-[22px]">&gt;</div>
        <button className="text-gray-500 hover:text-gray-700 transition-colors duration-200">Shop</button>
        <div className="font-bold text-[22px]">&gt;</div>
        <div className="bg-gray-500 w-[1px] h-9 hover:text-gray-700 transition-colors duration-200"></div>
        <div className="font-bold">Asgaard Sofa</div>
    </div>
  )
}

export default location