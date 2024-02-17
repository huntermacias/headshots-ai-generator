import React from 'react';
import blur from '/public/blur.png';
import example from '/public/example.png';
import result from '/public/result.png';

export default function ExplainerSection() {
  return (
    <div className="min-h-screen rounded-md text-white py-16 flex flex-col items-center justify-center space-y-10">
      {/* Video introduction */}
      <div className="rounded-lg shadow-xl overflow-hidden w-full max-w-5xl mx-auto hover:scale-105 transition-transform duration-500 ease-in-out">
        <video
          autoPlay
          muted
          loop
          className="w-full"
          playsInline
        >
          <source src={"/aiheadshotprev.mp4"} type="video/mp4" />
        </video>
      </div>


      {/* each step should be a row */}
      {/* Step 1: Upload your images */}
      {/* 2 columns - text on left / image on right */}
      <div className="min-h-screen bg-gradient-to-r from-black/70 to-[#171717] rounded-md text-white py-16 flex flex-col items-center justify-center space-y-10">
      <div className="text-center px-4">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
          How It Works
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Discover the fastest and easiest way to get professional headshots with our AI-powered technology.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-16">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-xl">
            <div className="mb-4 md:mb-0 md:flex-shrink-0">
              <div className="text-4xl font-bold text-[#4D9FEC] bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                1
              </div>
            </div>
            <div className="md:ml-6">
              <h3 className="text-xl font-semibold mb-2">Upload your images</h3>
              <p className="text-gray-400">
                Upload 4+ high-quality selfies: front facing, 1 person in frame, no glasses or hats.
              </p>
              <img src={example.src} alt="AI Headshot example" className="mt-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-xl">
            <div className="order-2 md:order-1">
              <h3 className="text-xl font-semibold mb-2">Our AI gets to work</h3>
              <p className="text-gray-400">
                The AI magic takes ~20 minutes. You'll get an email when it's ready!
              </p>
              <img src={blur.src} alt="AI Headshot blur" className="mt-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="mb-4 md:mb-0 md:order-2 md:ml-6 md:flex-shrink-0">
              <div className="text-4xl font-bold text-[#FA8C16] bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                2
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-xl">
            <div className="mb-4 md:mb-0 md:flex-shrink-0">
              <div className="text-4xl font-bold text-[#10B981] bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                3
              </div>
            </div>
            <div className="md:ml-6">
              <h3 className="text-xl font-semibold mb-2">Get amazing headshots</h3>
              <p className="text-gray-400">
                Once your model is trained, we'll give you amazing headshots!
              </p>
              <img src={result.src} alt="AI Headshot result" className="mt-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  );
}
