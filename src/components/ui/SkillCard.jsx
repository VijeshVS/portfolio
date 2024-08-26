import React from 'react';

const SkillCard = ({children,skill}) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-800 to-indigo-800 opacity-50"></div>
        <div className="relative py-2 px-5 flex flex-col items-center">
            {children}
          <h2 className="text-xl font-semibold text-white">
            {skill}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
