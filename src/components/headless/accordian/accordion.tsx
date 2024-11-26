'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface AccordionContextType {
  isOpen: boolean;
  toggle: () => void;
}

interface AccordionProviderProps {
  children: ReactNode;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

export const useAccordion = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }
  return context;
};

export function AccordionProvider({ children }: AccordionProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return <AccordionContext.Provider value={{ isOpen, toggle }}>{children}</AccordionContext.Provider>;
}

export function Accordion({ children }: AccordionProviderProps) {
  return <AccordionProvider>{children}</AccordionProvider>;
}
