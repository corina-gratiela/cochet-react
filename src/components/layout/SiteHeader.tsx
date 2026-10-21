import SiteLogo from './SiteLogo';
import DesktopNavigation from '../navigation/DesktopNavigation';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrapper"><SiteLogo /><DesktopNavigation /></div>
    </header>
  );
}