import React from 'react';

const PixelButton = ({ children, onClick, variant = "primary", className = "" }) => {
  const colors = {
    primary: "bg-blue-600 hover:bg-blue-700 border-blue-800",
    danger: "bg-red-600 hover:bg-red-700 border-red-800",
    success: "bg-green-600 hover:bg-green-700 border-green-800",
    warning: "bg-yellow-500 hover:bg-yellow-600 border-yellow-700",
  };

  const baseColor = colors[variant] || colors.primary;

  return (
    <button
      onClick={onClick}
      className={`
        relative inline-flex items-center justify-center
        px-6 py-3 
        font-pixel text-xs text-white
        border-b-4 border-r-4 
        active:border-b-0 active:border-r-0 active:mt-1 active:ml-1
        transition-all duration-75
        ${baseColor}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default PixelButton;
