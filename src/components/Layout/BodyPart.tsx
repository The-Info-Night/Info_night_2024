import React from 'react';
import { Link } from 'react-router-dom';

interface BodyPartProps {
  name: string;
  path: string;
  position: string;
  label: string;
}

export function BodyPart({ name, position, label }: BodyPartProps) {
  return (
    <div className={`absolute ${position}`}>
      <div className="w-12 h-12 rounded-full bg-blue-500 bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 cursor-pointer" />
      <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}