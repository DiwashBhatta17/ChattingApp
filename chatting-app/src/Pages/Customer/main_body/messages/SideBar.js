// components/Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[40%] bg-gray-800 text-white p-4">
      <div className="flex items-center mb-6">
        <img
          src="path-to-profile.jpg"
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold">JUSTICE</h3>
          <p className="text-sm text-gray-400">Active 6m ago</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span>Profile</span>
          <button className="text-gray-400 hover:text-white">
            <i className="fas fa-user"></i>
          </button>
        </div>
        <div className="flex justify-between items-center">
          <span>Mute</span>
          <button className="text-gray-400 hover:text-white">
            <i className="fas fa-bell-slash"></i>
          </button>
        </div>
        <div className="flex justify-between items-center">
          <span>Search</span>
          <button className="text-gray-400 hover:text-white">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div>
          <h4 className="font-semibold mt-6">Chat Info</h4>
          <p>Customise chat</p>
          <p>Media and files</p>
          <p>Privacy and support</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
