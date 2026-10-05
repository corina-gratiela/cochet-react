import type { GalleryImage } from '../components/gallery/PhotoGallery';

// Numeric order and cache query match _galerie_manichiura.php.
export const manicureGallery: readonly GalleryImage[] = Array.from(
  { length: 24 },
  (_, index) => ({
    src: `images/galerie/manichiura/${index + 1}.jpg`,
    alt: 'Salon Cochet Sibiu - manichiura, pedichiura',
  }),
);