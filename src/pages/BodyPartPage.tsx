import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BodyPartSection } from '../components/BodyPartSection';

interface BodyPartContentProps {
  partId: keyof typeof bodyPartData;
}

export interface BodyPartSection {
  functions: string;
  pathologies: string;
  health: string;
}

export interface BodyPartInfo {
  title: string;
  sections: BodyPartSection;
}

export interface BodyPartsData {
  [key: string]: BodyPartInfo;
}

const bodyPartData: BodyPartsData = {
  brain: {
    title: "Le Cerveau",
    sections: {
      functions: "Le cerveau coordonne les fonctions vitales via un réseau complexe de neurones et signaux électriques, similaire aux courants marins qui connectent les différents écosystèmes océaniques.",
      pathologies: "Les courants marins, tels que le Gulf Stream, connectent les différents écosystèmes océaniques, transportant chaleur, nutriments et énergie pour maintenir l'équilibre planétaire.",
      health: "Une interruption dans le réseau cérébral (comme un AVC) ou un ralentissement des courants marins (en raison du changement climatique) peut perturber tout le système."
    }
  },
  skeleton: {
    title: "Le Squelette",
    sections: {
      functions: "Le squelette soutient le corps et protège les organes internes, comparable aux récifs coralliens et au plancher océanique qui servent de structure fondamentale.",
      pathologies: "Les récifs coralliens et le plancher océanique servent de structure fondamentale, abritant une immense biodiversité.",
      health: "L'ostéoporose (fragilisation des os) et la destruction des récifs coralliens (blanchiment et pollution) fragilisent la stabilité et la résilience des deux systèmes."
    }
  },
  blood: {
    title: "Le Système Sanguin",
    sections: {
      functions: "Le sang transporte l'oxygène et les nutriments essentiels aux cellules, comme les courants océaniques qui redistribuent les nutriments.",
      pathologies: "Les courants océaniques redistribuent les nutriments et l'oxygène, alimentant les organismes marins.",
      health: "Une mauvaise circulation sanguine ou des zones mortes dans l'Océan (hypoxie due à la pollution) entraînent des déséquilibres mortels."
    }
  },
  skin: {
    title: "La Peau",
    sections: {
      functions: "La peau agit comme une barrière contre les agressions extérieures tout en régulant la température, similaire à la surface de l'océan.",
      pathologies: "La surface de l'Océan agit comme une interface, absorbant les rayons solaires et échangeant des gaz avec l'atmosphère.",
      health: "Une peau endommagée (comme un coup de soleil) et une surface océanique polluée (plastiques, hydrocarbures) altèrent la protection et la régulation."
    }
  },
  digestive: {
    title: "Le Système Digestif",
    sections: {
      functions: "Les organes digestifs décomposent les aliments et redistribuent les éléments essentiels, comme les zones côtières qui recyclent les nutriments.",
      pathologies: "Les zones côtières et les fonds marins dégradent les matières organiques, recyclant les nutriments pour maintenir la chaîne alimentaire.",
      health: "Une indigestion ou un dérèglement des écosystèmes côtiers (pollution et acidification) empêche l'absorption des ressources essentielles."
    }
  },
  immune: {
    title: "Le Système Immunitaire",
    sections: {
      functions: "Le système immunitaire protège le corps contre les maladies, comme la biodiversité marine assure la résilience des océans.",
      pathologies: "La biodiversité marine agit comme un tampon écologique, assurant la résilience face aux perturbations (tempêtes, changements climatiques).",
      health: "Une immunodéficience ou une perte de biodiversité affaiblit la capacité à s’adapter et à se défendre contre les crises."
    }
  },
  kidneys: {
    title: "Les Reins",
    sections: {
      functions: "Les reins filtrent les toxines et maintiennent l'équilibre des fluides, similaire aux mangroves et marais salants.",
      pathologies: "Les mangroves et les marais salants filtrent les polluants et maintiennent la qualité de l’eau dans les zones côtières.",
      health: "Une insuffisance rénale ou la disparition des zones humides conduit à une accumulation toxique et à des déséquilibres."
    }
  },
  lymphatic: {
    title: "Le Système Lymphatique",
    sections: {
      functions: "Le système lymphatique draine les excès de fluides, comme les courants abyssaux transportent les nutriments.",
      pathologies: "Les courants profonds, tels que la circulation thermohaline, transportent les nutriments et redistribuent l’énergie entre les océans.",
      health: "Une obstruction lymphatique ou un effondrement des courants profonds perturbe la régulation globale."
    }
  },
  liver: {
    title: "Le Foie",
    sections: {
      functions: "Le foie élimine les toxines et transforme les substances chimiques, comme les récifs coralliens filtrent les eaux côtières.",
      pathologies: "Les récifs et écosystèmes marins filtrent et détoxifient les eaux côtières.",
      health: "Une insuffisance hépatique ou des récifs saturés de polluants mènent à un empoisonnement du système."
    }
  }
};

export function BodyPartPage({ partId }: BodyPartContentProps) {
  const data = bodyPartData[partId];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{data.title}</h1>
      
      <BodyPartSection 
        title="Chez l'humain"
        content={data.sections.functions}
      />
      
      <BodyPartSection 
        title="Pour l'océan"
        content={data.sections.pathologies}
      />
      
      <BodyPartSection 
        title="Impact écologique"
        content={data.sections.health}
      />

      <Link
        to="/"
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour à l'accueil
      </Link>
    </div>
  );
}