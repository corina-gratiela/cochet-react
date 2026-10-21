import { Route, Routes } from 'react-router';
import SiteLayout from '../components/layout/SiteLayout';
import { routes } from './routes';
import NotFoundPage from '../pages/NotFoundPage';
import ScrollToTop from './ScrollToTop';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="/notfound" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
