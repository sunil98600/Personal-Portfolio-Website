import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Web Developer", "Cybersecurity Enthusiast", "Machine Learning Enthusiast"],
    loop: true, // Enable looping
    typeSpeed: 100,
    deleteSpeed: 80,
  });

  return (
    <section className="bg-gray-900 text-white h-screen flex items-center justify-between px-10 md:px-20 bg-[url('C:/Users/sunil/Desktop/REACT/portfolio/portfolio/src/assets/hero-1.jpg')] bg-cover">
      {/* Left Section - Info */}
      <div className="w-full md:w-1/2 space-y-5">
        <h3 className="text-xl font-light">HI I'M </h3>
        <h1 className="text-5xl font-bold">SUNIL PATIL</h1>
        <h2 className="text-2xl text-gray-300 font-bold">
          I am a <span>{text}</span> <span style={{color:"yellow"}}><Cursor /></span>
        </h2>
        <p className="text-gray-400">
        Motivated Full Stack Engineer with hands-on experience in Java programming, frontend Development, Design Systems, and backend. Proven ability to develop and maintain web applications and build scalable server-side applications. Strong problem-solving skills, a passion for continuous learning, and a collaborative team player.
        </p>
        <div className='space-x-4'>
          <button className="bg-gray-800 shadow-md hover:bg-yellow-500 transition-all text-white py-3 px-6 rounded-lg text-sm font-semibold">
            HIRE ME
          </button>
          <button className="bg-gray-800 shadow-md hover:bg-yellow-500 transition-all uppercase hover:bg-gray-700 text-white py-3 px-6 rounded-lg text-sm font-semibold">
            Resume
          </button>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative">
          <img
            src=""
            alt="Profile"
            className="w-10/12 h-auto object-cover shadow-2xl rounded-lg"
          />
          {/* Decorative Element */}
          <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-500 rounded-lg transform -translate-x-5 -translate-y-5 z-[-1]"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
