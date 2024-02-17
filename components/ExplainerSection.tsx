import React from 'react';

export default function ExplainerSection() {
  return (
    <div className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto rounded-lg border border-gray-700 shadow-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-3xl font-bold leading-7 text-center text-white sm:text-4xl sm:truncate">
            How It Works
          </h2>
        </div>
        <div className="flex justify-center items-center p-8">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-auto max-w-4xl rounded-lg shadow-xl"
            playsInline
          >
            <source src={"/aiheadshotprev.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
