import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import { ChecklistSectionStoryblok } from '@/component-types-sb';
import SectionWrap from '../Shared/SectionWrap';
import ListItem from '../Block/ListItem';
import ButtonGroup from '../Shared/ButtonGroup';

const ChecklistSection = ({ blok }: { blok: ChecklistSectionStoryblok }) => {
  const { eyebrow, heading, button, checklist } = blok;
  return (
    <Section blok={blok} className='overflow-hidden'>
      <Container className='flex max-w-5xl flex-col gap-y-6 lg:gap-y-10'>
        <SectionWrap className='text-center' {...{ eyebrow, heading }}>
          <ul className='mx-auto columns-2 gap-x-6 text-left sm:gap-x-12 lg:gap-x-24'>
            {checklist &&
              checklist.map((item, index) => (
                <ListItem blok={item} key={index} />
              ))}
          </ul>
          <ButtonGroup buttons={button} />
        </SectionWrap>
      </Container>
    </Section>
  );
};

export default ChecklistSection;
