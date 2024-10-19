// components/SlidingImages.js
import React from 'react';

interface SlidingImagesProps {
    images: string[]; // Define the type for the images prop
  }

const SlidingImages: React.FC<SlidingImagesProps>  = ({ images }) => {
  return (
    <div className="overflow-hidden relative whitespace-nowrap">
      <div className="animate-slide flex gap-[50px]">
        {images.map((src: string, index: number) => (
          <img key={index} src={src} alt={`Image ${index}`} className="inline-block w-40 h-auto" />
        ))}
      </div>
      <div className="absolute left-full animate-infinite-scroll">
        {images.map((src: string, index: number) => (
          <img key={index} src={src} alt={`Image ${index}`} className="inline-block w-40 h-auto" />
        ))}
      </div>
    </div>
  );
};

export default SlidingImages;