import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from "../assets/assets";

const Navbar = () => {
  // Updated navigation links to match the footer
  const navLinks = ["Home", "About us", "Collection", "Contact us"];
  
  const {
    logo,
    cart_icon,
    dropdown_icon,
    profile_icon,
    search_icon,
  } = assets;

  return (
    <header className="z-10 fixed top-0 w-full bg-light-background border-b  border-light-secondary/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-light-primary">FOREVER.</h1>
          </div>

          {/* Main Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, '-')}`}
                className={({ isActive }) =>
                  `text-light-secondary hover:text-light-accent transition-colors duration-200 text-base ${
                    isActive ? "text-light-accent" : ""
                  }`
                }
              >
                {link}
              </NavLink>
            ))}
          </div>

          {/* Secondary Navigation / Actions */}
          <div className="flex items-center space-x-6">
            <div className="hidden sm:flex items-center space-x-4">
              {/* Contact Info */}
              <a 
                href="tel:+1-000-000-0000" 
                className="text-light-secondary hover:text-light-accent transition-colors duration-200"
              >
                +1-000-000-0000
              </a>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-light-secondary/10 rounded-full transition-colors duration-200">
                <img src={search_icon} alt="Search" className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-light-secondary/10 rounded-full transition-colors duration-200">
                <img src={cart_icon} alt="Cart" className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-light-secondary/10 rounded-full transition-colors duration-200">
                <img src={dropdown_icon} alt="Menu" className="h-5 w-5 lg:hidden" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Hidden by default */}
        <div className="lg:hidden">
          <div className="hidden pt-4 pb-3 border-t border-light-secondary/10">
            <div className="space-y-1">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base text-light-secondary hover:text-light-accent transition-colors duration-200 ${
                      isActive ? "text-light-accent" : ""
                    }`
                  }
                >
                  {link}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;