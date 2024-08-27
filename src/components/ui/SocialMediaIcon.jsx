import React from "react";

const SocialMediaIcon = ({ icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 transition-transform transform hover:scale-110 duration-300 shadow-lg"
    >
      <img
        src={icon}
        alt="social-media-icon"
        className="w-7 h-7 group-hover:opacity-80 transition-opacity duration-300"
      />
      <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 bg-gradient-to-r from-blue-400 to-purple-600 blur-lg"></div>
    </a>
  );
};

const SocialMediaShowcase = () => {
  return (
    <div className="flex space-x-4">
      <SocialMediaIcon icon="./twitter.svg" link="https://x.com/vijeshsshetty" />
      <SocialMediaIcon icon="./linkedin.svg" link="https://www.linkedin.com/in/vijeshsshetty/" />
      <SocialMediaIcon icon="./github.svg" link="https://github.com/vijeshvs" />
    </div>
  );
};

export default SocialMediaShowcase;
