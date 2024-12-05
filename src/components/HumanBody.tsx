import { BodyPart } from './BodyPart';

export function HumanBody() {
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
      position: 'top-[40%] left-[25%]',
      label: 'Squelette',
    },
    {
      name: 'blood',
      path: '/blood',
      position: 'top-[25%] left-[20%]',
      label: 'Système sanguin',
    },
    {
      name: 'skin',
      path: '/skin',
      position: 'top-[15%] right-[20%]',
      label: 'Peau',
    },
    {
      name: 'digestive',
      path: '/digestive',
      position: 'top-[45%] right-[25%]',
      label: 'Système digestif',
    },
    {
      name: 'immune',
      path: '/immune',
      position: 'top-[30%] right-[30%]',
      label: 'Système immunitaire',
    },
    {
      name: 'kidneys',
      path: '/kidneys',
      position: 'top-[60%] left-[30%]',
      label: 'Reins',
    },
    {
      name: 'lymphatic',
      path: '/lymphatic',
      position: 'top-[65%] right-[30%]',
      label: 'Système lymphatique',
    },
    {
      name: 'liver',
      path: '/liver',
      position: 'top-[50%] left-[40%]',
      label: 'Foie',
    }
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