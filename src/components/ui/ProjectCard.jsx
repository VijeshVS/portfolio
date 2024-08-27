import React from "react";

const ProjectCard = ({ title, description, image, link,tech }) => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-100">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform"
          />
        </div>
        <div className="p-4 bg-white h-full">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="mt-2 text-gray-600">{description}</p>
          <p className="mt-1 text-blue-700 text-sm">{tech}</p>
        </div>

      </a>
    </div>
  );
};

export default ProjectCard;