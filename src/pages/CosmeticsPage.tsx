import "../styles/pages/cosmetics.scss";

export default function CosmeticsPage() {
  return (
    <>
      <title>Tratamente faciale, Pensat, epilat la Salon Cochet Sibiu</title>
      <meta name="description" content="Vă oferim servcii de pensat, epilat scurt și lung, epilat brațe, abdomen, tratamente faciale" />
      <h1>Cosmetica</h1>
      <div className="category-box">
        <div className="category-box__title">Tratamente faciale</div>
        <p>Vă oferim tratamente faciale anti-aging CNC Skincare. </p>
        <p>
          Gama de produse CNC Skincare -made in Germany- cuprinde dermato-cosmetice inovatoare, cu ingrediente active, pentru un succes vizibil și de durată. Astfel, efectele tratamentelor CNC
          Skincare sunt vizibile de la prima ședință!
        </p>
        <p>Pentru programări sunați la numărul de telefon 0741 391807</p>
      </div>

      <div className="category-box">
        <img className="category-box__img" style={{ maxWidth: 600 }} src={import.meta.env.BASE_URL + "images/site/cosmetica.jpg"} alt="Tratamente faciale anti-aging CNC Skincare" />
      </div>

      <div className="category-box">
        <div className="preturi">
          <div className="preturi__title">Preturi tratamente</div>
          <div className="preturi__list" style={{ paddingRight: 30 }}>
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
      </div>

      <div className="category-box">
        <div className="category-box__title">Pensat și epilat</div>
        <p>Vă oferim servicii de epilare damă și bărbați, vopsit gene și sprâncene</p>
        <p>Pentru programări sunați la numărul de telefon 0741 391807</p>
      </div>

      <div className="category-box">
        <div className="preturi">
          <div className="preturi__title">Preturi cosmetica</div>
          <div className="preturi__list" style={{ maxWidth: 500 }}>
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
    </>
  );
}
