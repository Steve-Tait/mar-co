import { TextSectionStoryblok } from '@/component-types-sb';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import SectionWrap from '../Shared/SectionWrap';
import { cn } from '@/lib/utils';

const TextSection = ({ blok }: { blok: TextSectionStoryblok }) => {
  const { eyebrow, heading, body, buttons, isCenter } = blok;
  console.log(buttons);
  return (
    <Section blok={blok}>
      <Container className='max-w-3xl'>
        <SectionWrap
          className={cn(isCenter && 'text-center')}
          {...{ eyebrow, heading, body }}
        >
          {buttons?.length ? (
            <div className='mt-4 text-center'>
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

export default TextSection;
