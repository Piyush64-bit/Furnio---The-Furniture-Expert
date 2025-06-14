import React from "react";

function Footer() {
  return (
    <div className="footer">
      <hr className="my-6 border-t-2 border-gray-300" />
      <div className="footer-wrapper flex justify-center leading-loose">
        <div className="firstpart mr-24">
          <h3 className="mb-4">Funiro.</h3>
          <p className="text-gray-400">
            400 University Drive Suite 200 Coral <br />
            Gables, <br />
            FL 33134 USA
          </p>
        </div>

        <div className="secondpart mr-24">
          <ul>
            <li className="mb-4 font-semibold text-gray-400">Links</li>
            <li className="mb-4 font-semibold">
              <a href="#" className="text-black text-decoration-none">
                Home
              </a>
            </li>
            <li className="mb-4 font-semibold">
              <a href="#" className="text-black text-decoration-none">
                Shop
              </a>
            </li>
            <li className="mb-4 font-semibold">
              <a href="#" className="text-black text-decoration-none">
                About
              </a>
            </li>
            <li className="font-semibold">
              <a href="#" className="text-black text-decoration-none">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="thridpart mr-24">
          <ul>
            <li className="mb-4 font-semibold text-gray-400">Help</li>
            <li className="mb-4 font-semibold">
              <a href="#" className="text-black text-decoration-none">
                Payment Options
              </a>
            </li>
            <li className="mb-4 font-semibold">
              <a href="#" className="text-black text-decoration-none">
                Returns
              </a>
            </li>
            <li className="font-semibold">
              <a href="#" className="text-black text-decoration-none">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        <div className="forthpart mr-24">
          <ul>
            <li className="mb-4 font-semibold text-gray-400">Newsletter</li>
            <li className="mb-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="border-b border-black outline-none px-4 py-2 w-64"
                />
                <button className="border-b border-black font-semibold px-4 py-2">
                  SUBSCRIBE
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[80%] mx-auto">
        <hr className="my-6 border-t-2 border-gray-300" />
        <div className="copyright mb-10 mt-3 text-gray-400">
          <h6>© 2025 Developed by Piyush Soni, Praver Jain and Tripta Sharma</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
