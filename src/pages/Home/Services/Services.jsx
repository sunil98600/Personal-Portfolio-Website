import React from 'react';

const Services= () => {
  return (
    <div className="bg-gray-900 text-white py-12 flex justify-center items-center">
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-screen-lg px-4 sm:px-0">
        <div className="bg-gray-800 p-6 sm:p-10 rounded-lg hover:bg-yellow-400 transition duration-300 text-center">
          <div className="text-3xl mb-4">🖥️</div>
          <h3 className="text-2xl font-semibold mb-4">AI/ML</h3>
          <p className="mb-4">Lorem ipsum is simply text of the printing type.</p>
          <a href="#" className="text-yellow-400 font-bold">
            Know More &rarr;
          </a>
        </div>

        <div className="bg-yellow-400 p-6 sm:p-10 rounded-lg hover:bg-yellow-500 transition duration-300 text-center">
          <div className="text-3xl mb-4">📋</div>
          <h3 className="text-2xl font-semibold mb-4">Web Design</h3>
          <p className="mb-4">Lorem ipsum is simply text of the printing type.</p>
          <a href="#" className="text-white font-bold">
            Know More &rarr;
          </a>
        </div>

        <div className="bg-gray-800 p-6 sm:p-10 rounded-lg hover:bg-yellow-400 transition duration-300 text-center">
          <div className="text-3xl mb-4">✏️</div>
          <h3 className="text-2xl font-semibold mb-4">Branding</h3>
          <p className="mb-4">Lorem ipsum is simply text of the printing type.</p>
          <a href="#" className="text-yellow-500 font-bold">
            Know More &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
