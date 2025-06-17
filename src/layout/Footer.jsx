import React from "react";

function Footer() {
  return (
    <div className="footer px-4 overflow-x-hidden">
      <hr className="my-6 border-t-2 border-gray-300" />
      <div className="footer-wrapper flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-20 leading-loose max-w-[1300px] mx-auto">
        <div className="firstpart w-[230px]">
          <h3 className="mb-4 text-lg font-semibold">Funiro.</h3>
          <p className="text-gray-400 text-sm">
            400 University Drive Suite 200 Coral <br />
            Gables, <br />
            FL 33134 USA
          </p>
        </div>

        <div className="secondpart w-[150px]">
          <ul>
            <li className="mb-4 font-semibold text-gray-400">Links</li>
            <li className="mb-3 font-semibold">
              <a href="#" className="text-black">Home</a>
            </li>
            <li className="mb-3 font-semibold">
              <a href="#" className="text-black">Shop</a>
            </li>
            <li className="mb-3 font-semibold">
              <a href="#" className="text-black">About</a>
            </li>
            <li className="font-semibold">
              <a href="#" className="text-black">Contact</a>
            </li>
          </ul>
        </div>

        <div className="thridpart w-[160px]">
          <ul>
            <li className="mb-4 font-semibold text-gray-400">Help</li>
            <li className="mb-3 font-semibold">
              <a href="#" className="text-black">Payment Options</a>
            </li>
            <li className="mb-3 font-semibold">
              <a href="#" className="text-black">Returns</a>
            </li>
            <li className="font-semibold">
              <a href="#" className="text-black">Privacy Policies</a>
            </li>
          </ul>
        </div>

        <div className="forthpart w-full sm:w-[300px]">
          <ul>
            <li className="mb-4 font-semibold text-gray-400">Newsletter</li>
            <li>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="border-b border-black outline-none px-4 py-2 w-full sm:w-64"
                />
                <button className="border-b border-black font-semibold px-4 py-2 sm:w-auto">
                  SUBSCRIBE
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full sm:w-[80%] mx-auto text-center">
        <hr className="my-6 border-t-2 border-gray-300" />
        <div className="copyright mb-10 mt-3 text-gray-400 text-sm">
          <h6>© 2025 Developed by Piyush Soni, Praver Jain and Tripta Sharma</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
