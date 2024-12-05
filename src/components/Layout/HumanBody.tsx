import React from 'react';
import { BodyPart } from './BodyPart';

export function HumanBody() {
  const bodyParts = [
    {
      name: 'brain',
      position: 'top-[10%] left-1/2 -translate-x-1/2',
      label: 'Cerveau',
    },
    {
      name: 'lungs',
      position: 'top-[30%] left-1/2 -translate-x-1/2',
      label: 'Poumons',
    },
    {
      name: 'leftArm',
      position: 'top-[35%] left-[20%]',
      label: 'Bras Gauche',
    },
    {
      name: 'rightArm',
      position: 'top-[35%] right-[20%]',
      label: 'Bras Droit',
    },
    {
      name: 'leftLeg',
      position: 'top-[70%] left-[35%]',
      label: 'Jambe Gauche',
    },
    {
      name: 'rightLeg',
      position: 'top-[70%] right-[35%]',
      label: 'Jambe Droite',
    },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto h-[600px]">
      <div className="absolute inset-0 bg-[url('https://cdn.discordapp.com/attachments/1308429892664299560/1314348391832096828/downloadedImage2.png?ex=675371d4&is=67522054&hm=edb9d7125d4b87c095bda069a018fad25640f45d9909ba42ad73cf7dea3a93fe&')] bg-contain bg-center bg-no-repeat opacity-30" />
      {bodyParts.map((part) => (
        <BodyPart key={part.name} {...part} />
      ))}
    </div>
  );
}