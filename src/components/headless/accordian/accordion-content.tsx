'use client';
import { ReactNode } from 'react';
import { useAccordion } from './accordion';
import clsx from 'clsx';

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

export function AccordionContent({ children, className }: AccordionContentProps) {
  const { isOpen } = useAccordion();

  return (
    <div
      className={clsx(
        'transition-[max-height] ease-in-out overflow-hidden',
        isOpen ? 'max-h-[500px] duration-700 ' : 'max-h-0 duration-100',
        className
      )}
    >
      <div className="py-2">{children}</div>
    </div>
  );
}
