import React from 'react';
import { SlidersHorizontal, Grid, AlignJustify } from 'lucide-react';

const FilterBar = () => {
  return (
    <div className="bg-[#faf3ea] w-full px-6 sm:px-10 md:px-16 py-4 text-sm">
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4 text-center">
        
        {/* Left Side */}
        <div className="flex items-center flex-wrap justify-center gap-3">
          <button className="flex items-center gap-1 text-black font-medium hover:opacity-75">
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>
          <button className="text-black hover:opacity-70">
            <Grid className="w-5 h-5" />
          </button>
          <button className="text-black hover:opacity-70">
            <AlignJustify className="w-5 h-5" />
          </button>
          <div className="w-[1px] h-6 bg-gray-400 mx-2 hidden sm:block" />
          <div className='pt-3'>
          <p className="text-gray-700">
            Showing <strong>1–16</strong> of <strong>32</strong> results
          </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center flex-wrap justify-center gap-2">
          <p className="text-black pt-3">Show</p>
          <input
            type="text"
            value="16"
            readOnly
            className="w-12 text-center border border-gray-300 rounded-md px-2 py-1 text-gray-600 bg-white"
          />
          <p className="text-black pt-3">Sort by</p>
          <select className="border border-gray-300 px-2 py-1 rounded-md text-gray-600 bg-white">
            <option>Default</option>
            {/* Add more sorting options here */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
