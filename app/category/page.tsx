'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { imageData } from '@/lib/galleryData';
import Link from 'next/link';
import { ArrowLeftSquare } from 'lucide-react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import GalleryCard from '@/components/galleryCard';

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


  return (
    <div className="relative container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="bg-black mb-12 p-12 rounded-lg shadow-lg relative overflow-hidden">
        <Image
          src={images[currentImageIndex]}
          alt="Dynamic Hero Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-900 opacity-75"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Discover the Art of Photography</h1>
          <p className="text-xl mb-6">Capture life's moments with AI-powered precision. Dive into the {categoryDetails.photoPack.replaceAll('_', ' ')} collection.</p>
          <Link href="/get-credits" className="bg-gradient-to-br from-pink-500 to-purple-500 py-2 px-4 rounded-full text-lg font-medium shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            Explore Now
          </Link>
        </div>
      </div>
      {/* Subtle Background with Overlaid Gradient for Depth */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
        <img
          src={images[currentImageIndex]}
          alt="Elegant Background"
          className="w-full h-full object-cover filter blur-3xl scale-110 transition-transform duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content Card with Apple-inspired Design */}
        <div className="bg-black/50 p-8 rounded-2xl shadow-xl backdrop-filter backdrop-blur-xl backdrop-saturate-150 text-white space-y-6">
          <h1 className="text-4xl font-semibold mb-4 leading-tight tracking-tight">
            {categoryDetails.photoPack.toUpperCase().replace(/_/g, ' ')} SET
          </h1>

          <div className="space-y-4">
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
        </div>

        {/* Main Image with Smooth Transition and Shadow */}
        <div className="relative w-full flex justify-center items-center overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
            className="max-w-full max-h-[95vh] object-contain rounded-2xl transition-all duration-700 ease-in-out hover:scale-105"
          />
          <Link href="/get-credits" className="absolute bottom-4 left-8 bg-gradient-to-br from-blue-600 to-purple-600 py-2 px-4 rounded-lg text-lg font-medium text-white shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
            Try this Prompt
          </Link>
        </div>


      </div>

      <div className="flex flex-col items-center mt-12">
        <div className="flex justify-center items-center gap-8">
          <button
            onClick={() => handleImageChange(currentImageIndex - 1)}
            disabled={currentImageIndex === 0}
            className="p-3 rounded-full bg-gradient-to-r from-gray-300 to-gray-100 text-gray-800 shadow hover:shadow-md disabled:opacity-50"
            aria-label="Previous Image"
          >
            {/* SVG Icon for Left Arrow */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => handleImageChange(currentImageIndex + 1)}
            disabled={currentImageIndex === images.length - 1}
            className="p-3 rounded-full bg-gradient-to-r from-gray-300 to-gray-100 text-gray-800 shadow hover:shadow-md disabled:opacity-50"
            aria-label="Next Image"
          >
            {/* SVG Icon for Right Arrow */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Refined Carousel with Improved Aesthetics */}
        <div className="mt-8 flex snap-x overflow-x-auto scrollbar-hide gap-2">
          {images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Gallery Image ${index}`}
              className="snap-center w-32 h-48 opacity-90 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-white shadow-lg"
              onClick={() => handleImageChange(index)}
            />
          ))}
        </div>

        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {Object.entries(imageData.images).slice(0,4).map(([key, value], index) => (
        <GalleryCard
          key={key} // Using `key` as the react key for better identity management
          title={`${key.replaceAll('_', ' ').toUpperCase()} COLLECTION`}
          description={value.description}
          numPhotos={value.urls.length}
          timesSelected={`${index + 1 + Math.floor(Math.random() * (52))}`} // Simplified random logic
          imageUrls={value} // Directly passing the `value` object which should match expected shape
          slug={key}
        />
      ))}
    </div>
      </div>
    </div>


  );

};

export default CategoryPage;
