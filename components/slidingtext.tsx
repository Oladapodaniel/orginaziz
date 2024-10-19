// components/SlidingText.js
import React from 'react';

const SlidingText = ({ text }: any) => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative">
      <div className="animate-slide">{text}</div>
      <div className="absolute left-full animate-slide">{text}</div>
    </div>
  );
};

export default SlidingText;