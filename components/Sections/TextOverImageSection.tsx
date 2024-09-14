import { StoryblokComponent } from '@storyblok/react/rsc';
import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import Image from 'next/image';
import SectionWrap from '../Shared/SectionWrap';
import Parallax from '../Shared/Parallax';
import { render } from 'storyblok-rich-text-react-renderer';
import { TextOverImageSectionStoryblok } from '@/component-types-sb';

const TextOverImageSection = ({
  blok,
}: {
  blok: TextOverImageSectionStoryblok;
}) => {
  const { eyebrow, heading, body, image, buttons } = blok;
  return (
    <Section blok={blok} className='dark relative' color='primary'>
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
      <div className='pointer-events-none before:absolute before:inset-0 before:bg-purple/70 before:brightness-50'></div>
      <Container className='relative mx-auto flex min-h-[50svh] flex-col justify-center'>
        <SectionWrap {...{ eyebrow, heading }}>
          <div className='prose prose-lg mx-auto sm:prose-xl lg:prose-2xl'>
            {typeof body === 'string' ? body : render(body)}
          </div>
          {buttons && buttons.length ? (
            <div className='relative mt-4'>
              {buttons.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </div>
          ) : null}
        </SectionWrap>
      </Container>
    </Section>
  );
};

export default TextOverImageSection;
