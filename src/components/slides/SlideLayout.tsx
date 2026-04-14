import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function SlideLayout({ children, className = '' }: Props) {
  return (
    <div className={`slide-content w-full h-full relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
