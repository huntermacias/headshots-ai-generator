import React from 'react';
import blur from '/public/blur.png';
import example from '/public/example.png';
import result from '/public/result.png';
import Link from 'next/link';

export default function ExplainerSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black bg-opacity-70 p-4 rounded-md">
      {/* Hero section with video introduction */}
      <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg mb-8">
        <video autoPlay loop muted playsInline className="w-full">
        <source src={"/aiheadshotprev.mp4"} type="video/mp4" />
        </video>
      </div>

      {/* How It Works Section */}
      <section className="text-center mt-1 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          How It Works
        </h2>
        <p className="mt-4 text-gray-300">
          Discover the fastest way to get professional headshots with our AI.
        </p>
      </section>

      {/* Steps Section */}
      <section className="mt-10 w-full">
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 mx-auto">
          {/* Step 1 */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-6">
              <img src={example.src} alt="Upload" className="w-full mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">1. Upload Your Photo</div>
              <p className="text-gray-200">Start by uploading a high-quality photo of yourself.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-teal-400 rounded-lg p-6">
              <img src={blur.src} alt="AI Works" className="w-full mb-4" />
              <div className="text-2xl font-bold text-white mb-2">2. AI Enhancement</div>
              <p className="text-gray-200">Our AI works its magic to enhance your headshot.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6">
              <img src={result.src} alt="Result" className="w-full mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">3. Download</div>
              <p className="text-gray-200">Download your professional AI-enhanced headshot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="m-10">
        <Link href="/login" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-l text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out">
          Get Started
        </Link>
      </div>
    </div>
  );
}
