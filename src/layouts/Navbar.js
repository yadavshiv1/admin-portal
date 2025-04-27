import React, { useState, useRef, useEffect } from "react";
import { Search } from '@mui/icons-material'
import Avatar from "../assets/Avatar.svg";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (<header className="flex justify-between items-center bg-white shadow px-6 py-4">
    <div className="ml-auto flex items-center gap-4" ref={dropdownRef}>
      {/* Search Input with Icon */}
      <div className="relative w-72">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
  
      <div className="relative">
        <img
          src={Avatar}
          alt="Avatar"
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
          <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left text-gray-700">
            Account 
          </button>
          <div className="border-t my-1"></div> 
          <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left text-gray-500">
            Setting
          </button>
          <div className="my-1"></div>
          <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left text-red-500 font-semibold">
            Logout
          </button>
        </div>
        
        )}
      </div>
    </div>
  </header>
  );
}
