import { TextAndImageSectionStoryblok } from '@/component-types-sb';
import { StoryblokComponent } from '@storyblok/react/rsc';
import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import { cn, getImageDimensionsFromUrl } from '@/lib/utils';
import SectionWrap from '../Shared/SectionWrap';
import Image from 'next/image';

const TextAndImageSection = ({
  blok,
}: {
  blok: TextAndImageSectionStoryblok;
}) => {
  const { eyebrow, heading, body, image, buttons, is_reverse } = blok;

  const dimensions = getImageDimensionsFromUrl(image.filename);
  const scaleFactor = dimensions[1] * dimensions[0];
  return (
    <Section blok={blok} color='white'>
      <Container className='grid grid-cols-1 items-center gap-x-10 gap-y-4 sm:grid-cols-2'>
        {image?.id && (
          <Image
            src={image.filename}
            alt={image.alt || image.title || ''}
            width={dimensions[0]}
            height={dimensions[1] * scaleFactor}
            className={cn(
              'h-auto w-full overflow-hidden rounded-2xl object-cover',
              is_reverse && 'sm:order-1'
            )}
          />
        )}
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
