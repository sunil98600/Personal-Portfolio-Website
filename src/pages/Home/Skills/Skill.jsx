import React, { useEffect, useState } from 'react';

// Skill data
const skills = [
  { name: 'Java', percent: 90 },
  { name: 'JavaScript', percent: 89 },
  { name: 'NodeJs', percent: 95 },
  { name: 'React', percent: 45 },
  { name: 'HTML/CSS', percent: 60 },
  { name: 'Python', percent: 75 },
  { name: 'Django', percent: 80 },
  { name: 'Tailwind CSS', percent: 80 },
];

// Circular Progress Loader
const CircularProgress = ({ percent }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(percent);
    }, 500); // Animation delay

    return () => clearTimeout(timeout);
  }, [percent]);

  return (
    <div className="relative flex justify-center items-center">
      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#333"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#facc15" // Yellow color
          strokeWidth="10"
          fill="none"
          strokeDasharray="282.6" // Circumference of the circle (2 * π * radius)
          strokeDashoffset={(1 - progress / 100) * 282.6} // Adjust offset based on progress
          style={{
            transition: 'stroke-dashoffset 1s ease-out',
          }}
        />
      </svg>
      <span className="absolute text-white font-bold text-lg">
        {progress}%
      </span>
    </div>
  );
};

// Skill Component
const Skill = () => {
  return (
    <div className="bg-gray-900 py-12">
      <h2 className="text-white text-center text-3xl font-bold mb-8">My Skills </h2>
      {/* Underline */}
      <div className="flex justify-center mb-8">
        <div className="w-24 h-1 bg-yellow-500"></div> {/* Yellow underline */}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <CircularProgress percent={skill.percent} />
            <p className="text-white mt-4 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;