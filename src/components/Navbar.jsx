// components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-600">Zysk</div>
        <div className="hidden md:flex space-x-6 text-left w-[80%]">
          <a href="#home" className="text-gray-600 hover:text-black">Home</a>
          <a href="#products" className="text-gray-600 hover:text-black">Products</a>
          <a href="#resources" className="text-gray-600 hover:text-black">Resources</a>
          <a href="#pricing" className="text-gray-600 hover:text-black">Pricing</a>
        </div>
        <div className='flex'>
          <div>
            <img src="https://png.pngtree.com/png-vector/20191103/ourmid/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg" alt="" width={50} />
          </div>
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
              <a href="#home" className="block px-4 py-2 text-gray-600 hover:text-black">Home</a>
              <a href="#products" className="block px-4 py-2 text-gray-600 hover:text-black">Products</a>
              <a href="#resources" className="block px-4 py-2 text-gray-600 hover:text-black">Resources</a>
              <a href="#pricing" className="block px-4 py-2 text-gray-600 hover:text-black">Pricing</a>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
