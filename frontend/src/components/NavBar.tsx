import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { assets } from "../assets/assets";

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useContext(UserContext); // Access context searchQuery and setSearchQuery
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false); // State to control search box visibility
  const navLinks = ["Home", "Collection", "About Us", "Contact us"];
  const { cart_icon, profile_icon, search_icon } = assets;
  const navigate = useNavigate();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); // Update searchQuery in context
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`); // Navigate to search results
    }
  };

  return (
    <header className="z-10 fixed top-0 w-full bg-light-background border-b border-light-secondary/10">
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
            {/* Searchbox */}
            <div className="relative">
              <button
                className="p-2 hover:bg-light-secondary/10 rounded-full transition-colors duration-200"
                onClick={() => setIsSearchOpen((prev) => !prev)} // Toggle search box visibility
              >
                <img src={search_icon} alt="Search" className="h-5 w-5" />
              </button>

              {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
                    placeholder="Search..."
                    className="w-full p-2 text-sm border-none  rounded-lg focus:outline-none"
                  />
                </div>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <button
                className="p-2 hover:bg-light-secondary/10 rounded-full transition-colors duration-200"
                onClick={() => {
                  navigate('/cart');
                }}
              >
                <img src={cart_icon} alt="Cart" className="h-5 w-5" />
              </button>
              <button
                className="p-2 hover:bg-light-secondary/10 rounded-full transition-colors duration-200"
              >
                <img
                  src={profile_icon}
                  alt="Profile"
                  className="h-5 w-5 lg:hidden"
                  onClick={() => {
                    navigate('/login');
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
