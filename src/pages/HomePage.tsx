import { Link } from 'react-router';
import ServiceCard from '../components/content/ServiceCard';
import Icon from '../components/content/Icon';
import VideoPlayer from '../components/media/VideoPlayer';
import { homeServices } from '../data/home';
import '../styles/pages/home.scss';

export default function HomePage() {
  return (
    <>
      <title>Salon Cochet Sibiu: coafor, frizerie, manichiură, pedichiură</title>
      <meta name="description" content="Salon Cochet Sibiu vă oferă servicii de coafor, frizerie, manichiură, machiaj, aplicări unghii cu gel, microblading, micropigmentare." />
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__content">
          <p className="home-eyebrow">Șelimbar · Sibiu</p>
          <h1 id="home-title">
            Salon Cochet<span>Răsfăț din cap până în picioare.</span>
          </h1>
          <p className="home-hero__welcome">Vă așteptăm la Salon Cochet Sibiu să fiți răsfățați din cap până în picioare, așa cum oricine își dorește.</p>
          <div className="home-hero__actions">
            <a href="#programari" className="home-button home-button--primary">
              <Icon name="phone" />
              Programează-te
            </a>
            <Link className="home-button home-button--secondary" to="/galerie-foto">
              Descoperă salonul <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="home-hero__location">
            <Icon name="location" />
            str. Doamna Stanca, nr.9, Bl.3, Șelimbar
          </p>
        </div>
        <div className="home-hero__media">
          <div className="video-container home-video">
            <VideoPlayer src={import.meta.env.BASE_URL + 'video/cochet-aniversar.mp4'} />
          </div>
        </div>
      </section>
      <section className="home-services" aria-labelledby="home-services-title">
        <div className="home-section-heading">
          <p className="home-eyebrow">Serviciile noastre</p>
          <h2 id="home-services-title">Îngrijire, în stilul tău.</h2>
        </div>
        <div className="prezentare-servicii">
          {homeServices.map((service) => (
            <ServiceCard key={service.path} service={service} />
          ))}
        </div>
      </section>
      <section className="home-message" aria-labelledby="home-message-title">
        <p className="home-eyebrow">Salon Cochet Sibiu</p>
        <h2 id="home-message-title">Mesajul nostru</h2>
        <p>Ne dorim ca timpul petrecut la Salon Cochet Sibiu să reprezinte pentru fiecare client garanţia serviciilor şi produselor de cea mai înaltă calitate în domeniile coafură, frizerie, hair styling, manichiură şi pedichiură, microblading și micropigmentare, pensat și epilat.</p>
        <p className="semnatura">Mioara, Gabriela, Stefi, Ada, Ruxi, Sonia</p>
      </section>
    </>
  );
}
