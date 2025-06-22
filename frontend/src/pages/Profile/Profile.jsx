import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="min-h-screen w-full bg-[#f5f5f5] py-10 px-4 flex items-start justify-center overflow-y-auto">
      <div className="w-full max-w-5xl bg-white/30 backdrop-blur-md p-6 rounded-3xl shadow-xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h2 className="text-xl font-medium">
              Welcome to <span className="text-[#B88E2F] font-semibold">Furnio</span>
            </h2>
            <p className="text-sm text-gray-600">Today, {new Date().toLocaleDateString()}</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button className="bg-[#B88E2F] text-white px-5 py-1.5 rounded-lg hover:bg-[#8E6F24] transition">Edit</button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex flex-col sm:flex-row gap-4 items-start mb-6">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h3 className="text-md font-semibold">Alexa Rawles</h3>
            <p className="text-sm text-gray-700">alexarawles@gmail.com</p>
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Full Name</label>
            <input
              type="text"
              placeholder="Your First Name"
              className="w-full bg-white border border-gray-300 px-3 py-1.5 rounded-lg outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Nick Name</label>
            <input
              type="text"
              placeholder="Your First Name"
              className="w-full bg-white border border-gray-300 px-3 py-1.5 rounded-lg outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Gender</label>
            <select className="w-full bg-white border border-gray-300 px-3 py-1.5 rounded-lg outline-none">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Country</label>
            <input
              type="text"
              placeholder="Your Country"
              className="w-full bg-white border border-gray-300 px-3 py-1.5 rounded-lg outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Language</label>
            <select className="w-full bg-white border border-gray-300 px-3 py-1.5 rounded-lg outline-none">
              <option>English</option>
              <option>Hindi</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Time Zone</label>
            <select className="w-full bg-white border border-gray-300 px-3 py-1.5 rounded-lg outline-none">
              <option>IST</option>
              <option>UTC</option>
              <option>PST</option>
              <option>EST</option>
            </select>
          </div>
        </div>

        {/* Email Section */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold mb-2">My email Address</h4>
          <div className="flex items-center gap-3 text-sm mb-2">
            <FaEnvelope className="text-[#B88E2F]" />
            <div>
              <p>alexarawles@gmail.com</p>
              <span className="text-gray-500 text-xs">1 month ago</span>
            </div>
          </div>
          <button className="mt-2 px-3 py-1.5 bg-blue-100 text-[#B88E2F] rounded-lg text-sm hover:bg-blue-200">
            + Add Email Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
