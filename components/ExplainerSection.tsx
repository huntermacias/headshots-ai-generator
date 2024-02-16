import React from 'react';
import blur from '/public/blur.png';
import example from '/public/example.png';
import result from '/public/result.png';

export default function ExplainerSection() {
  return (
    <div className="w-full max-w-6xl mt-6 md:mt-16 p-8 bg-[#111111] rounded-lg space-y-8 border-t border-b border-[#2a2938]">
      <h2 className="text-4xl font-bold text-center text-[#EDEDED] mb-8">How It Works</h2>

      {/* Step 1: Upload your images */}
      <div className="space-y-4 transition-all duration-300 hover:text-[#EDEDED]">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-4xl font-bold text-[#4D9FEC] bg-[#1D1C31] border-4 border-[#4D9FEC] rounded-full w-16 h-16 flex items-center justify-center transition-all duration-300">
            1
          </div>
          <h3 className="text-2xl font-semibold">Upload your images</h3>
        </div>
        <p className="text-md text-gray-400 text-center">
          Upload 4+ high-quality selfies: front facing, 1 person in frame, no glasses or hats.
        </p>
        <img
          src={example.src}
          alt="AI Headshot example"
          className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto transition-all duration-300"
        />
      </div>

      {/* Step 2: Train your model */}
      <div className="space-y-4 transition-all duration-300 hover:text-[#EDEDED]">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-4xl font-bold text-[#FA8C16] bg-[#1D1C31] border-4 border-[#FA8C16] rounded-full w-16 h-16 flex items-center justify-center transition-all duration-300">
            2
          </div>
          <h3 className="text-2xl font-semibold">Our AI gets to work</h3>
        </div>
        <p className="text-md text-gray-400 text-center">
          The AI magic takes ~20 minutes. You'll get an email when it's ready!
        </p>
        <img
          src={blur.src}
          alt="AI Headshot blur"
          className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto transition-all duration-300"
        />
      </div>

      {/* Step 3: Generate images */}
      <div className="space-y-4 transition-all duration-300 hover:text-[#EDEDED]">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-4xl font-bold text-[#10B981] bg-[#1D1C31] border-4 border-[#10B981] rounded-full w-16 h-16 flex items-center justify-center transition-all duration-300">
            3
          </div>
          <h3 className="text-2xl font-semibold">Get amazing headshots</h3>
        </div>
        <p className="text-md text-gray-400 text-center">
          Once your model is trained, we'll give you amazing headshots!
        </p>
        <img
          src={result.src}
          alt="AI Headshot result"
          className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto transition-all duration-300"
        />
      </div>
    </div>
  );
}
