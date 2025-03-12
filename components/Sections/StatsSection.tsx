'use client';

import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import Heading from '../Shared/Heading';
import Stat from '../Block/Stat';
import { StatsSectionStoryblok, StatStoryblok } from '@/component-types-sb';

const StatsSection = ({ blok }: StatsSectionStoryblok) => {
  const { heading, stats } = blok || {};
  return (
    <Section blok={blok} removePadding className='relative pb-[20vmin]'>
      <Container className='grid max-w-5xl gap-8 gap-y-4 sm:grid-cols-3'>
        <Heading heading={heading} level={3} className='pt-[20vmin]' />
        <div className='sm:col-span-2'>
          {stats.map((stat: StatStoryblok, index: number) => (
            <Stat key={index} stat={stat} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default StatsSection;
