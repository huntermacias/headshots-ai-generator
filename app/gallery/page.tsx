// app/pages/gallery/page.tsx
import React from 'react';
import GalleryCard from '../../components/galleryCard';
import { imageData } from '@/lib/galleryData';

export const dynamic = "force-dynamic";

const Gallery = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {Object.entries(imageData.images).map(([key, value], index) => (
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
  );
};

export default Gallery;
