import React from 'react';

const PixelCard = ({ children, title, className = "" }) => {
  return (
    <div className={`relative bg-white border-4 border-black p-6 ${className}`}>
      {/* Pixel Corners */}
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-white"></div>
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-white"></div>
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white"></div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white"></div>
      
      {/* Inner Border for depth */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-gray-200"></div>
      
      {title && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 font-pixel text-xs border-2 border-black">
          {title}
        </div>
      )}
      
      {children}
    </div>
  );
};

export default PixelCard;
