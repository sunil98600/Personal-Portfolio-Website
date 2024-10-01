import React from 'react';
import profile_image from '../../../../src/assets/hero.png';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <section className="flex justify-center items-center py-16 bg-gray-900">
      {/* Wider Card with Shadow */}
      <div className="shadow-2xl relative bg-gray-800 text-white max-w-7xl w-full mx-auto p-12 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={profile_image}
              alt="Profile"
              className="w-full md:max-w-sm rounded-lg shadow-md"
            />
          </div>

          {/* Right Side Content */}
          <div className="md:w-1/2 text-left space-y-6">
            <h2 className="text-4xl font-bold text-white">About Me</h2>
            <p className="text-gray-400 italic leading-relaxed">
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            
            <ul className="space-y-3 text-gray-300">
              <li><strong>Name:</strong> Sunil Satish Patil</li>
              <li><strong>Date of birth:</strong> January 01, 2003</li>
              <li><strong>Address:</strong> Pune, Maharashtra</li>
              <li><strong>Email:</strong> sunilspatil9860@gmail.com</li>
              <li><strong>Phone:</strong> +91-9172544420</li>
            </ul>
            <p className="text-yellow-600 font-bold ">
            <Link to="/about">Know More &rarr;</Link>
          </p>

            <div className="text-white text-lg font-semibold">
              <span className='text-yellow-400'>10</span>  Projects complete
            </div>
            {/* Buttons */}
            <div className="space-x-4">
              <button className="bg-gray-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-yellow-500 transition-all">
                Contact Me
              </button>
              <button className="bg-transparent border-2 border-gray-400 text-white font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition-all">
                Download CV
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
