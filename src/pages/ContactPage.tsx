import Icon from '../components/content/Icon';
import '../styles/pages/contact.scss';

export default function ContactPage() {
  return (
    <>
      <title>Date de contact Salon Cochet Sibiu</title>
      <meta name="description" content="Salonul cochet situat în Șelimbar, Sibiu vă oferă servicii de coafură, frizerie, manichiură, pedichiură, tatuaje" />
      <div className="contact-item">
        <h2><Icon name="location" />Adresa</h2>
        <p>str. Doamna Stanca, nr.9, Bl.3</p>
        <p>Selimbar - Sibiu, Romania</p>
      </div>
      <div className="contact-item">
        <h2><Icon name="phone" />Contact</h2>
        <div>
          <p><span className="contact-item__label">Telefon:</span>0722 227020</p>
          <p><span className="contact-item__label">Email:</span>contact@salon-cochet.ro</p>
        </div>
      </div>
      <div className="contact-item">
        <h2><Icon name="sphere" />Localizare</h2>
        <div className="harta">
          <iframe
            title="Localizare Salon Cochet"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?q=45.778862%2C%2024.163722&key=AIzaSyCPDBu86ZgQhZdbNgYrMLMWkCA7rivxymk"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
}