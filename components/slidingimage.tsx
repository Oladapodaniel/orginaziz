// components/SlidingImages.js
import React from 'react';

const SlidingImages = ({ images }: any) => {
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