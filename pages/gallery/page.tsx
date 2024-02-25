//app/pages/gallery/page.tsx
import React from 'react';
import { imageData } from '../../lib/galleryData';
import GalleryCard from '../../components/galleryCard';

export const dynamic = "force-dynamic";

const Gallery = () => {
  
  // Example titles, descriptions, etc., should be replaced with your actual data

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {Object.entries(imageData.images).map(([key, urls], index) => (
        <GalleryCard
          key={index}
          title={`${key.replace('-', ' ').toUpperCase()} SETS`}
          description={`Description for ${key}`}
          numPhotos={(urls as string[]).length} // Type annotation added to resolve the 'unknown' type error
          timesSelected={88}
          imageUrls={urls as string[]} // Type annotation added to resolve the 'unknown' type error
          slug={`pack=${key}`}
        />
      ))}
    </div>
  );
};

export default Gallery;
