import React from "react";

function Footer() {
  return (
    <div className="footer px-4 overflow-x-hidden text-sm">
      <hr className="my-4 sm:my-6 border-t-2 border-gray-300" />

      <div className="footer-wrapper flex flex-col lg:flex-row lg:justify-center items-center lg:items-start leading-relaxed sm:leading-loose">
        {/* Address */}
        <div className="firstpart mb-6 sm:mb-8 lg:mb-0 lg:mr-16 xl:mr-24 text-center lg:text-left">
          <h3 className="mb-2 sm:mb-4 text-lg sm:text-xl">Furnio.</h3>
          <p className="text-gray-400 text-xs sm:text-sm">
            400 University Drive Suite 200 Coral <br />
            Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div className="secondpart mb-6 sm:mb-8 lg:mb-0 lg:mr-16 xl:mr-24 text-center lg:text-left">
          <ul>
            <li className="mb-2 sm:mb-4 font-semibold text-gray-400 text-xs sm:text-sm">Links</li>
            <li className="mb-2 sm:mb-3 font-semibold">
              <a href="#" className="text-black">Home</a>
            </li>
            <li className="mb-2 sm:mb-3 font-semibold">
              <a href="#" className="text-black">Shop</a>
            </li>
            <li className="mb-2 sm:mb-3 font-semibold">
              <a href="#" className="text-black">About</a>
            </li>
            <li className="font-semibold">
              <a href="#" className="text-black">Contact</a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div className="thridpart mb-6 sm:mb-8 lg:mb-0 lg:mr-16 xl:mr-24 text-center lg:text-left">
          <ul>
            <li className="mb-2 sm:mb-4 font-semibold text-gray-400 text-xs sm:text-sm">Help</li>
            <li className="mb-2 sm:mb-3 font-semibold">
              <a href="#" className="text-black">Payment Options</a>
            </li>
            <li className="mb-2 sm:mb-3 font-semibold">
              <a href="#" className="text-black">Returns</a>
            </li>
            <li className="font-semibold">
              <a href="#" className="text-black">Privacy Policies</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="forthpart mb-6 sm:mb-8 lg:mb-0 text-center lg:text-left">
          <ul>
            <li className="mb-2 sm:mb-4 font-semibold text-gray-400 text-xs sm:text-sm">Newsletter</li>
            <li>
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="border-b border-black outline-none px-3 py-1 w-full sm:w-64 text-xs sm:text-sm"
                />
                <button className="border-b border-black font-semibold px-3 py-1 w-full sm:w-auto text-xs sm:text-sm">
                  SUBSCRIBE
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full sm:w-[80%] mx-auto text-center">
        <hr className="my-4 sm:my-6 border-t-2 border-gray-300" />
        <div className="copyright mb-6 sm:mb-10 mt-2 text-gray-400 text-xs sm:text-sm">
          <h6>2025 furnio. All rights reverved</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
