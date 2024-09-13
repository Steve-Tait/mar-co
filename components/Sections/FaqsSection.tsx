'use client';
import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { render } from 'storyblok-rich-text-react-renderer';
import { FaqStoryblok, FaqsSectionStoryblok } from '@/component-types-sb';
import SectionWrap from '../Shared/SectionWrap';
import { StoryblokStory } from 'storyblok-generate-ts';

type TFaqsSectionStoryblokWithRelations = FaqsSectionStoryblok & {
  faqs: StoryblokStory<FaqStoryblok>[];
};

const FaqsSection = ({
  blok,
}: {
  blok: TFaqsSectionStoryblokWithRelations;
}) => {
  const { eyebrow, heading, body, faqs } = blok;
  return (
    <Section blok={blok} color='muted'>
      <Container className='max-w-3xl'>
        <SectionWrap {...{ eyebrow, heading, body }}>
          {faqs && (
            <Accordion
              type='single'
              collapsible
              className='flex w-full flex-col gap-y-4'
            >
              {faqs.map((faq: StoryblokStory<FaqStoryblok>, index) => (
                <AccordionItem value={(index + 1).toString()} key={index}>
                  <AccordionTrigger>{faq.content.question}</AccordionTrigger>
                  <AccordionContent>
                    {render(faq.content.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </SectionWrap>
      </Container>
    </Section>
  );
};

export default FaqsSection;
