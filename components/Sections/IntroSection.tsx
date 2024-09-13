'use client';
import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import { render } from 'storyblok-rich-text-react-renderer';
import Heading from '../Shared/Heading';
import { IntroSectionStoryblok } from '@/component-types-sb';
import { cn } from '@/lib/utils';

const IntroSection = ({ blok }: { blok: IntroSectionStoryblok }) => {
  const { heading, content } = blok || {};

  return (
    <Section blok={blok} color='primary'>
      <Container className='grid max-w-5xl gap-8 gap-y-4 md:grid-cols-3 lg:grid-cols-5'>
        {heading && (
          <Heading
            className='uppercase lg:col-span-2'
            heading={heading}
            level={3}
          />
        )}
        {content && (
          <div
            className={cn(
              'prose xl:prose-xl md:col-span-2 lg:col-span-3',
              heading ? 'md:col-span-2 lg:col-span-3' : 'md:col-span-5'
            )}
          >
            {render(content)}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default IntroSection;
