// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-10 pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="container mx-auto px-4 flex flex-col-reverse items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
            Beautiful analytics to grow smarter
          </h1>
          <p className="mt-4 text-gray-600 text-center">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700">
              Demo
            </button>
            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-500">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mt-10">
        <img src="https://www.shutterstock.com/image-vector/vector-notebook-computer-smartphone-messenger-600nw-2422041991.jpg" alt="" width={1000}  className='mb-4'/>
      </div>
      
      {/* <div className='md:flex justify-evenly items-center'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQ6PBmWCp-4EMsN8AaC7nSYE22ArRodyrZA&s" width={150}  alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQ6PBmWCp-4EMsN8AaC7nSYE22ArRodyrZA&s" width={150}  alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQ6PBmWCp-4EMsN8AaC7nSYE22ArRodyrZA&s" width={150}  alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQ6PBmWCp-4EMsN8AaC7nSYE22ArRodyrZA&s" width={150}  alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQ6PBmWCp-4EMsN8AaC7nSYE22ArRodyrZA&s" width={150}  alt="" />
      </div> */}
    </section>
  );
};

export default Hero;
