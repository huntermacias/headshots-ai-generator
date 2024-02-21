'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import imageData from '../gallery/galleryData';

// Define the expected structure of the imageData object
type ImageData = {
  images: {
    [key: string]: string[];
  };
};

const CategoryPage = () => {
  const searchParams = useSearchParams();
  const [images, setImages] = useState<string[]>([]);
  // console.log('searchParams', searchParams);

  useEffect(() => {
    const pack = searchParams.get('pack'); // Get the 'pack' query parameter
    // console.log('pack', pack);
    if (pack) {
      // Here we assert that imageData is of type ImageData and pack is one of its keys
      const packImages = (imageData as ImageData).images[pack];
      if (packImages) {
        setImages(packImages);
      }
    }
  }, [searchParams]);

  // If images are not loaded yet, show loading
  if (images.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4">
      {/* <div className="hero-section">
        <div className="perspective-container">
          {images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Image ${index}`}
              className="angled-image"
            />
          ))}
        </div>
      </div> */}
  <h2 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600">
    {`IMAGES | ${searchParams.toString().replace('-', ' ').slice(5).toUpperCase()}`}
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {images.map((url, index) => (
      <div
        key={index}
        className="group overflow-hidden rounded-xl shadow-2xl hover:shadow-pink-500/50 transform hover:-translate-y-2 transition duration-500 ease-in-out"
      >
        <img
          src={url}
          alt={`Image ${index}`}
          className="w-full h-auto object-cover transition duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 flex justify-center items-center transition duration-500 ease-in-out">
          <span className="text-white text-lg font-semibold border rounded-md px-3 hover:bg-transparent/80 cursor-pointer">View</span>
        </div>
      </div>
    ))}
  </div>
    </div>
  );

};

export default CategoryPage;
