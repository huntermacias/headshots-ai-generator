// Assuming you're using TypeScript; adjust types accordingly if not
import Link from 'next/link';
import React from 'react';

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

  return (
    <div className="block w-full bg-black bg-opacity-80 rounded-xl overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-500 ease-in-out">
      <Link href={`/category/${slug}`}>
        <a className='flex justify-center mt-4 space-x-2'>
          {displayImageUrls.map((url, index) => (
            <img
              key={index}
              loading="lazy"
              src={url}
              alt={`Image ${index + 1}`}
              width="120"
              className='rounded-lg opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out transform hover:scale-105'
            />
          ))}
        </a>
      </Link>
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-2">
          {title.toUpperCase()}
        </h3>
        <p className="text-sm text-gray-300">
          {description}
        </p>
      </div>
      <div className="px-6 py-2 flex justify-between items-center">
        <span className="text-xs bg-purple-700 text-white rounded-full px-3 py-1">
          {numPhotos} Photos
        </span>
        <span className="text-xs bg-green-500 text-white rounded-full px-3 py-1">
          {timesSelected}x this week
        </span>
      </div>
    </div>
  );
};

export default GalleryCard;
