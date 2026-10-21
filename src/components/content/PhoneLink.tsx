import type { ReactNode } from 'react';

interface PhoneLinkProps {
  number: string;
  children?: ReactNode;
  className?: string;
}

export default function PhoneLink({ number, children, className = '' }: PhoneLinkProps) {
  return (
    <a className={`phone-link ${className}`.trim()} href={`tel:${number.replace(/[^+\d]/g, '')}`}>
      {children ?? number}
    </a>
  );
}
