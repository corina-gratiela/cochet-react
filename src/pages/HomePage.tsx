import ServiceCard from '../components/content/ServiceCard';
import VideoPlayer from '../components/media/VideoPlayer';
import { homeServices } from '../data/home';
import '../styles/pages/home.scss';

export default function HomePage() {
  return (
    <>
      <title>Salon Cochet Sibiu: coafor, frizerie, manichiură, pedichiură</title>
      <meta name="description" content="Salon Cochet Sibiu vă oferă servicii de coafor, frizerie, manichiură, machiaj, aplicări unghii cu gel, microblading, micropigmentare." />
      <div className="video-container" style={{ maxWidth: '100%' }}>
        <VideoPlayer src={import.meta.env.BASE_URL + 'video/cochet-aniversar.mp4'} />
      </div>
      <p className="va-asteptam">Vă așteptăm la Salon Cochet Sibiu să fiți răsfățați din cap până în picioare, așa cum oricine își dorește.</p>
      <div className="prezentare-servicii">
        {homeServices.map((service) => <ServiceCard key={service.path} service={service} />)}
      </div>
      <div className="category-box">
        <div className="category-box__title">Mesajul nostru</div>
        <div className="space-h" />
        <div>Ne dorim ca timpul petrecut la Salon Cochet Sibiu să reprezinte pentru fiecare client garanţia serviciilor şi produselor de cea mai înaltă calitate în domeniile coafură, frizerie, hair styling, manichiură şi pedichiură, microblading și micropigmentare, pensat și epilat.</div>
        <p className="semnatura">Mioara, Gabriela, Stefi, Ada, Ruxi</p>
      </div>
    </>
  );
}