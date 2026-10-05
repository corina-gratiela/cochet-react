import type { ReactNode } from 'react';

export default function ContentSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="category-box">
      <div className="category-box__title">{title}</div>
      <div className="space-h" />
      {children}
    </div>
  );
}