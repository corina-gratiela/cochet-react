# Cochet React

React, Vite, TypeScript, SCSS, and React Router with the migrated shared layout.
The legacy cochet-new project is separate and untouched. Page content
and galleries have been migrated into reusable React components.

## Development

Use Node.js 22.22 or newer (Node 24 was used to verify this setup).

- npm install
- npm run dev
- npm run typecheck
- npm run build
- npm run preview

The default base path is /. For a subdirectory deployment, set VITE_BASE_PATH
(e.g. /cochet-react/) before starting Vite or building. BrowserRouter uses the
same base path. Production hosting must serve index.html for application routes;
Apache configuration and legacy redirects are deferred to the hosting step.

Pages use migrated content. Header, logo, desktop/mobile navigation,
sidebar, footer, global layout, and typography use the legacy markup and styles.
The mobile menu intentionally excludes the gallery route, as in the legacy site.

## Shared layout sources and preservation

- protected/meniu.php: header, logo, desktop and mobile navigation.
- protected/header.php: navigation labels/order and Google Fonts request.
- _site-right.php: appointment numbers, opening hours, service links.
- protected/footer.php: footer contact/services, navigation, copyright, SAL/SOL badges.
- scss/base/_layout.scss and _settings.scss: layout and typography.
- scss/layout/_header.scss, _mobilemenu.scss, _footer.scss: shared components.
- Sidebar rules only from scss/layout/_pages.scss; no page or gallery styles.
- scss/objects/_icons.scss and vendor/_normalize.scss: existing icons and reset.

The 1200px wrapper, 70/30 floated columns, <=1023px mobile layout and <=768px
small-screen rules are retained. SCSS uses modules and standard modern CSS
properties; legacy IE filters and prefixes are omitted. The React root receives
height: 100% to preserve the legacy layout's percentage-height chain.

Internal links use React Router and the configured base rather than the legacy
localhost constant. The copyright year now comes from the browser clock.
Google Fonts remains external. Logo/textures and the WOFF icon font are bundled;
SAL/SOL SVGs retain public paths. External footer URLs remain unchanged.

TypeScript and production builds were checked. Browser visual parity has not yet
been verified. Legacy IE support is outside the modern Vite application target.

## Photo galleries

PhotoGallery uses embla-carousel-react and embla-carousel-autoplay 8.6.0.
There is no jQuery or Owl dependency, global script loading, or imperative slide
markup creation. React renders images, captions, arrows, and snap pagination.

The gallery fills its content column unless maxWidth is provided. Mobile-first
slide widths show one image through 768px, two from 769px, and 2.5 from 1024px.
GalleryPage passes desktopSlides={2} for its three-photo salon gallery.
Images use contain inside a consistent area so no photograph is cropped.

Existing props (images, label, maxWidth, autoplay, autoplayTimeout, navigation,
dots, loop) remain supported. desktopSlides accepts 2 or 2.5. Autoplay defaults
to five seconds and can be paused/resumed using the gallery control. Focus pauses
automatic motion; manual pause persists across resizing and interactions.
For galleries too short for continuous looping, navigation wraps at the ends.
All slider controls and carousel instances are local to their React component.
