import React from 'react'

const Homepage = () => {
  return (
    <div className='flex flex-col justify-center h-full'>
      <h1 className="text-white text-3xl font-bold">Hi There,</h1>
          <h1 className="text-white text-5xl font-bold">I'm Vijesh Shetty</h1>
          <div className="flex">
            <h1 className="text-white text-2xl font-bold">I'm onto </h1>
            <div class="w-max">
              <h1 class="animate-typing ml-2 overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-2 text-2xl text-white font-bold">
                Web development
              </h1>
            </div>
          </div>
          <button onClick={() => window.open('https://www.linkedin.com/in/vijeshsshetty', '_blank')} className="bg-gradient-to-r w-fit from-purple-600 via-pink-500 to-red-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out hover:outline-none hover:ring-2 hover:ring-offset-2 focus:ring-purple-400">
            Connect now!
          </button>
    </div>
  )
}

export default Homepage