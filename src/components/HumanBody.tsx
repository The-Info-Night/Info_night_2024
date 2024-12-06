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
      position: 'top-[20%] left-[53%]',
      label: 'Squelette',
    },
    {
      name: 'blood',
      path: '/blood',
      position: 'top-[20%] left-[39%]',
      label: 'Système sanguin',
    },
    {
      name: 'skin',
      path: '/skin',
      position: 'top-[25%] left-[25%]',
      label: 'Peau',
    },
    {
      name: 'digestive',
      path: '/digestive',
      position: 'top-[40%] left-[52%]',
      label: 'Système digestif',
    },
    {
      name: 'immune',
      path: '/immune',
      position: 'top-[50%] right-[20%]',
      label: 'Système immunitaire',
    },
    {
      name: 'kidneys',
      path: '/kidneys',
      position: 'top-[40%] left-[39%]',
      label: 'Reins',
    },
    {
      name: 'lymphatic',
      path: '/lymphatic',
      position: 'top-[50%] left-[20%]',
      label: 'Système lymphatique',
    },
    {
      name: 'liver',
      path: '/liver',
      position: 'top-[30%] left-[45%]',
      label: 'Foie',
    }
  ];

  return (
    <div className="relative w-full max-w-md mx-auto h-[600px]">
      <div className="absolute inset-0 bg-[url('https://cdn.discordapp.com/attachments/1308429892664299560/1314381382696304640/Design_sans_titre-removebg-preview.png?ex=6753908d&is=67523f0d&hm=1e5e3d348928b204eb2fbc60816ba48b5d4cb83436a2c104fcd588da5ed1dc41&')] bg-cover bg-center bg-no-repeat opacity-80 transform scale-x-125" />
      {bodyParts.map((part) => (
        <BodyPart key={part.name} {...part} />
      ))}
    </div>
  );
}