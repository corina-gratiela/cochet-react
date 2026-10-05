export default function VideoPlayer({ src }: { src: string }) {
  return (
    <video controls autoPlay width="100%" muted playsInline>
      <source src={src} type="video/mp4" />
    </video>
  );
}