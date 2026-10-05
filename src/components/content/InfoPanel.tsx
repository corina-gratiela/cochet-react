import type { ReactNode } from 'react';

export default function InfoPanel({ title, children }: { title: string; children: ReactNode }) {
  return <div className="unde-cand"><div className="unde-cand__title">{title}</div>{children}</div>;
}