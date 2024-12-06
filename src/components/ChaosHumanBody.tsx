import React, { useState, useEffect } from 'react';
import { BodyPart } from './BodyPart';
import { useTheme } from '../context/ThemeContext';

export function ChaosHumanBody() {
  const { isDarkMode } = useTheme();
    const bodyParts = [
      {
        name: 'brain',
        path: '/brain',
        position: 'top-[5%] left-1/2 -translate-x-1/2',
        label: 'Cerveau',
      },
      {
        name: 'skeleton',
        path: '/skeleton',
        position: 'top-[50%] right-[0%]',
        label: 'Squelette',
      },
      {
        name: 'blood',
        path: '/blood',
        position: 'top-[100%] right-[100%]',
        label: 'Système sanguin',
      },
      {
        name: 'skin',
        path: '/skin',
        position: 'top-[100%] left-[100%]',
        label: 'Peau',
      },
      {
        name: 'digestive',
        path: '/digestive',
        position: 'top-[0%] left-[0%]',
        label: 'Système digestif',
      },
      {
        name: 'immune',
        path: '/immune',
        position: 'top-[0%] right-[0%]',
        label: 'Système immunitaire',
      },
      {
        name: 'kidneys',
        path: '/kidneys',
        position: 'top-[50%] left-[0%]',
        label: 'Reins',
      },
      {
        name: 'lymphatic',
        path: '/lymphatic',
        position: 'top-[95%] left-3/4 -translate-x-1/2',
        label: 'Système lymphatique',
      },
      {
        name: 'liver',
        path: '/liver',
        position: 'top-[95%] left-1/4 -translate-x-1/2',
        label: 'Foie',
      }
    ];
  

  const backgroundImageUrl = isDarkMode
    ? 'https://cdn.discordapp.com/attachments/1308429892664299560/1314385334880178236/leblanc.png?ex=6753943b&is=675242bb&hm=8b0d959c665e18b67fc0cb4a08927c92af18f0801921265eeca99d572abbbcfe&'
    : 'https://cdn.discordapp.com/attachments/1308429892664299560/1314385335211397212/Design_sans_titre1.png?ex=6753943c&is=675242bc&hm=601be1fc9a87b633d4c10f97d85e989d44bdba6b32a1ddd8767860a22a5281a9&';

  return (
    <div className="relative w-full max-w-md mx-auto h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 transform scale-x-125"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />
      {bodyParts.map((part) => (
        <BodyPart key={part.name} {...part} />
      ))}
    </div>
  );
}