import ContentSection from "../components/content/ContentSection";
import PhotoGallery from "../components/gallery/PhotoGallery";
import VideoPlayer from "../components/media/VideoPlayer";
import { hairGallery } from "../data/hairGallery";
import "../styles/pages/hair.scss";

export default function HairPage() {
  return (
    <>
      <title>Coafor, frizerie Sibiu. Servicii complexe de tuns, coafat, hair-styling, vopsit, șuvite, permanent</title>
      <meta name="description" content="Servicii complexe de tuns, coafat, vopsit păr scurt, mediu sau lung, vopsit, șuvițe, permanent, extensii de păr, hair styling la Salon Cochet Sibiu" />
      <h1>Coafura si frizerie</h1>
      <div className="category-box">
        <div className="category-box__title">
          <h2>Nou la Salon Cochet: PURE STRAIGHT cu proteină de soia & ulei de macadamia</h2>
        </div>
        <img
          className="category-box__img"
          src={import.meta.env.BASE_URL + "images/pure-straight/01.jpg"}
          alt="Solutia ideala pentru cei care doresc sa-si transforme parul din rebel in par matasos si drept pentru o perioada lunga de timp"
        />

        <p>
          Tratamentul profesional de îndreptare PURE STRAIGHT este soluția ideală pentru cei care doresc să-și transforme părul din creț, ondulat și rebel în păr mătăsos și drept pentru o perioadă
          lungă de timp.
        </p>
        <h3>Efect neted de lungă durată</h3>
        <p>După tratament, părul este vizibil transformat, din rebel și creț, în drept și mătăsos. Rezultatul durează minim 10 săptămâni.</p>
        <h3>Netezește și facilitează stilizarea</h3>
        <p>Părul pufos și creț este vizibil netezit, lucru care facilitează stilizarea și pieptănarea fără efort, chiar și după spălările ulterioare.</p>
        <h3>Elimină efectul de frizz</h3>
        <p>Sigilează cuticula părului, protejand-o de umiditate și contracarează astfel efectul de frizz, chiar și in zilele extrem de umede. </p>
        <h3>Îmbunătățește structura părului</h3>
        <p>Creează un strat protector pe firul de păr ce îmbunătățește structura părului, îi conferă elasticitate și previne ruperea acestuia.</p>

        <div className="video-pure-straight">
          <VideoPlayer src={import.meta.env.BASE_URL + "images/pure-straight/video.mp4"} />
        </div>

        <p>Prețul variază în funcție de lungimea și structura părului. Contactați-ne la numărul de telefon 0722 227020 pentru detalii.</p>

        <p>
          Descăcați{" "}
          <a href={import.meta.env.BASE_URL + "images/pure-straight/prezentare-pure-straight.pdf"} className="link" target="_blank">
            aici
          </a>{" "}
          prezentarea în detaliu.
        </p>
      </div>
      <div className="category-box">
        <div className="category-box__title">
          <h2>Servicii coafură și frizerie</h2>
        </div>
        <p>În tot ceea ce facem, ne bazăm pe calitate, iar calitatea în domeniul hair-styling porneşte de la folosirea produselor profesionale şi cunoașterea nevoilor fiecărui tip de păr.</p>
        <p>
          Oferim servicii de coafură și frizerie pentru femei și bărbați. Ținem cont de nevoile specifice ale fiecărui client, de stilul de viaţă, de linia feţei şi tipul de ten şi vă ajutăm cu
          sfaturi profesionale în alegerea tunsorii, a culorii pentru vopsit.
        </p>
        <p>Tuns, coafat, styling, vopsit şi aranjat, şuvite, permanent, tratament, extensii de păr, cocuri pentru evenimente deosebite, toate acestea la Salon Cochet Sibiu.</p>
        <p>Fie că vă doriți o schimbare de look sau o tunsoare de bază, noi vă ajutăm să faceţi alegerea potrivită pentru dumneavoastră.</p>
      </div>
      <div className="category-box">
        <ContentSection title="Galerie foto coafuri, styling, permanent">
          <PhotoGallery images={hairGallery} label="Galerie foto coafuri, styling, permanent" />
        </ContentSection>
      </div>
      <div className="category-box">
        <p>
          Pentru vopsit folosim cele mai renumite game profesionale şi vă ajutăm în alegerea nuanţei potrivite tenului dumneavoastră, vârstei, tipului de păr, potrivită pentru stilul dumneavoastră de
          viaţă.
        </p>
        <p>Folosim produse profesionale organice pH, PREVIA, Vitality's, Keune, O Way.</p>
        <p>
          Produsele folosite pentru spălat şi coafat sunt cele mai bune produse profesionale şi veţi simţi diferenţa când veţi descoperi că părul dumneavoastră străluceşte de sănătate. În cadrul
          tratamentelor cu fiolă, efectul este vizibil încă de la prima aplicare.
        </p>

        <img className="category-box__img image-desktop" src={import.meta.env.BASE_URL + "images/site/organic.jpg"} alt="Solutii 100% BIO pentru vopsit si tratament acum la Salon Cochet Sibiu" />
        <img
          className="category-box__img image-mobile"
          src={import.meta.env.BASE_URL + "images/site/organic-mobile.jpg"}
          alt="Solutii 100% BIO pentru vopsit si tratament acum la Salon Cochet Sibiu"
        />
        <p>Din octombrie 2015 vă oferim tratamente pentru păr 100% BIO, inclusiv vopsit. Produsele din aceasta gamă nu conțin parabeni, nici arome sintetice ori coloranți artificiali.</p>
        <p>Alegeți ce e mai bun pentru părul dumneavoastră!</p>

        <p>Pentru coafat, styling, vopsit şi aranjat duminica, contactați-ne la 0722 227020</p>
      </div>
      <div className="category-box">
        <div className="preturi">
          <div className="preturi__title">Preturi tuns, spalat</div>
          <div className="preturi__list">
            <div className="pret">
              <div className="pret__label">Tuns păr scurt</div>
              <div className="pret__value">70 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Tuns păr mediu</div>
              <div className="pret__value">75 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Tuns păr lung</div>
              <div className="pret__value">80 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Tuns bărbaţi</div>
              <div className="pret__value">50 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Spălat păr femei</div>
              <div className="pret__value">20 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Spălat păr bărbaţi</div>
              <div className="pret__value">10 lei</div>
            </div>
          </div>
        </div>

        <div className="preturi">
          <div className="preturi__title">Preturi vopsit si decolorat</div>
          <div className="preturi__list">
            <div className="pret">
              <div className="pret__label">Vopsit păr scurt</div>
              <div className="pret__value">200 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Vopsit păr mediu</div>
              <div className="pret__value">230 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Vopsit păr lung</div>
              <div className="pret__value">260 lei</div>
            </div>

            <div className="pret">
              <div className="pret__label">Șuvite păr scurt</div>
              <div className="pret__value">200 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Șuvite păr mediu</div>
              <div className="pret__value">220 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Șuvite păr lung</div>
              <div className="pret__value">240 lei</div>
            </div>

            <div className="pret">
              <div className="pret__label">Decolorat păr rădăcină</div>
              <div className="pret__value">200 lei</div>
            </div>

            <div className="pret">
              <div className="pret__label">Decolorat păr scurt</div>
              <div className="pret__value">200 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Decolorat păr mediu</div>
              <div className="pret__value">230 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Decolorat păr lung</div>
              <div className="pret__value">260 lei</div>
            </div>

            <div className="pret">
              <div className="pret__label">Manoperă vopsit păr scurt</div>
              <div className="pret__value">75 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Manoperă vopsit păr mediu</div>
              <div className="pret__value">80 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Manoperă vopsit păr lung</div>
              <div className="pret__value">95 lei</div>
            </div>
          </div>
        </div>

        <div className="preturi">
          <div className="preturi__title">Preturi coafat, styling, permanent, extensii de par</div>
          <div className="preturi__list">
            <div className="pret">
              <div className="pret__label">Styling</div>
              <div className="pret__value">10 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Tratament, mască</div>
              <div className="pret__value">15 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Aranjat păr scurt</div>
              <div className="pret__value">80 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Aranjat păr lung + difuzor</div>
              <div className="pret__value">120 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Aranjat bucle</div>
              <div className="pret__value">120 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Coafat ocazie (coc)</div>
              <div className="pret__value">120 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Coafat mireasă</div>
              <div className="pret__value">400 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Permanent scurt (cu soluție Bio PREVIA)</div>
              <div className="pret__value">250 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Permanent mediu (cu soluție Bio PREVIA)</div>
              <div className="pret__value">270 lei</div>
            </div>
            <div className="pret">
              <div className="pret__label">Permanent lung (cu soluție Bio PREVIA)</div>
              <div className="pret__value">320 lei</div>
            </div>

            <div className="pret">
              <div className="pret__label">Extensii</div>
              <div className="pret__value">15 lei şuviţa</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
