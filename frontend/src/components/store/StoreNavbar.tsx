import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const StoreNavbar = () => {
  const AuthenticatedNavLinks = [
    { name: "Dashboard", path: "store/dashboard" },
    { name: "Stores", path: "/store/stores" },
    { name: "Inventory", path: "store/inventory" },
    { name: "Products", path: "store/products" },
  ];
  const navLinks = [
    { name: "Home", path: "/store" },
    { name: "Register", path: "/store/register" },
    { name: "Login", path: "store/login" },
  ];
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-800 to-purple-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
            FOREVER.
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {isAuthenticated ? (
            AuthenticatedNavLinks.map((link, index) => (
              <NavLink
                to={link.path}
                key={index}
                className={({ isActive }) =>
                  `text-base font-medium transition-all duration-300 hover:text-blue-300 hover:scale-105 ${
                    isActive 
                      ? "text-white border-b-2 border-blue-300 pb-1" 
                      : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))
          ) : (
            navLinks.map((link, index) => (
              <NavLink
                to={link.path}
                key={index}
                className={({ isActive }) =>
                  `text-base font-medium transition-all duration-300 hover:text-blue-300 hover:scale-105 ${
                    isActive 
                      ? "text-white border-b-2 border-blue-300 pb-1" 
                      : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))
          )}
          
          {/* Optional Authentication Button */}
          {!isAuthenticated && (
            <button 
              className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default StoreNavbar;