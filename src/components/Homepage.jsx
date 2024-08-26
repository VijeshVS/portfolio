import Particles from '../components/ui/ParticleComponent'
import React from "react";


const Homepage = () => {
  return (
    <div
      style={{ height: "calc(100vh - 70px)" }}
      className="z-10 bg-slate-200 font-sans"
    >
      <Particles>
        <div className="flex  flex-col lg:flex-row flex-1 lg:space-x-24 h-full px-6 lg:px-0">
          <div className="flex-1 flex justify-center lg:justify-start items-center">
            <div className="flex text-center flex-col space-y-4 items-center justify-center pl-0 lg:pl-24 h-full">
              <h1 className="text-white text-2xl lg:text-3xl font-bold">
                Hi There,
              </h1>
              <h1 className="text-white text-3xl lg:text-5xl font-bold">
                I'm Vijesh Shetty
              </h1>
              <div className="flex">
                <h1 className="text-white text-xl lg:text-2xl font-bold">
                  I'm onto{" "}
                </h1>
                <div class="w-max">
                  <h1 class="animate-typing ml-2 overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-2 text-lg lg:text-2xl text-white font-bold">
                    Web development
                  </h1>
                </div>
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/vijeshsshetty",
                    "_blank"
                  )
                }
                className="bg-gradient-to-r w-fit from-purple-600 via-pink-500 to-red-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out hover:outline-none hover:ring-2 hover:ring-offset-2 focus:ring-purple-400"
              >
                Connect now!
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center w-full">
            <img
              className="w-56 h-56 lg:w-96 lg:h-96 object-cover rounded-full transition-transform duration-300 hover:scale-105"
              src="./avatar.svg"
              alt="My Photo"
            />
          </div>
        </div>
      </Particles>
    </div>
  );
};

export default Homepage;
