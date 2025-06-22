import React from 'react'

const Products = () => {
  return (
    <div className=' Productwrapper flex flex-col lg:flex-row gap-4 p-4'>
      <div className="title flex flex-col gap-2 md:w-[300px]">
        <h3>Go to Product Page for more details</h3>
        <p className='text-gray-500 underline cursor-pointer hover:text-black transition-colors duration-300'>View more</p>
      </div>
      <div className="Products flex flex-col md:flex-row gap-2">
        <div className="card flex flex-col justify-center cursor-pointer hover:scale-105 hover:opacity-80 transition duration-300 ease-in-out p-2">
          <img src="src/assets/Asgaardsofa3.png" className='md:h-[200px]'/>
          <h4>Asgaard Sofa</h4>
          <h6>Rs.250,000.00</h6>
          <div className="star-rating flex items-center gap-2">
            <p className='text-center mb-0 font-bold'>4.7</p>
            <img src="src/assets/star.png"/>
            <div className="bg-gray-500 w-[1px] h-9"></div>
            <p className='text-gray-500 mb-0'>204 Reviews</p>
          </div>
        </div>
        <div className="card flex flex-col justify-center cursor-pointer hover:scale-105 hover:opacity-80 transition duration-300 ease-in-out p-2">
          <img src="src/assets/Asgaardsofa3.png" className='md:h-[200px]'/>
          <h4>Asgaard Sofa</h4>
          <h6>Rs.250,000.00</h6>
          <div className="star-rating flex items-center gap-2">
            <p className='text-center mb-0 font-bold'>4.7</p>
            <img src="src/assets/star.png"/>
            <div className="bg-gray-500 w-[1px] h-9"></div>
            <p className='text-gray-500 mb-0'>204 Reviews</p>
          </div>
        </div>
      </div>
      <div className="choose flex flex-col gap-2 p-4">
          <h3>Add a product</h3>
          <div className="bg-[#B88E2F] flex justify-between items-center text-white font-bold rounded cursor-pointer p-2 transition-all duration-300 hover:bg-[#a0781d]">
            Choose a product
            <img src="src/assets/Vector63.png"/>
          </div>
      </div>
    </div>
  )
}

export default Products