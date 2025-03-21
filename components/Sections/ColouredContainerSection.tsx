import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import { ColouredContainerSectionStoryblok } from '@/component-types-sb';
import ColouredContainer from '../Block/ColouredContainer';
import SectionWrap from '../Shared/SectionWrap';
import ButtonGroup from '../Shared/ButtonGroup';

const COLOUR_MAP = [
  'muted',
  'primary',
  'secondary-muted',
  'secondary',
] as const;
const ColouredContainerSection = ({
  blok,
}: {
  blok: ColouredContainerSectionStoryblok;
}) => {
  const { eyebrow, heading, body, button, sections } = blok;
  return (
    <Section blok={blok} className='overflow-hidden'>
      <Container className='flex max-w-5xl flex-col gap-y-6 lg:gap-y-10'>
        <SectionWrap className='text-center' {...{ eyebrow, heading, body }}>
          <div className='flex flex-col gap-y-6 lg:gap-y-10'>
            {sections &&
              sections.map((section, index) => (
                <ColouredContainer
                  blok={section}
                  key={index}
                  color={COLOUR_MAP[(index + 4) % 4]}
                  isReverse={!!(index % 2)}
                />
              ))}
          </div>
          <ButtonGroup buttons={button} />
        </SectionWrap>
      </Container>
    </Section>
  );
};

export default ColouredContainerSection;
