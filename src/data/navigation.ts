import type { NavigationItem } from '../types/navigation';

export const navigation: readonly NavigationItem[] = [
  { path: '/', label: 'Home', mobileLabel: 'Home', icon: 'home', mobile: true },
  { path: '/servicii/coafor', label: 'Coafură, frizerie', mobileLabel: 'Coafură', icon: 'hair', mobile: true },
  { path: '/servicii/manichiura', label: 'Manichiură, pedichiură', mobileLabel: 'Manichiură', icon: 'nails', mobile: true },
  { path: '/servicii/tatuaje', label: 'Tatuaje', mobileLabel: 'Tatuaje', icon: 'eyelash', mobile: true },
  { path: '/servicii/cosmetica', label: 'Cosmetică', mobileLabel: 'Cosmetică', icon: 'cosmetics', mobile: true },
  { path: '/contact', label: 'Contact', mobileLabel: 'Contact', icon: 'mail', mobile: true },
  { path: '/galerie-foto', label: 'Galerie Foto', mobileLabel: 'Foto', icon: 'image', mobile: false },
];