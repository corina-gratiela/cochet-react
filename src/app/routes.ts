import HomePage from '../pages/HomePage';
import HairPage from '../pages/HairPage';
import ManicurePage from '../pages/ManicurePage';
import TattoosPage from '../pages/TattoosPage';
import CosmeticsPage from '../pages/CosmeticsPage';
import ContactPage from '../pages/ContactPage';
import GalleryPage from '../pages/GalleryPage';

export const routes = [
  { path: '/', Component: HomePage },
  { path: '/servicii/coafor', Component: HairPage },
  { path: '/servicii/manichiura', Component: ManicurePage },
  { path: '/servicii/tatuaje', Component: TattoosPage },
  { path: '/servicii/cosmetica', Component: CosmeticsPage },
  { path: '/contact', Component: ContactPage },
  { path: '/galerie-foto', Component: GalleryPage },
] as const;