import { Link } from 'react-router';
import { navigation } from '../../data/navigation';

export default function FooterNavigation() {
  return (
    <nav className="footer-nav" aria-label="Navigare subsol">
      <ul className="footer-nav__list">
        {navigation.map((item) => (
          <li className="footer-nav__item" key={item.path}>
            <Link className="footer-nav__link" to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}