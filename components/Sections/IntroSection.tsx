'use client';
import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import Heading from '../Shared/Heading';
import { ButtonStoryblok, IntroSectionStoryblok } from '@/component-types-sb';
import { cn } from '@/lib/utils';
import RichText from '../Block/RichText';
import Button from '../Block/Button';
import ButtonGroup from '../Shared/ButtonGroup';

const IntroSection = ({ blok }: { blok: IntroSectionStoryblok }) => {
  const { heading, eyebrow, content, button } = blok || {};

  return (
    <Section blok={blok}>
      <Container className='grid gap-8 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-16'>
        <div className='flex flex-col gap-y-1 md:gap-y-2 xl:col-span-2'>
          {eyebrow && <h6 className='eyebrow'>{eyebrow}</h6>}
          {heading && <Heading heading={heading} level={3} />}
          <ButtonGroup buttons={button} className='mt-4' size='sm' />
        </div>
        {content && (
          <RichText
            className={cn(
              heading ? 'lg:col-span-2 xl:col-span-3' : 'lg:col-span-5'
            )}
            content={content}
          />
        )}
      </Container>
    </Section>
  );
};

export default IntroSection;
