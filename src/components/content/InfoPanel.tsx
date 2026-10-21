import type { ReactNode } from 'react';

export default function InfoPanel({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return <div id={id} className="info-panel"><div className="info-panel__title">{title}</div>{children}</div>;
}