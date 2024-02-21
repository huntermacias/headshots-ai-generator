//  
import Link from 'next/link';
import React from 'react';

const GalleryCard = ({ title, description, numPhotos, timesSelected, imageUrls, slug }: any) => {


  const baseUrl = 'https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=128,height=192,quality=100/https://r2-us-west.photoai.com/';

  // Use the first two image URLs passed via props, or default images if not enough images are provided
  const displayImageUrls = imageUrls.length >= 2 ? imageUrls.slice(0, 2) : imageUrls.concat(Array(2 - imageUrls.length).fill(baseUrl + 'default.jpg'));

  return (
    <Link href={`/category?${slug}`} passHref>
      <div className="w-full rounded-md border-2 border-gray-600 overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-500 ease-in-out  text-white">
        <div className='flex space-x-4 items-center justify-center mt-4'>
          {displayImageUrls.map((url: string, index: number) => (
            <img
              key={index}
              loading="lazy"
              src={url}
              width="120"
              className='rounded-md'
            />
          ))}
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-md mb-2">{title}</div>
          <p className="text-xs">
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 text-xs flex flex-wrap">
          <span className="bg-blue-500 rounded-lg px-3 py-1 font-semibold text-gray-800 mr-2 mb-2">{numPhotos} Photos</span>
          <span className="bg-green-400 rounded-lg px-3 py-1 font-semibold text-gray-800 mr-2 mb-2">{timesSelected} ran this week</span>
        </div>
      </div>
    </Link>
  );
};

export default GalleryCard;
