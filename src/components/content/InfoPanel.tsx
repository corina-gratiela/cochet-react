import type { ReactNode } from 'react';

export default function InfoPanel({ title, children }: { title: string; children: ReactNode }) {
  return <div className="info-panel"><div className="info-panel__title">{title}</div>{children}</div>;
}