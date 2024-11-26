import DarkModeToggle from '@/components/darkmode-toggle';
import { Accordion } from '@/components/headless/accordian/accordion';
import { AccordionContent } from '@/components/headless/accordian/accordion-content';
import { AccordionTrigger } from '@/components/headless/accordian/accordion-trigger';
import MainFile from '@/components/main-file';
import RichTextEditor from '@/components/rich-text-editor';
import { SearchParamProps } from '@/types';
import { notFound } from 'next/navigation';

export default function RootPage({ searchParams: { id } }: SearchParamProps) {
  if (!id) notFound();
  return (
    <div className="p-10">
      {/* <MainFile id={id as string}/> */}
      <div className="p-4">
        <Accordion>
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>
            <p>This is the content of section 1.</p>
          </AccordionContent>
        </Accordion>

        <Accordion>
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>
            <p>This is the content of section 2.</p>
          </AccordionContent>
        </Accordion>
      </div>
      <RichTextEditor />
    </div>
  );
}
