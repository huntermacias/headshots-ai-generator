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
    <Link href={`/category?pack=${slug}`} className="group">
  <div className="block w-full overflow-hidden rounded-2xl transform hover:scale-105 transition-all duration-500 ease-in-out bg-gradient-to-br from-gray-900 to-black">
    <div className="relative">
      <div className='flex justify-center mt-4 space-x-4 overflow-x-auto p-4 snap-x snap-mandatory'>
        {displayImageUrls.map((url, index) => (
          <img
            key={index}
            loading="lazy"
            src={url}
            alt={`Image ${index + 1}`}
            className='min-w-[140px] h-full object-cover rounded-xl opacity-90 hover:opacity-100 transition-opacity duration-300 ease-in-out transform group-hover:scale-[1.03] snap-center'
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50 group-hover:opacity-20 transition-opacity duration-500 ease-in-out"></div>
      </div>
    </div>
    <div className="px-6 py-4 bg-opacity-90 backdrop-filter backdrop-blur-sm">
      <h3 className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-2">
        {title.toUpperCase()}
      </h3>
      <p className="text-md md:text-lg text-gray-300">
        {description}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2 mb-8 flex justify-between items-center rounded-b-2xl">
      <span className="flex items-center text-sm md:text-md bg-blue-700 text-white rounded-full px-4 py-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M15 10l4.55-4.55a1 1 0 011.42 0l2.12 2.12a1 1 0 010 1.41L18.43 14m-5 5L5 14l4-4m5 5l4.55 4.55a1 1 0 001.42 0l2.12-2.12a1 1 0 000-1.41L18.43 10m-5-5L5 10l4 4m0 0l-4 4m4-4h12" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        {numPhotos} Photos
      </span>
      <span className="flex items-center text-sm md:text-md bg-purple-600 text-white rounded-full px-4 py-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm4 7a1 1 0 100-2 1 1 0 000 2zm5-1a5 5 0 11-10 0 5 5 0 0110 0z" clip-rule="evenodd" />
          </svg>
        {timesSelected}x this week
      </span>
    </div>
  </div>
</Link>

  );
};

export default GalleryCard;
