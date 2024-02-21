//app/gallery/page.tsx
import GalleryCard from '@/components/galleryCard';
import React from 'react';
import imageData from './galleryData';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

const Gallery = () => {
  // Example titles, descriptions, etc., should be replaced with your actual data
  const supabase = createServerComponentClient<Database>({ cookies });

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
