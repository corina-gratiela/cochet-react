// Keep the original bundled carousel for visual and interaction parity.
export interface OwlOptions {
  loop: boolean;
  margin: number;
  autoplay: boolean;
  autoplayTimeout: number;
  nav: boolean;
  items: number;
  dots: boolean;
}
interface OwlCollection {
  owlCarousel(options: OwlOptions): OwlCollection;
  trigger(event: string): OwlCollection;
}
type JQuery = (element: HTMLElement) => OwlCollection;
type OwlWindow = Window & { jQuery?: JQuery };
let loading: Promise<JQuery> | undefined;

function loadScript(path: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = import.meta.env.BASE_URL + path;
    script.onload = () => resolve();
    script.onerror = () => {
      script.remove();
      reject(new Error(`Unable to load ${path}`));
    };
    document.head.append(script);
  });
}

export function loadLegacyOwl(): Promise<JQuery> {
  loading ??= (async () => {
    await loadScript('vendor/jquery-1.11.3.min.js');
    await loadScript('vendor/owl-carousel/owl.carousel.min.js');
    const jquery = (window as OwlWindow).jQuery;
    if (!jquery) throw new Error('The gallery dependency did not initialize.');
    return jquery;
  })().catch((error: unknown) => {
    loading = undefined;
    throw error;
  });
  return loading;
}