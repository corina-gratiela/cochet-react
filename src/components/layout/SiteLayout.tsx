import { Outlet, useMatch } from 'react-router';
import SiteHeader from './SiteHeader';
import MobileNavigation from '../navigation/MobileNavigation';
import SalonSidebar from './SalonSidebar';
import SiteFooter from './SiteFooter';
import '../../styles/components/service-page.scss';

export default function SiteLayout() {
  const isHome = useMatch('/');
  const isHair = useMatch('/servicii/coafor');
  const isManicure = useMatch('/servicii/manichiura');
  const isCosmetics = useMatch('/servicii/cosmetica');
  const isTattoos = useMatch('/servicii/tatuaje');
  const isWideService = isHair || isManicure || isCosmetics || isTattoos;
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
          <div className={`site-content${isHome ? ' site-content--home' : ''}${isWideService ? ' site-content--wide' : ''}`}>
            <div className="site-content__left">
              <Outlet />
            </div>
            {!isWideService && <SalonSidebar />}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
