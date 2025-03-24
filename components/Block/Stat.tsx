'use client';

import { cn } from '@/lib/utils';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import NumberCounter from '../Shared/NumberCounter';
import RichText from './RichText';
import { StatStoryblok } from '@/component-types-sb';

export default function Stat({
  stat,
  countNumbers = true,
  className,
}: {
  stat: StatStoryblok;
  countNumbers: boolean;
  className?: string;
}) {
  const { prefix, suffix, value = 0, description, formatNumber } = stat;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const y = useTransform(scrollYProgress, [0.5, 1], ['100px', '0px']);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  return (
    <div
      className={cn(
        'relative flex items-center gap-x-8 lg:gap-x-16',
        className
      )}
      ref={ref}
    >
      <motion.div
        className='1/2 size-12 shrink-0 rounded-full bg-secondary md:size-20'
        style={{ scale }}
      />
      <motion.div className='flex flex-col gap-y-2' style={{ opacity, y }}>
        <p className='text-2xl font-black sm:text-3xl'>
          {prefix}
          {countNumbers ? (
            <NumberCounter value={Number(value)} formatNumber={formatNumber} />
          ) : (
            value
          )}
          {suffix}
        </p>
        <RichText className='text-lg' content={description} />
      </motion.div>
    </div>
  );
}
