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

export const bodyPartData: BodyPartsData = {
  brain: {
    title: "Le Cerveau",
    sections: {
      functions: "Le cerveau coordonne les fonctions vitales via un réseau complexe de neurones et signaux électriques, similaire aux courants marins qui connectent les différents écosystèmes océaniques.",
      pathologies: "Une interruption dans le réseau cérébral (comme un AVC) peut perturber tout le système, tout comme un ralentissement des courants marins en raison du changement climatique.",
      health: "Maintenir une activité cognitive régulière et une bonne santé cérébrale est essentiel pour la préservation des fonctions neurologiques."
    }
  },
  skeleton: {
    title: "Le Squelette",
    sections: {
      functions: "Le squelette soutient le corps et protège les organes internes, comparable aux récifs coralliens et au plancher océanique qui servent de structure fondamentale.",
      pathologies: "L'ostéoporose fragilise les os, similaire à la destruction des récifs coralliens qui fragilise l'écosystème marin.",
      health: "Une alimentation riche en calcium et vitamine D est cruciale pour maintenir la santé osseuse."
    }
  },
  blood: {
    title: "Le Système Sanguin",
    sections: {
      functions: "Le sang transporte l'oxygène et les nutriments essentiels aux cellules, comme les courants océaniques qui redistribuent les nutriments.",
      pathologies: "Une mauvaise circulation sanguine peut entraîner des déséquilibres, similaire aux zones mortes dans l'océan.",
      health: "Maintenir une activité physique régulière aide à améliorer la circulation sanguine."
    }
  },
  skin: {
    title: "La Peau",
    sections: {
      functions: "La peau agit comme une barrière contre les agressions extérieures tout en régulant la température, similaire à la surface de l'océan.",
      pathologies: "Une peau endommagée altère sa fonction protectrice, comme une surface océanique polluée.",
      health: "Protection solaire et hydratation sont essentielles pour maintenir une peau saine."
    }
  },
  digestive: {
    title: "Le Système Digestif",
    sections: {
      functions: "Les organes digestifs décomposent les aliments et redistribuent les éléments essentiels, comme les zones côtières qui recyclent les nutriments.",
      pathologies: "Une indigestion perturbe l'absorption des nutriments, similaire au dérèglement des écosystèmes côtiers.",
      health: "Une alimentation équilibrée et une bonne hydratation sont cruciales."
    }
  },
  immune: {
    title: "Le Système Immunitaire",
    sections: {
      functions: "Le système immunitaire protège le corps contre les maladies, comme la biodiversité marine assure la résilience des océans.",
      pathologies: "Une immunodéficience affaiblit les défenses, comparable à une perte de biodiversité marine.",
      health: "Un mode de vie sain renforce les défenses immunitaires naturelles."
    }
  },
  kidneys: {
    title: "Les Reins",
    sections: {
      functions: "Les reins filtrent les toxines et maintiennent l'équilibre des fluides, similaire aux mangroves et marais salants.",
      pathologies: "Une insuffisance rénale conduit à une accumulation toxique, comme la disparition des zones humides.",
      health: "Une bonne hydratation et une alimentation faible en sel sont essentielles."
    }
  },
  lymphatic: {
    title: "Le Système Lymphatique",
    sections: {
      functions: "Le système lymphatique draine les excès de fluides, comme les courants abyssaux transportent les nutriments.",
      pathologies: "Une obstruction lymphatique perturbe la régulation, similaire à l'effondrement des courants profonds.",
      health: "L'exercice physique stimule la circulation lymphatique."
    }
  },
  liver: {
    title: "Le Foie",
    sections: {
      functions: "Le foie élimine les toxines et transforme les substances chimiques, comme les récifs coralliens filtrent les eaux côtières.",
      pathologies: "Une insuffisance hépatique mène à un empoisonnement, similaire aux récifs saturés de polluants.",
      health: "Limiter la consommation d'alcool et maintenir une alimentation équilibrée."
    }
  }
};