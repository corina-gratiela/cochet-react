import InfoPanel from '../components/content/InfoPanel';
import { SalonHours } from '../components/layout/SalonSidebar';
import PhoneLink from '../components/content/PhoneLink';
import ContentSection from '../components/content/ContentSection';
import PhotoGallery from '../components/gallery/PhotoGallery';
import { tattoosGallery } from '../data/tattoosGallery';
import '../styles/pages/tattoos.scss';

export default function TattoosPage() {
  return (
    <>
      <title>Microblading, micropigmentare la Salon Cochet Sibiu</title>
      <meta name="description" content="Vă oferim servicii de microblading, micropigmentare la Salon Cochet Sibiu" />
      <h1>Tatuaje, microblading, micropigmentare</h1>
      <nav className="service-page__links" aria-label="Secțiuni tatuaje și laminare">
        <a href="#preturi-tatuaje">Prețuri</a>
        <a href="#galerie-tatuaje">Galerie foto</a>
        <a href="#laminare">Laminare gene si sprâncene</a>
      </nav>
      <div className="service-page__intro">
        <div className="category-box tattoos-intro">
          <div>
            <p>Tatuajul pentru sprâncene este o tehnică modernă de tatuare a pielii cu pigmenti cosmetici recomandată în cazul în care sprâncenele sunt prea scurte sau prea rare, au forma inestetică ori au fost distruse în timp. Folosim tehnicile de microblading și micropigmentare.</p>
            <div className="tattoos-intro__image">
              <img className="category-box__img" src={import.meta.env.BASE_URL + 'images/site/tatuaje.jpg'} alt="Tatuaje, microblading si micropigmentare la Salon Cochet Sibiu" />
            </div>

            <p>Conturul pentru buze defineşte o linie perfectă a buzelor în armonie perfectă cu chipul dumneavoastră.</p>
            <p>
              Pentru microblading si micropigmentare sunați la <PhoneLink number="0730 809072" />
            </p>
          </div>
        </div>
        <InfoPanel title="Programări microblading, micropigmentare">
          <PhoneLink number="0730 809072" />
        </InfoPanel>
      </div>
      <section id="preturi-tatuaje" className="category-box" aria-labelledby="preturi-tatuaje-title">
        <h2 id="preturi-tatuaje-title">Prețuri</h2>
        <div className="service-prices service-prices--two">
          <div className="preturi">
            <div className="preturi__title">Preturi tatuaje</div>
            <div className="preturi__list">
              <div className="pret">
                <div className="pret__label">Tatuaj micropigmentare cu retuş inclus</div>
                <div className="pret__value">750 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Tatuaj microblading cu retuş inclus</div>
                <div className="pret__value">750 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Contur de buze</div>
                <div className="pret__value">600 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Buze pline</div>
                <div className="pret__value">750 lei</div>
              </div>
            </div>
          </div>

          <div className="preturi">
            <div className="preturi__title">Preturi laminare gene si sprâncene</div>
            <div className="preturi__list">
              <div className="pret">
                <div className="pret__label">Laminare gene</div>
                <div className="pret__value">150 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Laminare sprâncene</div>
                <div className="pret__value">150 lei</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="galerie-tatuaje" className="category-box" aria-label="Galerie foto microblading, micropigmentare, contur buze">
        <ContentSection title="Galerie foto microblading, micropigmentare, contur buze">
          <PhotoGallery desktopSlides={3.5} images={tattoosGallery} label="Galerie foto microblading, micropigmentare, contur buze" />
        </ContentSection>
      </section>
      <section id="laminare" className="category-box" aria-labelledby="laminare-title">
        <h2 id="laminare-title">Laminare gene si sprâncene</h2>
        <div className="category-box">
          <p>Laminarea este un procedeu non invaziv care asigură un look natural și care simplifică rutina de make up zilnic.</p>

          <p>Prin laminarea genelor, acestea capătă volum, devin curbate și datorită pigmentării devin mai închise la culoare, lăsând impresia de gene mai groase și bine definite.</p>
          <p>Prin laminare, firul de păr din sprânceană devine mai flexibil și poate fi pieptănat și fixat așa cum dorim, dar capătă și volum. Laminarea sprâncenelor oferă un efect de lifting și le face să pară mai groase. Totodată, ajută și la umplerea golurilor din sprâncene.</p>
        </div>
      </section>
      <div className="service-page__hours">
        <SalonHours />
      </div>
    </>
  );
}
