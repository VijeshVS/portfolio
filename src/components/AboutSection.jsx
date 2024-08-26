import React from "react";

const AboutSection = ({aboutMeRef}) => {
  return (
    <div ref={aboutMeRef}
      className="flex bg-gradient-to-r from-gray-50 py-6 to-gray-300  flex-col space-y-6"
    >
      <h1 className="text-3xl font-medium text-center">About Me</h1>
      <div className="flex flex-col space-y-8 lg:space-y-0 items-center lg:flex-row space-x-4 px-0 lg:px-32">
        <div className="rounded-lg w-64 lg:w-[600px] overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
          <img
            src="./port.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex p-6 justify-center flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold ml-1 text-3xl">Vijesh Shetty</h1>
            <div className="relative bg-violet-50 w-fit px-4 text-purple-500 text-sm font-medium border border-gray-200 rounded-lg shadow-md">
              Full Stack Developer
            </div>
          </div>
          <p>
            My name is Vijesh. I am currently pursuing my undergraduate degree
            at RV College of Engineering in Bangalore. I am really passionate
            about web development and am interested in solving real-world
            problems through technical solutions.
          </p>
          <button className="inline-flex py-2 w-fit animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#f0f4f8,45%,#e2e8f0,55%,#f0f4f8)] bg-[length:200%_100%] px-6 font-medium text-slate-600 transition-colors hover:outline-none hover:border-blue-700 hover:ring-slate-600 hover:ring-offset-2 hover:ring-offset-white">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
