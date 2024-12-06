import React from 'react';

interface CardProps {
  icon: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
  isDarkMode: boolean;
}

export function Card({ icon, isFlipped, isMatched, onClick, isDarkMode }: CardProps) {
  return (
    <div 
      onClick={onClick}
      className="w-24 h-24 relative cursor-pointer preserve-3d"
    >
      <div 
        className={`
          absolute 
          w-full 
          h-full 
          transition-all 
          duration-500 
          transform-gpu 
          preserve-3d 
          ${isFlipped || isMatched ? 'rotate-y-180' : ''}
        `}
      >
        {/* Front of card (hidden side) */}
        <div 
          className={`
            absolute 
            w-full 
            h-full 
            backface-hidden 
            rounded-lg 
            shadow-md
            flex 
            items-center 
            justify-center
            transition-colors
            duration-200
            ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}
          `}
        >
          <div className={`w-12 h-12 rounded-full transition-colors duration-200 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`} />
        </div>

        {/* Back of card (icon side) */}
        <div 
          className={`
            absolute 
            w-full 
            h-full 
            backface-hidden 
            bg-blue-500 
            hover:bg-blue-600
            text-white 
            rounded-lg 
            shadow-md
            rotate-y-180
            flex 
            items-center 
            justify-center 
            text-3xl
            transition-colors
            duration-200
          `}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}