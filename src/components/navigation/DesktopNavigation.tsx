import { NavLink } from 'react-router';
import { navigation } from '../../data/navigation';

export default function DesktopNavigation() {
  return (
    <nav className="main-menu" aria-label="Navigare principală">
      <ul className="main-menu__list">
        {navigation.map((item) => (
          <li className="main-menu__item" key={item.path}>
            <NavLink to={item.path} end className={({ isActive }) => `main-menu__link${isActive ? ' main-menu__link--active' : ''}`}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}