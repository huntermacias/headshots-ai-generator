'use client'
import Link from 'next/link';
import React, { useState } from 'react';

interface GalleryCardProps {
  title: string;
  description: string;
  numPhotos: number;
  timesSelected: string;
  imageUrls: { urls: string[] };
  slug: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  description,
  numPhotos,
  timesSelected,
  imageUrls,
  slug,
}) => {
  const baseUrl = 'https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=128,height=192,quality=100/https://r2-us-west.photoai.com/';
  const displayImageUrls = imageUrls.urls.length >= 2
    ? imageUrls.urls.slice(0, 2)
    : [...imageUrls.urls, ...Array(2 - imageUrls.urls.length).fill(baseUrl + 'default.jpg')];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };



  return (
    <Link href={`/category?pack=${slug}`} className="container mx-auto mt-16 group block rounded-xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-110 bg-black/30 bg-opacity-90 hover:bg-opacity-100">
      <div className="relative">
        {/* Dynamic Image Carousel with Layered Animation */}
        <div className='carousel relative w-full h-80 overflow-hidden'>
          {displayImageUrls.map((url, index) => (
            <div
              key={index}
              className={`carousel-item absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'} transform scale-100`}
            >
              <img
                loading="lazy"
                src={url}
                alt={`Image ${index + 1}`}
                className='w-full h-full object-contain p-2 rounded-xl opacity-90 hover:opacity-100 transition-opacity duration-300 ease-in-out'
              />
            </div>
          ))}
          {/* Enhanced Gradient Overlay for Depth and Focus */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
        </div>


        {/* Animated Content Overlay for Immersive Experience */}
        <div className="absolute bottom-0 w-full p-6 transition-all duration-500 ease-in-out group-hover:bg-black/50">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mb-3 transition-colors duration-500 ease-in-out">
            {title.toUpperCase().replace(/_/g, ' ')}
          </h3>
          <p className="text-xs text-gray-300 mb-6 transition-opacity duration-500 ease-in-out group-hover:text-gray-200">
            {description}
          </p>

          {/* Interactive Stats with Visual Feedback */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-green-400 transition-colors duration-300 ease-in-out group-hover:text-green-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6.5V5a2 2 0 012-2h2.172a2 2 0 011.414.586l1.828 1.828A2 2 0 0013.828 5H16a2 2 0 012 2v1.5M4 6.5v11a2 2 0 002 2h12a2 2 0 002-2v-11M4 6.5H3m18 0h1m-1 0a9 9 0 11-18 0m18 0h1m-9 5a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
              <span className="text-lg font-medium text-white transition-opacity duration-300 ease-in-out group-hover:opacity-90">{numPhotos} Photos</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-purple-400 transition-colors duration-300 ease-in-out group-hover:text-purple-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.37 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.782-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
              <span className="text-lg font-medium text-white transition-opacity duration-300 ease-in-out group-hover:opacity-90">{timesSelected}x this week</span>
            </div>
          </div>
        </div>
      </div>
    </Link>




  );
};

export default GalleryCard;
