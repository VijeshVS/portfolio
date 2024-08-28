import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = ({ eduRef }) => {
  return (
    <div
      ref={eduRef}
      className="flex flex-col space-y-8 py-20 bg-gradient-to-r from-gray-50 to-gray-300"
    >
      <div className="flex font-bold justify-center">
        <FaGraduationCap className="text-4xl" />
        <h1 className="ml-2 text-3xl">My </h1>
        <h1 className="text-3xl ml-2 text-violet-600">Education</h1>
      </div>
      <div className="flex justify-center">
        
      <div className="flex flex-col w-fit space-y-8 items-center p-4">

      <div className="flex flex-col w-fit lg:flex-row bg-white p-4 lg:p-2 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="w-32 h-32 overflow-hidden rounded-lg mx-auto lg:mx-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyawIRbc2YMupSsJT8UqUJmMJD4M4kWJ5CGg&s"
              alt="RV College of Engineering"
              className="w-full h-full transform transition-transform"
            />
          </div>
          <div className="flex flex-col space-y-1 justify-center p-4 text-center lg:text-left">
            <h1 className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
              B.E in Information Science & Engg
            </h1>
            <h1 className="text-md text-gray-700 hover:text-gray-500 transition-colors">
              RV College of Engineering | Bangalore
            </h1>
            <h1 className="font-bold text-lg text-green-500 hover:text-green-400 transition-colors">
              2023-2027
            </h1>
          </div>
        </div>

      

        <div className="flex flex-col w-full lg:flex-row bg-white p-4 lg:p-2 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="w-32 h-32 overflow-hidden rounded-lg mx-auto lg:mx-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzPCvWOVxQN3mhJmuk3B-GiH_WqDaubf1Mw&s"
              alt="Expert Pu College"
              className="w-full h-full transform transition-transform"
            />
          </div>
          <div className="flex flex-col space-y-1 justify-center p-4 text-center lg:text-left">
            <h1 className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
            Pre-University College 
            </h1>
            <h1 className="text-md text-gray-700 hover:text-gray-500 transition-colors">
              Expert PU College | Mangalore
            </h1>
            <h1 className="font-bold text-lg text-green-500 hover:text-green-400 transition-colors">
              2021-2022
            </h1>
          </div>
        </div>

        <div className="flex flex-col w-full lg:flex-row bg-white p-4 lg:p-2 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="w-32 h-32 overflow-hidden rounded-lg mx-auto lg:mx-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/74/Canara_Logo.png"
              alt="Canara"
              className="w-full h-full transform transition-transform"
            />
          </div>
          <div className="flex flex-col space-y-1 justify-center p-4 text-center lg:text-left">
            <h1 className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
            Secondary & Higher Education
            </h1>
            <h1 className="text-md text-gray-700 hover:text-gray-500 transition-colors">
              Canara High School | Mangalore
            </h1>
            <h1 className="font-bold text-2xl text-green-500 hover:text-green-400 transition-colors">
              
            </h1>
          </div>
        </div>


      </div>
      </div>
    </div>
  );
};

export default Education;
