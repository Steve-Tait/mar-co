import { TextAndImageSectionStoryblok } from '@/component-types-sb';
import { StoryblokComponent } from '@storyblok/react/rsc';
import Container from '@/components/Shared/Container';
import Heading from '../Shared/Heading';
import Section from '../Shared/Section';
import { SvgBlob } from '../Shared/SvgBlob';
import { cn } from '@/lib/utils';
import SectionWrap from '../Shared/SectionWrap';

const TextAndImageSection = ({
  blok,
}: {
  blok: TextAndImageSectionStoryblok;
}) => {
  const { eyebrow, heading, body, image, buttons, is_reverse } = blok;
  return (
    <Section blok={blok}>
      <Container className='grid grid-cols-2 items-center gap-x-10'>
        <SvgBlob
          image={image.filename}
          className={cn('text-pink', is_reverse && 'order-1')}
        />
        <SectionWrap {...{ eyebrow, heading, body }}>
          {buttons && (
            <div className='mt-4'>
              {buttons.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </div>
          )}
        </SectionWrap>
      </Container>
    </Section>
  );
};

export default TextAndImageSection;
