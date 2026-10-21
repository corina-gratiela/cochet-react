import { SalonAppointments, SalonHours } from '../components/layout/SalonSidebar';
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
      <nav className="service-page__links" aria-label="Secțiuni galerii foto">
        <a href="#galerie-coafor">Coafură, frizerie</a>
        <a href="#galerie-manichiura">Manichiură, pedichiură</a>
        <a href="#galerie-tatuaje">Microblading, micropigmentare</a>
        <a href="#galerie-salon">Salon Cochet</a>
      </nav>

      <section id="galerie-coafor" aria-label="Galerie foto coafuri, styling, permanent">
        <ContentSection title="Galerie foto coafuri, styling, permanent">
          <PhotoGallery desktopSlides={3.5} images={hairGallery} label="Galerie foto coafuri, styling, permanent" />
        </ContentSection>
      </section>

      <section id="galerie-manichiura" aria-label="Galerie foto manichiură">
        <ContentSection title="Galerie foto manichiură">
          <PhotoGallery desktopSlides={3.5} images={manicureGallery} label="Galerie foto manichiură" />
        </ContentSection>
      </section>

      <section id="galerie-tatuaje" aria-label="Galerie foto microblading, micropigmentare, contur buze">
        <ContentSection title="Galerie foto microblading, micropigmentare, contur buze">
          <PhotoGallery desktopSlides={3.5} images={tattoosGallery} label="Galerie foto microblading, micropigmentare, contur buze" />
        </ContentSection>
      </section>

      <section id="galerie-salon" aria-label="Galerie foto Salon Cochet">
        <ContentSection title="Galerie foto Salon Cochet">
          <PhotoGallery images={salonGallery} label="Galerie foto Salon Cochet" desktopSlides={2} />
        </ContentSection>
      </section>
      <div className="service-page__details">
        <SalonAppointments />
        <SalonHours />
      </div>
    </>
  );
}
