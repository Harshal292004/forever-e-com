import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  // Company links matching the image
  const companyLinks = ["Home", "About us", "Delivery", "Privacy policy"];
  
  return (
    <footer className="bg-light-background py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand and Description */}
          <div className="lg:col-span-6">
            <div className="flex flex-col space-y-6">
              <h2 className="text-2xl font-bold text-light-primary">FOREVER.</h2>
              <p className="text-light-secondary text-base leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-3">
            <div className="flex flex-col space-y-6">
              <h3 className="text-xl font-semibold text-light-primary">COMPANY</h3>
              <div className="flex flex-col space-y-4">
                {companyLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-light-secondary hover:text-light-accent transition-colors duration-200"
                  >
                    {link}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="lg:col-span-3">
            <div className="flex flex-col space-y-6">
              <h3 className="text-xl font-semibold text-light-primary">GET IN TOUCH</h3>
              <div className="flex flex-col space-y-4">
                <p className="text-light-secondary">+1-000-000-0000</p>
                <p className="text-light-secondary">greatstackdev@gmail.com</p>
                <NavLink 
                  to="/instagram" 
                  className="text-light-secondary hover:text-light-accent transition-colors duration-200"
                >
                  Instagram
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-light-secondary/20">
          <p className="text-center text-light-secondary text-sm">
            Copyright 2024@ greatstack.dev - All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;