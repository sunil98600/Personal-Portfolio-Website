import React from 'react';
import project1 from '../../../../src/assets/projects/project1.png';
import project2 from '../../../../src/assets/projects/project2.png';
import project3 from '../../../../src/assets/projects/project3.png';
import project4 from '../../../../src/assets/projects/project4.png';

const projects = [
  {
    title: 'The Vintage',
    image: project1, // replace with actual image path
    link: '#'
  },
  {
    title: 'Foodasa',
    image: project2, // replace with actual image path
    link: '#'
  },
  {
    title: 'Marco Accent',
    image: project3, // replace with actual image path
    link: '#'
  },
  {
    title: 'Mozaik',
    image: project4, // replace with actual image path
    link: '#'
  }
];

const ProjectList = () => {
  return (
    <section className="bg-black p-10">
      <div className="container mx-auto text-white">
        {/* Featured Projects Heading */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">Featured Projects</h2>
          <button className="text-yellow-400 font-medium hover:underline">
            Explore More
          </button>
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative bg-gray-900 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <a 
                  href={project.link} 
                  className="text-yellow-400 mt-2 inline-block font-medium hover:underline"
                >
                  Know More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
