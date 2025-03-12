import { TextSectionStoryblok } from '@/component-types-sb';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import SectionWrap from '../Shared/SectionWrap';
import { cn } from '@/lib/utils';
import ButtonGroup from '../Shared/ButtonGroup';

const TextSection = ({ blok }: { blok: TextSectionStoryblok }) => {
  const { eyebrow, heading, body, buttons, isCenter } = blok;
  return (
    <Section blok={blok}>
      <Container className='max-w-3xl'>
        <SectionWrap
          className={cn(isCenter && 'text-center')}
          {...{ eyebrow, heading, body }}
        >
          <ButtonGroup
            buttons={buttons}
            className={cn(isCenter && 'text-center')}
          />
        </SectionWrap>
      </Container>
    </Section>
  );
};

export default TextSection;
