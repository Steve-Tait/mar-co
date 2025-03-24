import { TextAndImageSectionStoryblok } from '@/component-types-sb';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import { cn } from '@/lib/utils';
import SectionWrap from '../Shared/SectionWrap';
import Image from 'next/image';
import Parallax from '../Shared/Parallax';
import ButtonGroup from '../Shared/ButtonGroup';

const TextAndImageSection = ({
  blok,
}: {
  blok: TextAndImageSectionStoryblok;
}) => {
  const { eyebrow, heading, body, image, buttons, is_reverse } = blok;

  return (
    <Section blok={blok}>
      <Container className='grid grid-cols-1 items-center gap-x-10 gap-y-6 sm:grid-cols-2 xl:gap-x-16'>
        {image?.id && (
          <div
            className={cn(
              'relative aspect-square size-full overflow-hidden rounded-3xl object-cover',
              is_reverse && 'sm:order-1'
            )}
          >
            <Image
              src={image.filename}
              alt={image.alt || image.title || ''}
              fill
              objectFit='cover'
            />
          </div>
        )}
        <SectionWrap {...{ eyebrow, heading, body }}>
          <ButtonGroup buttons={buttons} />
        </SectionWrap>
      </Container>
    </Section>
  );
};

export default TextAndImageSection;
