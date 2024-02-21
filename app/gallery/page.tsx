//app/gallery/page.tsx
import React from 'react';
import  imageData  from './galleryData';
import GalleryCard from '@/components/galleryCard';

const Gallery = () => {
  // Example titles, descriptions, etc., should be replaced with your actual data
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {Object.entries(imageData.images).map(([key, urls], index) => (
        <GalleryCard
          key={index}
          title={`${key.replace('-', ' ').toUpperCase()} SETS`}
          description={`Description for ${key}`}
          numPhotos={urls.length}
          timesSelected={`${Math.floor(Math.random() * (55 - 4 + 1) + 4)}`} // Example usage, replace with actual data
          imageUrls={urls}
          slug={`pack=${key}`}
        />
      ))}
    </div>
  );
};

export default Gallery;
