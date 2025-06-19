import React from 'react'

const product = () => {
  return (
    <div className="prod_page">
      <div className="flex flex-col md:flex-row ">
        <div className="left-panel flex flex-col lg:flex-row  justify-center gap-4 p-4">
          <div className="main-picture bg-[#faf3ea] h-fit rounded">
            <img src="src/assets/Asgaardsofa3.png" className='cursor-pointer lg:h-[450px] lg:w-[900px] md:h-[300px] md:w-[1100px]'/>
          </div>
          <div className="other-pictures flex md:flex-col gap-2">
            
            <div className="w-fit hover:bg-[#F9F1E7] transition-colors duration-300 rounded"><img src="src/assets/small1.png" alt="" className='cursor-pointer md:h-[90px] md:w-[100px] lg:w-[180px]'/></div>
            <div className="w-fit hover:bg-[#F9F1E7] transition-colors duration-300 rounded"><img src="src/assets/small2.png" alt="" className='cursor-pointer md:h-[90px] md:w-[100px] lg:w-[180px]'/></div>
            <div className="w-fit hover:bg-[#F9F1E7] transition-colors duration-300 rounded"><img src="src/assets/small3.png" alt="" className='cursor-pointer md:h-[90px] md:w-[100px] lg:w-[180px]'/></div>
            <div className="w-fit hover:bg-[#F9F1E7] transition-colors duration-300 rounded"><img src="src/assets/small1.png" alt="" className='cursor-pointer md:h-[90px] md:w-[100px]  lg:w-[180px]'/></div>
          </div>
        </div>
        <div className="right-panel flex flex-col gap-3 p-3">
          <h1 className='mb-0'>Asgaard Sofa</h1>
          <p className='text-gray-500 text-2xl mb-0'>Rs. 250,000.00</p>
          <div className="star-rating flex text-center items-center gap-3">
            <img src="src/assets/star.png"/>
            <div className="bg-gray-500 w-[1px] h-9"></div>
            <p className='text-gray-500 mb-0'>5 Customer Reviews</p>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi autem sit excepturi minus magnam, laborum sunt nihil, officiis pariatur dolore at possimus deserunt voluptatibus dicta harum velit doloribus ipsam?</p>
          <div className="size flex-col">
            <p className='text-gray-500 mb-0'>Size</p>
            <div className="size flex gap-2">
              <button className="rounded bg-[#B88E2F] w-7 h-7 flex justify-center items-center text-white">L</button>
              <button className="rounded bg-[#F9F1E7] w-7 h-7 flex justify-center items-center ">XS</button>
              <button className="rounded bg-[#F9F1E7] w-7 h-7 flex justify-center items-center ">XL</button>
            </div>
          </div>
          <div className="color flex-col mb-4">
            <p className='text-gray-500 mb-0'>Color</p>
            <div className="flex gap-2">
              <button className="rounded bg-[#816DFA] w-7 h-7"></button>
              <button className="rounded bg-black w-7 h-7"></button>
              <button className="rounded bg-[#B88E2F] w-7 h-7"></button>
            </div>
          </div>
          <div className="buttonsdiv flex gap-3 mb-9">
            <div className="quantitydiv flex justify-center items-center gap-4 border-1 border-gray-400 rounded p-2">
              <div className='flex justify-center items-center rounded h-7 w-7 font-bold cursor-pointer bg-[#B88E2F] hover:bg-[#F9F1E7] transition-colors duration-300'>-</div>
              <div className='h-7 w-7 border-1 border-gray-400 flex justify-center items-center font-bold rounded'>1</div>
              <div className='flex justify-center items-center rounded h-7 w-7 font-bold cursor-pointer bg-[#B88E2F] hover:bg-[#F9F1E7] transition-colors duration-300'>+</div>
            </div>
            <button className=" p-2 border-1 rounded flex justify center items-center hover:bg-[#F9F1E7] transition-colors duration-300">Add To Cart</button>
            <button className='p-2 border-1 rounded flex justify center items-center hover:bg-[#F9F1E7] transition-colors duration-300'>Compare</button>
            
          </div>
          <div className=" h-[1px] bg-gray-300"></div>  
          <div className=" lists flex gap-5 ">
            <ul className='flex-col p-0 '>
              <li className=' text-gray-500'>SKU</li>
              <li className=' text-gray-500'>Category</li>
              <li className=' text-gray-500'>Tags</li>
              <li className=' text-gray-500'>Share</li>
            </ul>
            <ul className='flex-col p-0'>
              <li className=' text-gray-500'>:</li>
              <li className=' text-gray-500'>:</li>
              <li className=' text-gray-500'>:</li>
              <li className=' text-gray-500'>:</li>
            </ul>
            <ul className='flex-col p-0'>
              <li className=' text-gray-500'>SS001</li>
              <li className=' text-gray-500'>Sofas</li>
              <li className=' text-gray-500'>Sofa, Chair, Home, Shop</li>
              <li className=' text-gray-500 flex items-center gap-3'>
                <img src="src/assets/fb-logo.png" className='cursor-pointer' />
                <img src="src/assets/linkedin.png" className='cursor-pointer' alt="" />
                <img src="src/assets/twitter.png" className='cursor-pointer' alt="" />
              </li>
            </ul>

          </div>      
        </div>
      </div>
      <div className=" h-[1px] bg-gray-300 mb-9 w-screen"></div>  

    </div>
  )
}

export default product