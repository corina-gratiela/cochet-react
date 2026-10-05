import { useEffect, useRef, useState } from 'react';
import { loadLegacyOwl } from './legacyOwl';
import '../../styles/components/photo-gallery.scss';

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}
interface PhotoGalleryProps {
  images: readonly GalleryImage[];
  label: string;
  maxWidth?: number;
  autoplay?: boolean;
  autoplayTimeout?: number;
  navigation?: boolean;
  dots?: boolean;
  loop?: boolean;
}

export default function PhotoGallery({
  images, label, maxWidth = 700, autoplay = true,
  autoplayTimeout = 5000, navigation = true, dots = true, loop = true,
}: PhotoGalleryProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;
    let disposed = false;
    let destroy: (() => void) | undefined;
    setFailed(false);

    // Owl owns this empty subtree; React never reconciles its generated DOM.
    for (const image of images) {
      const item = document.createElement('div');
      item.className = 'item';
      const photo = document.createElement('img');
      photo.src = import.meta.env.BASE_URL + image.src;
      photo.alt = image.alt;
      item.append(photo);
      if (image.caption) {
        const caption = document.createElement('div');
        caption.className = 'info-poza';
        caption.textContent = image.caption;
        item.append(caption);
      }
      element.append(item);
    }

    void loadLegacyOwl().then((jquery) => {
      if (disposed) return;
      const carousel = jquery(element);
      carousel.owlCarousel({
        loop, margin: 10, autoplay, autoplayTimeout,
        nav: navigation, items: 1, dots,
      });
      destroy = () => { carousel.trigger('destroy.owl.carousel'); };
      // Accessible names without changing the original controls or appearance.
      element.querySelector('.owl-prev')?.setAttribute('aria-label', 'Fotografia precedentă');
      element.querySelector('.owl-next')?.setAttribute('aria-label', 'Fotografia următoare');
      element.querySelectorAll('.owl-dot').forEach((dot, index) => {
        dot.setAttribute('aria-label', `Fotografia ${index + 1}`);
      });
    }).catch(() => {
      if (!disposed) setFailed(true);
    });

    return () => {
      disposed = true;
      destroy?.();
      element.replaceChildren();
    };
  }, [images, autoplay, autoplayTimeout, navigation, dots, loop]);

  return (
    <div className="galerie-foto" style={{ maxWidth }} role="region" aria-label={label}>
      <div ref={carouselRef} className={`owl-carousel owl-theme${failed ? ' photo-gallery--fallback' : ''}`} />
    </div>
  );
}