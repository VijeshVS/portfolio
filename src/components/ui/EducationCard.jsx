import React from 'react'

const EducationCard = () => {
  return (
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
            <h1 className="font-bold text-2xl text-green-500 hover:text-green-400 transition-colors">
              2021-2022
            </h1>
          </div>
        </div>
  )
}

export default EducationCard