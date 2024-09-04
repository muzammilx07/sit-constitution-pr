import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import { createPortal } from "react-dom";

function Navbar() {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setSearchOpen(false);
    }
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b bg-white shadow-md">
     <Link to="/"> <div className="flex items-center space-x-4">
        
          <img
            src="https://i.postimg.cc/TPK4LShf/Whats-App-Image-2024-09-04-at-15-04-22-eb12f521.jpg"
            alt="India Logo"
            className="h-12"
          />
          <div className="flex flex-col items-start space-y-1">
            <hr className="w-full border-red-500 border-2" />
            <span className="text-lg font-bold tracking-wide text-gray-800">
              MISSION INDIA
            </span>
            <hr className="w-full border-red-500 border-2" />
            <span className="text-sm text-gray-600">| A Social Project</span>
          </div>
        
      </div></Link>

      <div className="flex items-center space-x-8">
        <Link
          to="/aboutus"
          className="text-gray-700 hover:text-gray-900 transition"
        >
          About Us
        </Link>
        <Link
          to="/constitution"
          className="text-gray-700 hover:text-gray-900 transition"
        >
          The Indian Constitution
        </Link>
        <Link
          to="/origins"
          className="text-gray-700 hover:text-gray-900 transition"
        >
          Origins of the Constitution
        </Link>
        <Link
          to="/principles"
          className="text-gray-700 hover:text-gray-900 transition"
        >
          The Six Principles
        </Link>
        <Link
          to="/high-court"
          className="text-gray-700 hover:text-gray-900 transition"
        >
          The High Court
        </Link>
        <Link
          to="/resources"
          className="text-gray-700 hover:text-gray-900 transition"
        >
          Resources
        </Link>
      </div>
      <div>
        <button
          onClick={toggleSearch}
          className="text-gray-700 hover:text-gray-900 transition"
        >
          <FiSearch size={24} />
        </button>
      </div>
      {isSearchOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-white z-50 p-8 flex flex-col items-center justify-center"
            onKeyDown={handleKeyDown}
          >
            <div className="w-full max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  className="w-full border-b-2 border-gray-300 py-2 px-4 text-xl focus:outline-none"
                  placeholder="Type your search and hit Enter..."
                  autoFocus
                />
                <button
                  onClick={toggleSearch}
                  className="absolute right-0 top-0 mt-2 mr-2 text-gray-700 hover:text-gray-900"
                >
                  <FiX size={24} />
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Hit enter to search or ESC to close
              </p>
            </div>
          </div>,
          document.body
        )}
    </nav>
  );
}

export default Navbar;
