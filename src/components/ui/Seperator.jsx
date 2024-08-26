import React from 'react';

const Separator = () => {
  return (
    <div className="relative flex items-center justify-center h-[68px] border-[0.5px]">
      <div className="absolute inset-0 h-[2px]" />
      <div className="relative bg-white px-4 text-gray-600 text-sm font-semibold border border-gray-200 rounded-full shadow-md">
        Vijesh Shetty | Portfolio
      </div>
    </div>
  );
};

export default Separator;
