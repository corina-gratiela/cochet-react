import { useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router';

export default function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    // Leave history restoration and anchor links to the browser.
    if (navigationType === 'POP' || location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.key, location.hash, navigationType]);

  return null;
}
