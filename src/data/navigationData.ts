export interface NavigationLink {
  path: string;
  label: string;
}

export const navigationLinks: NavigationLink[] = [
  { path: '/', label: 'Accueil' },
  { path: '/brain', label: 'Cerveau' },
  { path: '/skeleton', label: 'Squelette' },
  { path: '/blood', label: 'Sang' },
  { path: '/skin', label: 'Peau' },
  { path: '/digestive', label: 'Système digestif' },
  { path: '/immune', label: 'Système immunitaire' },
  { path: '/kidneys', label: 'Reins' },
  { path: '/lymphatic', label: 'Système lymphatique' },
  { path: '/liver', label: 'Foie' }
];