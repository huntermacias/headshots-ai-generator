'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { imageData } from '@/lib/galleryData';
import Link from 'next/link';

const CategoryPage = () => {
  const searchParams = useSearchParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [categoryDetails, setCategoryDetails] = useState({
    prompt: '',
    photoPack: '',
    model: 'Headshot Hub',
    license: 'Free to use with backlink to Headshot Hub'
  });

  useEffect(() => {
    const pack = searchParams.get('pack');
    if (pack) {
      const packData = imageData.images[pack];
      if (packData) {
        setImages(packData.urls);
        setCategoryDetails({
          ...categoryDetails,
          prompt: packData.description,
          photoPack: pack
        });
      }
    }
  }, [searchParams]);

  if (images.length === 0) {
    return <p>Loading...</p>;
  }

  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  const relatedImages = images.slice(1, 7); // Get next 6 images for the small grid

  return (
    <div className="relative container mx-auto px-4 py-8">
      {/* Background image with blur */}
      <div className="absolute inset-0 z-0">
        <img
          src={images[currentImageIndex]}
          alt={`Background Image`}
          className="w-full h-full object-cover filter blur-xl scale-105"
        />
        {/* Overlay to ensure text stands out against any image */}
        <div className="absolute inset-0 bg-black/70 bg-opacity-80 rounded-md"></div>
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <div className="lg:w-1/3  bg-opacity-75 p-6 rounded-xl shadow-xl backdrop-filter backdrop-blur-lg">
          <h1
            className="text-3xl tracking-wider font-semibold mb-6">
            {categoryDetails.photoPack.toUpperCase().replace(/-/g, ' ')} SET
          </h1>

          <div className="text-white mb-6">
            <label className='block text-xs font-medium mb-1'>Prompt</label>
            <textarea
              readOnly
              value={categoryDetails.prompt}
              className="text-white bg-black bg-opacity-50 rounded-md p-4 border border-gray-500 focus:ring-0 w-full h-32 cursor-default"
            />
          </div>

          <div className="text-white mb-6">
            <label className='block text-xs font-medium mb-1'>Model</label>
            <input
              type="text"
              readOnly
              value={categoryDetails.model}
              className="bg-black bg-opacity-50 p-3 rounded-md border border-gray-500 focus:ring-0 w-full cursor-default"
            />
          </div>

          <div className="text-white mb-6">
            <label className='block text-xs font-medium mb-1'>License</label>
            <input
              type="text"
              readOnly
              value={categoryDetails.license}
              className="bg-black bg-opacity-50 p-3 rounded-md border border-gray-500 focus:ring-0 w-full cursor-default"
            />
          </div>
        </div>

        <div className="relative md:w-1/2">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
            className="w-full h-auto max-h-[100vh] object-cover rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="absolute bottom-4 right-4 bg-gradient-to-br from-red-500 to-teal-500/80 py-1 px-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
            <Link href="/get-credits" className="text-white text-lg font-semibold">
              Try this Prompt
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-between items-center">
        <button
          onClick={() => handleImageChange(currentImageIndex - 1)}
          disabled={currentImageIndex === 0}
          className="text-red-500 z-50 disabled:text-gray-500 px-4 text-xl font-bold"
        >
          {'<'}
        </button>

        <div className="relative z-10 mt-8 flex justify-between items-center">
          {relatedImages.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Related Image ${index}`}
              className="w-32 h-48 opacity-70 hover:opacity-100 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-pink-500 shadow-xl hover:shadow-pink-500/50 transition-all duration-300 ease-in-out"
              onClick={() => handleImageChange(index + 1)}
            />
          ))}
        </div>

        <button
          onClick={() => handleImageChange(currentImageIndex + 1)}
          disabled={currentImageIndex === images.length - 1}
          className="text-red-500 z-50 disabled:text-gray-500 px-4 text-xl font-bold"
        >
          {'>'}
        </button>
      </div>
    </div>
  );

};

export default CategoryPage;
