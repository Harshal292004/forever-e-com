import React from 'react'
import { Link } from 'react-router-dom'

const StoreFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
            FOREVER.
          </h3>
          <p className="text-gray-300 mb-4">
            Empowering sellers to grow their business with cutting-edge technology and seamless solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <nav className="space-y-2">
            <Link to="/store" className="block text-gray-300 hover:text-white transition duration-300">
              Home
            </Link>
            <Link to="/store/dashboard" className="block text-gray-300 hover:text-white transition duration-300">
              Dashboard
            </Link>
            <Link to="/store/products" className="block text-gray-300 hover:text-white transition duration-300">
              Products
            </Link>
          </nav>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Support</h4>
          <nav className="space-y-2">
            <Link to="/help" className="block text-gray-300 hover:text-white transition duration-300">
              Help Center
            </Link>
            <Link to="/contact" className="block text-gray-300 hover:text-white transition duration-300">
              Contact Us
            </Link>
            <Link to="/faq" className="block text-gray-300 hover:text-white transition duration-300">
              FAQ
            </Link>
          </nav>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
          <form className="space-y-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black bg-opacity-20 py-4 text-center">
        <p className="text-gray-300">
          © {currentYear} FOREVER. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default StoreFooter