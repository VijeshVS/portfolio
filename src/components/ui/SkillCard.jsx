import React from 'react';

const SkillCard = ({children,skill}) => {
  return (
    <div className="max-w-xs mx-auto rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      <div className="relative">
        <div className="absolute bg-black"></div>
        <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 py-2 px-5 flex flex-col items-center">
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
