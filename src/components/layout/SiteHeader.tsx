import SiteLogo from './SiteLogo';
import DesktopNavigation from '../navigation/DesktopNavigation';
import MobileNavigation from '../navigation/MobileNavigation';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrapper"><SiteLogo /><DesktopNavigation /></div>
      <div className="wrapper"><MobileNavigation /></div>
    </header>
  );
}