import { Link } from 'react-router';

export interface ServiceCardContent {
  path: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  details: string;
}

export default function ServiceCard({ service }: { service: ServiceCardContent }) {
  return (
    <div className="prezentare-servicii__item">
      <div className="prezentare-servicii__wrap">
        <Link to={service.path}>
          <img src={import.meta.env.BASE_URL + service.image} alt={service.alt} width="280" height="200" />
        </Link>
        <h2><Link to={service.path}>{service.title}</Link></h2>
        <p>{service.description}</p>
        <p className="link-detalii"><Link to={service.path}>{service.details}</Link></p>
      </div>
    </div>
  );
}