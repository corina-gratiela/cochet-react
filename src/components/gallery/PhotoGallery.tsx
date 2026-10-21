import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import type { EmblaCarouselType } from 'embla-carousel';
import '../../styles/components/photo-gallery.scss';

export interface GalleryImage {
  src: string;
  alt: string;
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
  desktopSlides?: 2 | 2.5 | 3.5;
}

export default function PhotoGallery({ images, label, maxWidth, autoplay = true, autoplayTimeout = 3000, navigation = true, dots = true, loop = true, desktopSlides = 2.5 }: PhotoGalleryProps) {
  const [userPaused, setUserPaused] = useState(false);
  const resumePending = useRef(false);
  const autoplayPlugin = useMemo(
    () =>
      Autoplay({
        active: autoplay && images.length > 1 && !userPaused,
        delay: autoplayTimeout,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: true,
      }),
    [autoplay, autoplayTimeout, images.length, userPaused],
  );
  const [viewportRef, api] = useEmblaCarousel(
    {
      align: 'start',
      loop: loop && images.length > 1,
      slidesToScroll: 1,
    },
    [autoplayPlugin],
  );
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const syncControls = useCallback(
    (carousel: EmblaCarouselType) => {
      const positions = carousel.scrollSnapList();
      setSnaps(positions);
      setSelected(carousel.selectedScrollSnap());
      setCanPrev(carousel.canScrollPrev() || (loop && positions.length > 1));
      setCanNext(carousel.canScrollNext() || (loop && positions.length > 1));
    },
    [loop],
  );

  useEffect(() => {
    if (!api) return;
    const onReInit = (carousel: EmblaCarouselType) => {
      syncControls(carousel);
      if (!resumePending.current) return;
      resumePending.current = false;
      // Resume after the autoplay plugin is reactivated, without its first delay.
      if (carousel.canScrollNext()) carousel.scrollNext();
      else carousel.scrollTo(0);
      carousel.plugins().autoplay?.reset();
    };
    syncControls(api);
    api.on('select', syncControls).on('reInit', onReInit);
    return () => {
      api.off('select', syncControls).off('reInit', onReInit);
    };
  }, [api, syncControls]);

  const move = (direction: -1 | 1) => {
    if (!api) return;
    // Embla can fall back to non-looping for short galleries; retain wraparound.
    if (loop && direction === 1 && !api.canScrollNext()) api.scrollTo(0);
    else if (loop && direction === -1 && !api.canScrollPrev()) api.scrollTo(snaps.length - 1);
    else if (direction === 1) api.scrollNext();
    else api.scrollPrev();
    api.plugins().autoplay?.reset();
  };

  if (images.length === 0) return null;

  return (
    <div className={`galerie-foto photo-gallery${desktopSlides === 2 ? ' photo-gallery--two' : desktopSlides === 3.5 ? ' photo-gallery--three-and-half' : ''}`} style={{ maxWidth }} role="region" aria-roledescription="carusel" aria-label={label}>
      <div className="photo-gallery__stage">
        <div className="photo-gallery__viewport" ref={viewportRef}>
          <div className="photo-gallery__track">
            {images.map((image, index) => (
              <div className="photo-gallery__slide" key={image.src} role="group" aria-roledescription="diapozitiv" aria-label={`${index + 1} / ${images.length}`}>
                <div className="photo-gallery__image">
                  <img src={import.meta.env.BASE_URL + image.src} alt={image.alt} draggable={false} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {navigation && snaps.length > 1 && (
          <div className="photo-gallery__navigation">
            <button className="photo-gallery__arrow photo-gallery__arrow--prev" type="button" aria-label="Fotografia precedentă" disabled={!canPrev} onClick={() => move(-1)}>
              <span aria-hidden="true">‹</span>
            </button>
            <button className="photo-gallery__arrow photo-gallery__arrow--next" type="button" aria-label="Fotografia următoare" disabled={!canNext} onClick={() => move(1)}>
              <span aria-hidden="true">›</span>
            </button>
          </div>
        )}
      </div>
      {(dots || autoplay) && snaps.length > 1 && (
        <div className="photo-gallery__controls">
          {dots && (
            <div className="photo-gallery__dots" aria-label="Alege fotografia">
              {snaps.map((_, index) => (
                <button
                  key={index}
                  className="photo-gallery__dot"
                  type="button"
                  aria-label={`Fotografia ${index + 1}`}
                  aria-current={selected === index ? 'true' : undefined}
                  onClick={() => {
                    api?.scrollTo(index);
                    api?.plugins().autoplay?.reset();
                  }}
                >
                  <span />
                </button>
              ))}
            </div>
          )}
          {autoplay && (
            <button
              className="photo-gallery__playback"
              type="button"
              aria-label={userPaused ? 'Pornește redarea automată' : 'Oprește redarea automată'}
              onClick={() => {
                resumePending.current = userPaused;
                setUserPaused((paused) => !paused);
              }}
            >
              {userPaused ? 'Play' : 'Pause'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
