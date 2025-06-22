import React from 'react'

const Comparison = () => {
  return (
    <div className="overflow-x-auto p-4">
      <div className="grid grid-cols-3 gap-4 text-sm text-left">
        {/* HEADINGS */}
        <div></div>
        <div className="font-bold text-lg">Product 1</div>
        <div className="font-bold text-lg">Product 2</div>

        {/* GENERAL */}
        <div className="font-semibold text-[#B88E2F]">General</div>
        <div>
          <p>1 sectional sofa</p>
          <p>TFCBURS6L8SRHS</p>
          <p>Solid Wood</p>
          <p>L-shaped</p>
          <p>Fabric + Cotton</p>
          <p>Bright Grey & Lion</p>
        </div>
        <div>
          <p>1 Three Seater, 2 Single Seater</p>
          <p>DTUBLUERL65B</p>
          <p>Solid Wood</p>
          <p>L-shaped</p>
          <p>Fabric + Cotton</p>
          <p>Bright Grey & Lion</p>
        </div>

        {/* PRODUCT */}
        <div className="font-semibold text-[#B88E2F]">Product</div>
        <div>
          <p>Foam</p>
          <p>Bright Grey & Lion</p>
          <p>No</p>
          <p>250 KG</p>
          <p>India</p>
        </div>
        <div>
          <p>Matte</p>
          <p>Bright Grey & Lion</p>
          <p>Yes</p>
          <p>300 KG</p>
          <p>India</p>
        </div>

        {/* DIMENSIONS */}
        <div className="font-semibold text-[#B88E2F]">Dimensions</div>
        <div>
          <p>265.32 cm</p>
          <p>76 cm</p>
          <p>187.76 cm</p>
          <p>45 KG</p>
          <p>41.53 cm</p>
          <p>5.46 cm</p>
        </div>
        <div>
          <p>265.32 cm</p>
          <p>76 cm</p>
          <p>187.76 cm</p>
          <p>65 KG</p>
          <p>41.53 cm</p>
          <p>5.46 cm</p>
        </div>

        {/* WARRANTY */}
        <div className="font-semibold text-[#B88E2F]">Warranty</div>
        <div>
          <p>1 Year Manufacturing Warranty</p>
          <p>For warranty claims or issues: operations@tirumalla.com</p>
          <p>Manufacturing Defect</p>
          <p>Does not cover damages due to misuse and wear & tear.</p>
          <p>1 Year</p>
        </div>
        <div>
          <p>12 Year Manufacturing Warranty</p>
          <p>For warranty claims or issues: support@royalty.com</p>
          <p>Manufacturing Defect</p>
          <p>Does not cover damages due to misuse and wear & tear.</p>
          <p>3 Months</p>
        </div>

        {/* BUTTONS */}
        <div></div>
        <div>
          <button className="bg-[#B88E2F] text-white px-4 py-2 rounded hover:bg-[#a17924] transition-colors duration-300">
            Add To Cart
          </button>
        </div>
        <div>
          <button className="bg-[#B88E2F] text-white px-4 py-2 rounded hover:bg-[#a17924] transition-colors duration-300">
            Add To Cart
          </button>
        </div>
      </div>
    </div>    
  )
}

export default Comparison