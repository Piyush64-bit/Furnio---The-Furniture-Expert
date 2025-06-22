import React from 'react'

const Bill = () => {
  return (
    <div className='flex flex-col md:flex-row p-4 gap-4 md:gap-[100px] mb-5'>
      <div className="left-panel flex flex-col gap-4 w-full justify-center items-center">
        <h1>Billing Details</h1>
        <div className="form-wrapper">
          <div className="Name flex gap-2">
            <div className="form-element">
              <h6>First Name</h6>
              <input
                type="text"
                placeholder="First"
                className="border border-gray-500 p-2 rounded mb-4 w-full"
              />
            </div>
          <div className="form-element">
          <h6>Last Name</h6>
          <input
            type="text"
            placeholder="Last"
            className="border border-gray-500 p-2 rounded mb-4 w-full"
          />
          </div>

          </div>
          <div className="form-element">
            <h6>PhoneNo.</h6>
            <input
              type="number"
              placeholder="enter number"
              className="border border-gray-500 p-2 rounded mb-4 w-full" />
          </div>
          <div className="form-element">
            <h6>Company Name (optional) </h6>
            <input
              type="text"
              placeholder=""
              className="border border-gray-500 p-2 rounded mb-4 w-full" />
          </div>
          <div className="form-element">
            <h6>Country/Region</h6>
            <input
              type="text"
              placeholder="enter country name"
              className="border border-gray-500 p-2 rounded mb-4 w-full" />
          </div>
          <div className="form-element">
            <h6>Address</h6>
            <input
              type="text"
              placeholder="enter address"
              className="border border-gray-500 p-2 rounded mb-4 w-full" />
          </div>
          <div className="form-element">
            <h6>Town/City</h6>
            <input
              type="text"
              placeholder="enter city name"
              className="border border-gray-500 p-2 rounded mb-4 w-full" />
          </div>
          <div className="form-element">
            <h6>Zipcode</h6>
            <input
              type="text"
              placeholder="enter 6 digit zipcode"
              className="border border-gray-500 p-2 rounded mb-4 w-full" />
          </div>
          <div className="form-element">
            <h6>Email</h6>
            <input
              type="text"
              placeholder="...@gmail.com"
              className="border border-gray-500 p-2 rounded mb-4 w-full" />
          </div>
        
        </div>


      </div>
      <div className="right-panel flex flex-col w-full bg-[#faf3ea] rounded p-5 gap-4 h-fit">
        <div className="flex justify-between items-center">
          <h5>Product</h5>
          <h5>SubTotal</h5>
        </div>
        <div className="content gap-2">
          <div className="flex justify-between">
            <p className='text-gray-500 text-center'>AsgaardSofa<span className='font-bold text-black'>×1</span></p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between items-center">
            <p>SubTotal</p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between items-center">
            <p className='font-bold'>Total</p>
            <p className='font-bold text-[#B88E2F]'>Rs. 250,000.00</p>
          </div>
          
        </div>
        <button className="py-2 px-10 border-2 border-[#B88E2F] text-[#B88E2F] font-bold hover:bg-[#B88E2F] hover:text-white transition duration-300">
            Place Order
        </button>
        
      </div>
      
      
    </div>
  )
}

export default Bill