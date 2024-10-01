import React from 'react';

const Contact= () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-8 flex justify-center items-center">
      {/* Contact Container */}
      <div className="bg-gray-800 p-8 rounded-lg flex flex-col sm:flex-row justify-between items-center w-full max-w-screen-lg">
        {/* Text Section */}
        <div className="mb-6 sm:mb-0">
          <h2 className="text-3xl font-bold mb-4">Let’s work together on <br/> your next project</h2>
          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore.</p>
        </div>

        {/* Contact Button */}
        <div>
          <button className="bg-yellow-500 text-white py-3 px-8 rounded-lg hover:bg-yellow-600 transition duration-300">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
