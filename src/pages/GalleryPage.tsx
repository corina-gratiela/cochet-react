import ContentSection from '../components/content/ContentSection';
import PhotoGallery from '../components/gallery/PhotoGallery';
import { salonGallery } from '../data/galleries';
import { hairGallery } from '../data/hairGallery';
import { manicureGallery } from '../data/manicureGallery';
import { tattoosGallery } from '../data/tattoosGallery';

export default function GalleryPage() {
  return (
    <>
      <title>Galerii foto</title>
      <meta name="description" content="Galerie foto Salon Cochet" />
      <h1>Galerii Foto</h1>

      <ContentSection title="Galerie foto coafuri, styling, permanent">
        <PhotoGallery images={hairGallery} label="Galerie foto coafuri, styling, permanent" />
      </ContentSection>

      <ContentSection title="Galerie foto manichiură">
        <PhotoGallery images={manicureGallery} label="Galerie foto manichiură" />
      </ContentSection>

      <ContentSection title="Galerie foto microblading, micropigmentare, contur buze">
        <PhotoGallery images={tattoosGallery} label="Galerie foto microblading, micropigmentare, contur buze" />
      </ContentSection>

      <ContentSection title="Galerie foto Salon Cochet">
        <PhotoGallery images={salonGallery} label="Galerie foto Salon Cochet" desktopSlides={2} />
      </ContentSection>
    </>
  );
}
