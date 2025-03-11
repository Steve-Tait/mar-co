import { StoryblokServerComponent } from '@storyblok/react/rsc';
import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import Image from 'next/image';
import SectionWrap from '../Shared/SectionWrap';
import Parallax from '../Shared/Parallax';
import { TextOverImageSectionStoryblok } from '@/component-types-sb';
import { cn } from '@/lib/utils';

const TextOverImageSection = ({
  blok,
}: {
  blok: TextOverImageSectionStoryblok;
}) => {
  const { eyebrow, heading, body, image, isContained, buttons } = blok;
  return (
    <Section
      blok={{
        ...blok,
        theme: isContained ? 'dark' : 'image',
      }}
      className='relative'
      removePadding
    >
      {image && (
        <Parallax className='absolute inset-0 size-full'>
          <Image
            src={image.filename}
            alt={image.alt ?? ''}
            fill
            className='object-cover'
          />
        </Parallax>
      )}
      <div className='pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/80 before:to-black/20 before:bg-blend-darken'></div>
      <Container
        className={cn(
          'relative mx-auto flex min-h-[80svh] flex-col py-4 sm:py-6 lg:py-8',
          isContained ? 'justify-end md:justify-start' : 'justify-center'
        )}
      >
        <SectionWrap
          className={
            isContained
              ? 'max-w-lg rounded-2xl bg-background p-4 text-foreground sm:p-8 md:sticky md:top-28 md:w-1/2 lg:p-12'
              : 'text-center'
          }
          {...{ eyebrow, heading, body }}
        >
          {buttons && buttons.length ? (
            <div>
              {buttons.map((nestedBlok) => (
                <StoryblokServerComponent
                  blok={nestedBlok}
                  key={nestedBlok._uid}
                />
              ))}
            </div>
          ) : null}
        </SectionWrap>
      </Container>
    </Section>
  );
};

export default TextOverImageSection;
