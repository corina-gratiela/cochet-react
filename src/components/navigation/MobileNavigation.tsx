import { NavLink } from 'react-router';
import { navigation } from '../../data/navigation';
import Icon from '../content/Icon';

export default function MobileNavigation() {
  return (
    <div className="mobile-menu">
      <nav className="menu-nav" aria-label="Navigare mobilă">
        <ul className="menu-nav__list">
          {navigation.filter((item) => item.mobile).map((item) => (
            <li className="menu-nav__item" key={item.path}>
              <NavLink to={item.path} end className={({ isActive }) => `menu-nav__link${isActive ? ' menu-nav__link--active' : ''}`}>
                <Icon name={item.icon} />{item.mobileLabel}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}