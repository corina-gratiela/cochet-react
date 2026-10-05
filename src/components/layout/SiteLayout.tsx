import { Outlet } from 'react-router';
import SiteHeader from './SiteHeader';
import SalonSidebar from './SalonSidebar';
import SiteFooter from './SiteFooter';

export default function SiteLayout() {
  return (
    <div className="body-container">
      <SiteHeader />
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