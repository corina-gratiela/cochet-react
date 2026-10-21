import InfoPanel from '../components/content/InfoPanel';
import { SalonHours } from '../components/layout/SalonSidebar';
import PhoneLink from '../components/content/PhoneLink';
import '../styles/pages/cosmetics.scss';

export default function CosmeticsPage() {
  return (
    <>
      <title>Tratamente faciale, Pensat, epilat la Salon Cochet Sibiu</title>
      <meta name="description" content="Vă oferim servcii de pensat, epilat scurt și lung, epilat brațe, abdomen, tratamente faciale" />
      <h1>Cosmetică</h1>
      <nav className="service-page__links" aria-label="Secțiuni cosmetică">
        <a href="#preturi-cosmetica">Prețuri</a>
        <a href="#tratamente-faciale">Tratamente faciale</a>
        <a href="#pensat-epilat">Pensat și epilat</a>
      </nav>
      <div className="service-page__intro">
        <div>
          <section id="tratamente-faciale" className="category-box">
            <h2 className="category-box__title">Tratamente faciale</h2>
            <p>Vă oferim tratamente faciale anti-aging CNC Skincare. </p>
            <p>Gama de produse CNC Skincare -made in Germany- cuprinde dermato-cosmetice inovatoare, cu ingrediente active, pentru un succes vizibil și de durată. Astfel, efectele tratamentelor CNC Skincare sunt vizibile de la prima ședință!</p>
            <img className="category-box__img" style={{ maxWidth: 600 }} src={import.meta.env.BASE_URL + 'images/site/cosmetica.jpg'} alt="Tratamente faciale anti-aging CNC Skincare" />
          </section>
          <section id="pensat-epilat" className="category-box">
            <h2 className="category-box__title">Pensat și epilat</h2>
            <p>Fie că vă doriți sprâncene frumos conturate sau o piele fină, vă așteptăm la Salon Cochet. Oferim servicii de pensat, epilare pentru femei și bărbați și vopsirea genelor și sprâncenelor, cu grijă și atenție la preferințele dumneavoastră.</p>
          </section>
        </div>
        <InfoPanel title="Programări cosmetică">
          <PhoneLink number="0741 391807" />
        </InfoPanel>
      </div>
      <section id="preturi-cosmetica" className="category-box" aria-labelledby="preturi-cosmetica-title">
        <h2 id="preturi-cosmetica-title">Prețuri</h2>
        <div className="service-prices service-prices--two">
          <div className="preturi">
            <div className="preturi__title">Preturi tratamente</div>
            <div className="preturi__list">
              <div className="pret">
                <div className="pret__label">
                  <h2>Tratament antiaging CNC Skincare - hidratare și fermitate</h2>
                  <p>Efect vizibil de la primul tratament</p>
                  <div>Cuprinde</div>
                  <ul className="etape">
                    <li>Curățare și tonifiere</li>
                    <li>Peeling enzimatic</li>
                    <li>Fiolă Hyaluron lift</li>
                    <li>Mask Vitality</li>
                    <li>Cremă hyaluron</li>
                    <li>Hidratare zona ochilor</li>
                  </ul>
                </div>
                <div className="pret__value">
                  180 lei
                  <br />
                  60 minute
                </div>
              </div>
              <div className="pret">
                <div className="pret__label">
                  <h2>Masaj facial</h2>
                  <div>Cuprinde</div>
                  <ul className="etape">
                    <li>Curățare</li>
                    <li>Tonifiere</li>
                    <li>Masaj manual</li>
                    <li>Cremă cu Hyaluron intens hidratantă</li>
                  </ul>
                </div>
                <div className="pret__value">75 lei</div>
              </div>
            </div>
          </div>

          <div className="preturi">
            <div className="preturi__title">Preturi cosmetică</div>
            <div className="preturi__list">
              <div className="pret">
                <div className="pret__label">Pensat damă</div>
                <div className="pret__value">35 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Pensat bărbați</div>
                <div className="pret__value">40 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Vopsit sprâncene</div>
                <div className="pret__value">35 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Vopsit gene</div>
                <div className="pret__value">35 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Epilat mustață</div>
                <div className="pret__value">10 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Epilat bărbie</div>
                <div className="pret__value">15 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Epilat perciuni</div>
                <div className="pret__value">10 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Epilat urechi</div>
                <div className="pret__value">15 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Epilat nas</div>
                <div className="pret__value">10 lei</div>
              </div>

              <div className="pret">
                <div className="pret__label">Epilat picior lung</div>
                <div className="pret__value">75 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Epilat picior scurt</div>
                <div className="pret__value">55 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Epilat brațe</div>
                <div className="pret__value">45 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Epilat abdomen</div>
                <div className="pret__value">20 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Epilat fese</div>
                <div className="pret__value">30 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Epilat spate</div>
                <div className="pret__value">30 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Epilat piept</div>
                <div className="pret__value">35 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Epilat axilă</div>
                <div className="pret__value">35 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Epilat interfesier</div>
                <div className="pret__value">30 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Epilat inghinal simplu</div>
                <div className="pret__value">50 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Epilat inghinal adânc</div>
                <div className="pret__value">70 lei</div>
              </div>
              <div className="pret">
                <div className="pret__label">Epilat inghinal total (inghinal + interfesier)</div>
                <div className="pret__value">90 lei</div>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <div className="service-page__hours">
        <SalonHours />
      </div>
    </>
  );
}
