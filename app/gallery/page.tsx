//app/pages/gallery/page.tsx
import React from 'react';
import GalleryCard from '../../components/galleryCard';
import { imageData } from '@/lib/galleryData';

export const dynamic = "force-dynamic";

const Gallery = () => {
  
  // Example titles, descriptions, etc., should be replaced with your actual data

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {Object.entries(imageData.images).map(([key, urls], index) => (
        <GalleryCard
          key={index}
          title={`${key.replace('-', ' ').toUpperCase()} COLLECTION`}
          description={urls.description}
          numPhotos={urls.urls.length} // Convert expression to 'unknown' first
          timesSelected={index + 1 + Math.floor(Math.random() * (55 - 4 + 1) + 4)}
          imageUrls={urls as unknown as string[]} // Convert expression to 'unknown' first
          slug={`pack=${key}`}
        />
      ))}
    </div>
  );
};

export default Gallery;