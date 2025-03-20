import React, { useState } from 'react';

const HNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[rgba(0,0,0,0.5)] text-white p-4 fixed w-full z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-8" />
          <span className="ml-2 text-xl font-bold font-manrope">Agrinus</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-[#4BAF47] font-manrope">Home</a>
          <a href="#" className="hover:text-[#4BAF47] font-manrope">About</a>
          <a href="#" className="hover:text-[#4BAF47] font-manrope">Services</a>
          <a href="#" className="hover:text-[#4BAF47] font-manrope">Projects</a>
          <a href="#" className="hover:text-[#4BAF47] font-manrope">Blog</a>
          <a href="#" className="hover:text-[#4BAF47] font-manrope">Contact</a>
        </div>

        {/* Icons and Phone */}
        <div className="hidden md:flex items-center space-x-4">
          <img src="/images/search.png" alt="Search" className="h-6" />
          <div className="relative">
            <img src="/images/cart.png" alt="Cart" className="h-6" />
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">3</span>
          </div>
          <span className="font-manrope">666 888 0000</span>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src="/images/hamburger.png" alt="Menu" className="h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#4BAF47] p-4">
          <a href="#" className="block py-2 font-manrope">Home</a>
          <a href="#" className="block py-2 font-manrope">About</a>
          <a href="#" className="block py-2 font-manrope">Services</a>
          <a href="#" className="block py-2 font-manrope">Projects</a>
          <a href="#" className="block py-2 font-manrope">Blog</a>
          <a href="#" className="block py-2 font-manrope">Contact</a>
          <div className="flex items-center space-x-4 mt-4">
            <img src="/images/search.png" alt="Search" className="h-6" />
            <div className="relative">
              <img src="/images/cart.png" alt="Cart" className="h-6" />
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">3</span>
            </div>
            <span className="font-manrope">666 888 0000</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HNavbar;