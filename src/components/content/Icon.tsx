export default function Icon({ name }: { name: string }) {
  return <i className={`icon icon-${name}`} aria-hidden="true" />;
}