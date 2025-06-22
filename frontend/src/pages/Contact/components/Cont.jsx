import React from 'react'

const Cont = () => {
  return (
    <div className='flex flex-col justify-center items-center p-4 gap-2 mb-5'>
      <h3>Get in Touch with Us</h3>
      <div className="para">
      <p className='text-center text-gray-500 mb-0'>For More Information About Our Product & Services.</p>
      <p className='text-center text-gray-500'>Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>
      <div className="form-wrapper flex flex-col md:flex-row gap-5 mb-7">
        <div className="left-panel flex flex-col bg-[#faf3ea] rounded p-3">
          <div className="flex flex-col">
            <div className="flex gap-2 ">
              <img src="src/assets/Vector.png"/>
              <h5 className='mb-0'>Address</h5>
              </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolor?</p>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2 ">
              <img src="src/assets/bxs_phone.png"/>
              <h5 className='mb-0'>Phone</h5>
              </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolor?</p>
          </div>
          <div className="flex flex-col mb-0">
            <div className="flex gap-2">
              <img src="src/assets/bi_clock-fill.png"/>
              <h5 className='mb-0'>Working Time</h5>
              </div>
            <p className='mb-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolor?</p>
          </div>
        </div>
        <div className="right-panel flex flex-col w-full ">
          <h6>Your name</h6>
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-500 p-2 rounded mb-4"
          />

          <h6>Email address</h6>
          <input
            type="text"
            placeholder="Email"
            className="border border-gray-500 p-2 rounded mb-4"
          />

          <h6>Subject</h6>
          <input
            type="text"
            placeholder="abc"
            className="border border-gray-500 p-2 rounded mb-4"
          />

          <h6>Message</h6>
          <input
            type="write your message here"
            placeholder="Email"
            className="border border-gray-500 p-2 rounded h-[100px]"
          />



        </div>
      </div>
      <button className="py-2 px-10 border-2 border-[#B88E2F] text-[#B88E2F] font-bold hover:bg-[#B88E2F] hover:text-white transition duration-300">
            Submit
      </button>
      
    </div>
  )
}

export default Cont