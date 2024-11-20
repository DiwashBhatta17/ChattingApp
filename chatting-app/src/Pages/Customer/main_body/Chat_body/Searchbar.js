// components/SearchBar.js
import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-[#444242] text-white p-4">
      <input
        type="text"
        placeholder="Search Messenger"
        className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
