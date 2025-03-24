'use client';

import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import Heading from '../Shared/Heading';
import Stat from '../Block/Stat';
import { StatsSectionStoryblok, StatStoryblok } from '@/component-types-sb';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const StatsSection = ({ blok }: StatsSectionStoryblok) => {
  const ref = useRef(null);
  const { heading, stats, countNumbers } = blok || {};
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  return (
    <Section blok={blok} className='relative' ref={ref}>
      <Container className='pointer-events-none absolute inset-0 flex max-w-5xl'>
        <div className='relative size-full'>
          <motion.div
            className='absolute inset-y-0 left-6 -ml-0.5 w-1 origin-top bg-secondary md:left-[calc(33.33%+2.5rem)]'
            style={{ scaleY: scrollYProgress }}
          />
        </div>
      </Container>
      <Container className='relative grid max-w-5xl grid-cols-1 gap-y-8 sm:grid-cols-3'>
        <Heading heading={heading} level={2} className='pl-20' />

        <div className='flex flex-col gap-y-8 sm:col-span-2 sm:gap-y-16'>
          {stats.map((stat: StatStoryblok, index: number) => (
            <Stat key={index} stat={stat} countNumbers={countNumbers} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default StatsSection;
