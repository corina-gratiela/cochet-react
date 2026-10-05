import ContentSection from "../components/content/ContentSection";
import PhotoGallery from "../components/gallery/PhotoGallery";
import { manicureGallery } from "../data/manicureGallery";

export default function ManicurePage() {
  return (
    <>
      <title>Manichiură si pedichiura Sibiu, aplicări unghii cu gel</title>
      <meta name="description" content="Manichiură și pedichiură, aplicări unghii cu gel la Salon Cochet Sibiu" />
      <h1>Manichiura si pedichiura</h1>
      <div className="category-box">
        <p>La Salon Cochet transformăm fiecare manichiură într-o operă de artă - tipsuri, gel, semipermanentă și picturi personalizate pentru unghii impecabile în orice moment!</p>
        <p>
          Pentru îngrijirea mâinilor și picioarelor folosim creme hidratante, seruri și produse profesionale de curățare, menite să ofere o manichiură și o pedichiură impecabile. Serviciile noastre de
          manichiură și pedichiură sunt variate și dedicate atât femeilor, cât și bărbaților.
        </p>
        <p />

        <p>Punem accent pe sănătatea și frumusețea unghiilor, utilizând tehnici profesionale și produse de calitate, care asigură rezistență îndelungată și un aspect perfect.</p>
        <p>Lucrăm cu produse profesionale OPI și Melkior, iar pentru manichiura semipermanentă folosim gama profesională OPI.</p>
      </div>

      <div className="category-box">
        <ContentSection title="Galerie foto manichiură">
          <PhotoGallery images={manicureGallery} label="Galerie foto manichiură" />
        </ContentSection>
      </div>

      <div className="category-box">
        <div className="preturi">
          <div className="preturi__title">Preturi manichiura</div>
          <div className="preturi__list" style={{ maxWidth: 500 }}>
            <div className="pret">
              <div className="pret__label">Manichiură simplă</div>
              <div className="pret__value">70 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Manichiură cu ojă semi-permanentă</div>
              <div className="pret__value">95 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Manichiură cu gel pe unghie naturală</div>
              <div className="pret__value">95 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Construcție cu gel</div>
              <div className="pret__value">160 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Întreținere gel</div>
              <div className="pret__value">110 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Lăcuit</div>
              <div className="pret__value">40 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Manichiură bărbați</div>
              <div className="pret__value">65 lei</div>
            </div>
          </div>
        </div>

        <div className="preturi">
          <div className="preturi__title">Preturi pedichiura</div>
          <div className="preturi__list" style={{ maxWidth: 500 }}>
            <div className="pret">
              <div className="pret__label">Pedichiură simplă</div>
              <div className="pret__value">90 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Pedichiură cu ojă semi-permanentă</div>
              <div className="pret__value">115 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Pedichiură cu gel</div>
              <div className="pret__value">110 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Pedichiură bărbați</div>
              <div className="pret__value">90 lei</div>
            </div>
          </div>
        </div>
      </div>

      <div className="category-box">
        <img className="category-box__img" style={{ maxWidth: 600 }} src={import.meta.env.BASE_URL + "images/site/mani-pedi.jpg"} alt="Manichiura si pedichiura la Salon Cochet Sibiu" />
      </div>
    </>
  );
}
