import ContentSection from "../components/content/ContentSection";
import PhotoGallery from "../components/gallery/PhotoGallery";
import { tattoosGallery } from "../data/tattoosGallery";
import "../styles/pages/tattoos.scss";

export default function TattoosPage() {
  return (
    <>
      <title>Microblading, micropigmentare la Salon Cochet Sibiu</title>
      <meta name="description" content="Vă oferim servicii de microblading, micropigmentare la Salon Cochet Sibiu" />
      <h1>Tatuaje, microblading, micropigmentare</h1>
      <div className="category-box">
        <p>
          Tatuajul pentru sprâncene este o tehnică modernă de tatuare a pielii cu pigmenti cosmetici recomandată în cazul în care sprâncenele sunt prea scurte sau prea rare, au forma inestetică ori au
          fost distruse în timp. Folosim tehnicile de microblading și micropigmentare.
        </p>

        <p>Conturul pentru buze defineşte o linie perfectă a buzelor în armonie perfectă cu chipul dumneavoastră.</p>
        <p>Pentru microblading si micropigmentare sunați la 0730 809072</p>
      </div>

      <div className="category-box">
        <img className="category-box__img" style={{ maxWidth: 600 }} src={import.meta.env.BASE_URL + "images/site/tatuaje.jpg"} alt="Tatuaje, microblading si micropigmentare la Salon Cochet Sibiu" />
      </div>

      <div className="category-box">
        <div className="preturi">
          <div className="preturi__title">Preturi tatuaje</div>
          <div className="preturi__list" style={{ maxWidth: 500 }}>
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
      </div>

      <div className="category-box">
        <ContentSection title="Galerie foto microblading, micropigmentare, contur buze">
          <PhotoGallery images={tattoosGallery} label="Galerie foto microblading, micropigmentare, contur buze" />
        </ContentSection>
      </div>

      <h1>Laminare gene si sprâncene</h1>
      <div className="category-box">
        <p>Laminarea este un procedeu non invaziv care asigură un look natural și care simplifică rutina de make up zilnic.</p>

        <p>Prin laminarea genelor, acestea capătă volum, devin curbate și datorită pigmentării devin mai închise la culoare, lăsând impresia de gene mai groase și bine definite.</p>
        <p>
          Prin laminare, firul de păr din sprânceană devine mai flexibil și poate fi pieptănat și fixat așa cum dorim, dar capătă și volum. Laminarea sprâncenelor oferă un efect de lifting și le face
          să pară mai groase. Totodată, ajută și la umplerea golurilor din sprâncene.
        </p>
      </div>

      <div className="category-box">
        <div className="preturi">
          <div className="preturi__title">Preturi laminare gene si sprâncene</div>
          <div className="preturi__list" style={{ maxWidth: 500 }}>
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
    </>
  );
}
