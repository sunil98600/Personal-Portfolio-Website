import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-8">
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Footer Left - Company Info */}
        <div className="mb-6 sm:mb-0 text-2xl font-bold">
        <span className="text-gray-800">SKY</span>
        <span className="text-gray-400">FLY</span>
        </div>

        {/* Footer Right - Links */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition duration-300">Home</a>
          <a href="#" className="hover:text-white transition duration-300">About Me</a>
          <a href="#" className="hover:text-white transition duration-300">My Work</a>
          <a href="#" className="hover:text-white transition duration-300">Blog</a>
          <a href="#" className="hover:text-white transition duration-300">Contact Me</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
