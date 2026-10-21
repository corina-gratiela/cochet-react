import InfoPanel from '../components/content/InfoPanel';
import PhoneLink from '../components/content/PhoneLink';
import { SalonHours } from '../components/layout/SalonSidebar';
import ContentSection from '../components/content/ContentSection';
import PhotoGallery from '../components/gallery/PhotoGallery';
import { manicureGallery } from '../data/manicureGallery';

export default function ManicurePage() {
  return (
    <>
      <title>Manichiură si pedichiura Sibiu, aplicări unghii cu gel</title>
      <meta name="description" content="Manichiură și pedichiură, aplicări unghii cu gel la Salon Cochet Sibiu" />
      <h1>Manichiură și pedichiură</h1>
      <nav className="service-page__links" aria-label="Secțiuni manichiură și pedichiură">
        <a href="#preturi-manichiura">Prețuri</a>
        <a href="#galerie-manichiura">Galerie foto</a>
      </nav>
      <div className="service-page__intro">
        <div className="category-box">
          <p>La Salon Cochet transformăm fiecare manichiură într-o operă de artă - tipsuri, gel, semipermanentă și picturi personalizate pentru unghii impecabile în orice moment!</p>
          <p>Pentru îngrijirea mâinilor și picioarelor folosim creme hidratante, seruri și produse profesionale de curățare, menite să ofere o manichiură și o pedichiură impecabile. Serviciile noastre de manichiură și pedichiură sunt variate și dedicate atât femeilor, cât și bărbaților.</p>
          <p />

          <p>Punem accent pe sănătatea și frumusețea unghiilor, utilizând tehnici profesionale și produse de calitate, care asigură rezistență îndelungată și un aspect perfect.</p>
          <p>Lucrăm cu produse profesionale OPI și Melkior, iar pentru manichiura semipermanentă folosim gama profesională OPI.</p>
        </div>
        <InfoPanel title="Programări manichiură, pedichiură">
          <div className="service-page__appointments">
            <PhoneLink number="0758 641200" />
            <PhoneLink number="0732 125905" />
            <PhoneLink number="0743 505205" />
          </div>
        </InfoPanel>
      </div>
      <section id="preturi-manichiura" className="category-box" aria-labelledby="manicure-prices-title">
        <h2 id="manicure-prices-title">Prețuri</h2>
        <div className="service-prices service-prices--two">
          <div className="preturi">
            <div className="preturi__title">Prețuri manichiură</div>
            <div className="preturi__list">
              <div className="pret">
                <div className="pret__label">Manichiură simplă</div>
                <div className="pret__value">70 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Manichiură cu ojă semi-permanentă</div>
                <div className="pret__value">130 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Manichiură cu gel pe unghie naturală</div>
                <div className="pret__value">130 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Construcție cu gel</div>
                <div className="pret__value">170-185 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Întreținere gel</div>
                <div className="pret__value">130 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Manichiură bărbați</div>
                <div className="pret__value">70 lei</div>
              </div>
            </div>
          </div>

          <div className="preturi">
            <div className="preturi__title">Prețuri pedichiură</div>
            <div className="preturi__list">
              <div className="pret">
                <div className="pret__label">Pedichiură simplă</div>
                <div className="pret__value">90 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Pedichiură cu ojă semi-permanentă</div>
                <div className="pret__value">120-150 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Pedichiură bărbați</div>
                <div className="pret__value">90 lei</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="galerie-manichiura" className="category-box" aria-label="Galerie foto manichiură">
        <ContentSection title="Galerie foto manichiură">
          <PhotoGallery desktopSlides={3.5} images={manicureGallery} label="Galerie foto manichiură" />
        </ContentSection>
      </section>
      <div className="category-box">
        <img className="category-box__img" style={{ maxWidth: 600 }} src={import.meta.env.BASE_URL + 'images/site/mani-pedi.jpg'} alt="Manichiura si pedichiura la Salon Cochet Sibiu" />
      </div>
      <div className="service-page__hours">
        <SalonHours />
      </div>
    </>
  );
}
