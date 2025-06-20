import React from "react";

function Footer() {
  return (
    <div className="footer px-4 overflow-x-hidden text-sm">
      <hr className="my-4 sm:my-6 border-t-2 border-gray-300" />

      <div className="footer-wrapper flex flex-col lg:flex-row lg:justify-center items-center lg:items-start gap-6 lg:gap-0 leading-relaxed sm:leading-loose">
        {/* Address */}
        <div className="firstpart text-center lg:text-left mb-4 lg:mb-0 lg:mr-16 xl:mr-24">
          <h3 className="mb-1 sm:mb-4 text-base sm:text-xl">Furnio.</h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-snug">
            400 University Drive Suite 200 Coral <br />
            Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* 🆕 Wrapper for Links & Help side-by-side on mobile */}
        <div className="flex flex-row justify-center gap-8 mb-4 lg:mb-0 lg:flex-col lg:mr-16 xl:mr-24">
          {/* Links */}
          <div className="secondpart text-center lg:text-left">
            <ul>
              <li className="mb-1 sm:mb-4 font-semibold text-gray-400 text-xs sm:text-sm">Links</li>
              <li className="mb-1 sm:mb-2 font-semibold"><a href="/" className="text-black">Home</a></li>
              <li className="mb-1 sm:mb-2 font-semibold"><a href="/shop" className="text-black">Shop</a></li>
              <li className="mb-1 sm:mb-2 font-semibold"><a href="/blog" className="text-black">Blog</a></li>
              <li className="font-semibold"><a href="/contact" className="text-black">Contact</a></li>
            </ul>
          </div>

          {/* Help */}
          <div className="thirdpart text-center lg:text-left">
            <ul>
              <li className="mb-1 sm:mb-4 font-semibold text-gray-400 text-xs sm:text-sm">Help</li>
              <li className="mb-1 sm:mb-2 font-semibold"><a href="#" className="text-black">Payment Options</a></li>
              <li className="mb-1 sm:mb-2 font-semibold"><a href="#" className="text-black">Returns</a></li>
              <li className="font-semibold"><a href="#" className="text-black">Privacy Policies</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="forthpart text-center lg:text-left mb-6 lg:mb-0">
          <ul>
            <li className="mb-1 sm:mb-4 font-semibold text-gray-400 text-xs sm:text-sm">Newsletter</li>
            <li>
              <div className="flex flex-col sm:flex-row gap-2 items-center sm:items-start w-full">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="border-b border-black outline-none px-2 py-1 w-64 max-w-full text-xs sm:text-sm"
                />
                <button className="border-b border-black font-semibold px-3 py-1 text-xs sm:text-sm">
                  SUBSCRIBE
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full sm:w-[80%] mx-auto text-center">
        <hr className="my-4 sm:my-6 border-t-2 border-gray-300" />
        <div className="copyright mb-6 sm:mb-10 mt-2 text-gray-400 text-xs sm:text-sm">
          <h6>© 2025 | A collaborative creation by Piyush Soni & Praver Jain</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
