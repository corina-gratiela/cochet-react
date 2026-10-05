import type { GalleryImage } from '../components/gallery/PhotoGallery';

// Preserve the two numeric sequences and ordering from _galerie_tatuaje.php.
const alt = 'Salon Cochet Sibiu - tatuaje prin microblading si micropigmentare';
export const tattoosGallery: readonly GalleryImage[] = [
  ...Array.from({ length: 9 }, (_, index) => ({
    src: `images/galerie/tatuaje/gabi/${index + 1}.jpg`, alt,
  })),
  ...Array.from({ length: 7 }, (_, index) => ({
    src: `images/galerie/tatuaje/${index + 1}.jpg`, alt,
  })),
];