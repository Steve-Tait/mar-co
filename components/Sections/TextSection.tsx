import { TextSectionStoryblok } from '@/component-types-sb';
import { StoryblokComponent } from '@storyblok/react/rsc';
import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import SectionWrap from '../Shared/SectionWrap';

const TextSection = ({ blok }: { blok: TextSectionStoryblok }) => {
  const { eyebrow, heading, body, buttons } = blok;

  return (
    <Section blok={blok}>
      <Container className='max-w-3xl'>
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

export default TextSection;
