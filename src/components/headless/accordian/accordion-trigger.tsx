'use client';
import { ReactNode } from 'react';
import { useAccordion } from './accordion';
import clsx from 'clsx';

interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
}

export function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const { toggle } = useAccordion();

  return (
    <button
      onClick={toggle}
      className={clsx('text-lg font-bold py-2 px-4 w-full text-left focus:outline-none bg-gray-100 rounded', className)}
    >
      {children}
    </button>
  );
}
