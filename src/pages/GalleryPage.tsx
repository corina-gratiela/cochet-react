import ContentSection from '../components/content/ContentSection';
import PhotoGallery from '../components/gallery/PhotoGallery';
import { salonGallery } from '../data/galleries';

export default function GalleryPage() {
  return (
    <>
      <title>Galerie foto</title>
      <meta name="description" content="Galerie foto Salon Cochet" />
      <h1>Galerie Foto</h1>
      <ContentSection title="Galerie foto Salon Cochet">
        <PhotoGallery images={salonGallery} label="Galerie foto Salon Cochet" />
      </ContentSection>
    </>
  );
}