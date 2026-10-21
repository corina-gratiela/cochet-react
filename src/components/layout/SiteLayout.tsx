import { Outlet, useMatch } from 'react-router';
import SiteHeader from './SiteHeader';
import MobileNavigation from '../navigation/MobileNavigation';
import SalonSidebar from './SalonSidebar';
import SiteFooter from './SiteFooter';

export default function SiteLayout() {
  const isHome = useMatch('/');
  const isHair = useMatch('/servicii/coafor');
  return (
    <div className="body-container">
      <SiteHeader />
      <div className="mobile-menu-shell">
        <div className="wrapper">
          <MobileNavigation />
        </div>
      </div>
      <main className="site-main">
        <div className="wrapper">
          <div className={`site-content${isHome ? ' site-content--home' : ''}${isHair ? ' site-content--hair' : ''}`}>
            <div className="site-content__left">
              <Outlet />
            </div>
            {!isHair && <SalonSidebar />}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
