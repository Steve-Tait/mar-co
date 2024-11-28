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
      <Container className='grid max-w-6xl gap-8 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-16'>
        {heading && (
          <Heading
            className='uppercase lg:col-span-2'
            heading={heading}
            level={4}
          />
        )}
        {content && (
          <div
            className={cn(
              'prose-lg xl:prose-xl lg:col-span-2 xl:col-span-3',
              heading ? 'lg:col-span-2 xl:col-span-3' : 'lg:col-span-5'
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
