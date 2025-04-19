import React, { useState, useRef, useEffect } from "react";

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

  return (
    <header className="flex justify-between items-center bg-white shadow px-6 py-4">
      <input
        type="text"
        placeholder="Search..."
        className="border px-4 py-2 rounded w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <div className="relative" ref={dropdownRef}>
        <img
          src="https://i.pravatar.cc/40"
          alt="Avatar"
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
            <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Profile</button>
            <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Logout</button>
          </div>
        )}
      </div>
    </header>
  );
}
