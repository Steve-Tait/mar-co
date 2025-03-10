'use client';
import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import Heading from '../Shared/Heading';
import { IntroSectionStoryblok } from '@/component-types-sb';
import { cn } from '@/lib/utils';
import RichText from '../Block/RichText';

const IntroSection = ({ blok }: { blok: IntroSectionStoryblok }) => {
  const { heading, content } = blok || {};

  return (
    <Section blok={blok}>
      <Container className='grid max-w-6xl gap-8 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-16'>
        {heading && (
          <Heading
            className='uppercase xl:col-span-2'
            heading={heading}
            level={3}
          />
        )}
        {content && (
          <RichText
            className={cn(
              'prose prose-lg xl:prose-xl',
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
