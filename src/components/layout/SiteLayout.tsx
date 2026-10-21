import { Outlet } from 'react-router';
import SiteHeader from './SiteHeader';
import MobileNavigation from '../navigation/MobileNavigation';
import SalonSidebar from './SalonSidebar';
import SiteFooter from './SiteFooter';

export default function SiteLayout() {
  return (
    <div className="body-container">
      <SiteHeader />
      <div className="mobile-menu-shell">
        <div className="wrapper"><MobileNavigation /></div>
      </div>
      <main className="site-main">
        <div className="wrapper">
          <div className="site-content">
            <div className="site-content__left"><Outlet /></div>
            <SalonSidebar />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}