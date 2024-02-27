import React from 'react';
import blur from '/public/blur.png';
import example from '/public/example.png';
import result from '/public/result.png';

export default function ExplainerSection() {
  return (
    <div className=" rounded-md text-white flex flex-col m-28 items-center justify-center bg-opacity-20 space-y-10 ">
      {/* Video introduction */}
      <div className="rounded-lg shadow-xl overflow-hidden w-full max-w-5xl mx-auto">
        <video
          autoPlay
          muted
          loop
          className="w-3/4 text-center mx-auto rounded-lg"
          playsInline
        >
          <source src={"/aiheadshotprev.mp4"} type="video/mp4" />
        </video>
      </div>

      {/* How It Works Section */}
      <div className="text-center px-4">
        <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          How It Works
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Discover the fastest and easiest way to get professional headshots with our AI-powered technology.
        </p>
      </div>

      {/* Step-by-Step Guide */}
      <div className="flex flex-wrap justify-center gap-16 items-stretch">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-xl gap-6">
          <div className="bg-gradient-to-tr from-purple-500 to-blue-600 p-2 rounded-full">
            <div className="bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center">
              1
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Upload your images</h3>
            <p className="text-gray-400">
              Upload 4+ high-quality selfies: front facing, one person in frame, no glasses or hats.
            </p>
            <img src={example.src} alt="AI Headshot example" className="mt-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-xl gap-6">
          <div className="bg-gradient-to-tr from-pink-600 to-red-500 p-2 rounded-full md:order-2">
            <div className="bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center">
              2
            </div>
          </div>
          <div className="md:order-1">
            <h3 className="text-xl font-semibold mb-2">Our AI gets to work</h3>
            <p className="text-gray-400">
              The AI magic takes ~20 minutes. You'll get an email when it's ready!
            </p>
            <img src={blur.src} alt="AI Headshot blur" className="mt-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-xl gap-6">
          <div className="bg-gradient-to-tr from-green-500 to-teal-400 p-2 rounded-full">
            <div className="bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center">
              3
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Get amazing headshots</h3>
            <p className="text-gray-400">
              Once your model is trained, we'll give you amazing headshots!
            </p>
            <img src={result.src} alt="AI Headshot result" className="mt-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
