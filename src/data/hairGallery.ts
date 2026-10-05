import type { GalleryImage } from '../components/gallery/PhotoGallery';

// The legacy gallery displays 1–20, excluding the unused 21.jpg.
export const hairGallery: readonly GalleryImage[] = Array.from(
  { length: 20 },
  (_, index) => ({
    src: `images/galerie/coafor/${index + 1}.jpg`,
    alt: 'Salon Cochet Sibiu - coafor, hair styling',
  }),
);