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
  console.log('searchParams', searchParams);

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
  <h2 className="text-4xl font-bold mb-8 decoration-pink-500/80 underline decoration-wavy underline-offset-8 text-pink-600">
    {`IMAGES | ${searchParams.toString().replace('-', ' ').slice(5).toUpperCase()}`}
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {images.map((url, index) => (
      <div
        key={index}
        className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out"
      >
        <img
          src={url}
          alt={`Image ${index}`}
          className="w-full h-auto object-cover transition duration-300 ease-in-out group-hover:brightness-75"
        />
        <div className="absolute inset-0 bg-pink-600 bg-opacity-0 group-hover:bg-opacity-25 transition duration-300 ease-in-out"></div>
      </div>
    ))}
  </div>
    </div>
  );

};

export default CategoryPage;
