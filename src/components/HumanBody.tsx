import React from 'react';
import { BodyPart } from './BodyPart';

export function HumanBody() {
  const bodyParts = [
    {
      name: 'brain',
      path: '/brain',
      position: 'top-[10%] left-1/2 -translate-x-1/2',
      label: 'Cerveau',
    },
    {
      name: 'lungs',
      path: '/lungs',
      position: 'top-[30%] left-1/2 -translate-x-1/2',
      label: 'Poumons',
    },
    {
      name: 'leftArm',
      path: '/arms',
      position: 'top-[35%] left-[20%]',
      label: 'Bras Gauche',
    },
    {
      name: 'rightArm',
      path: '/arms',
      position: 'top-[35%] right-[20%]',
      label: 'Bras Droit',
    },
    {
      name: 'leftLeg',
      path: '/legs',
      position: 'top-[70%] left-[35%]',
      label: 'Jambe Gauche',
    },
    {
      name: 'rightLeg',
      path: '/legs',
      position: 'top-[70%] right-[35%]',
      label: 'Jambe Droite',
    },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto h-[600px]">
      <div className="absolute inset-0 bg-[url('https://media.discordapp.net/attachments/1308429892664299560/1314355074528706620/Design_sans_titre.png?ex=6753780d&is=6752268d&hm=766cfa88e1cb69fec1aa8bfcf48d8632c0da5f468786d80e59fa84c5fd148d49&=&format=webp&quality=lossless&width=468&height=468')] bg-cover bg-center bg-no-repeat opacity-80 transform scale-x-150" /> 
      {bodyParts.map((part) => (
        <BodyPart key={part.name} {...part} />
      ))}
    </div>
  );
}