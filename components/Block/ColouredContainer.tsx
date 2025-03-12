'use client';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';
import RichText from './RichText';
import { ColouredContainerStoryblok } from '@/component-types-sb';

const COLOUR_MAP = {
  primary: 'theme--dark',
  secondary: 'theme--alternate',
  muted: 'theme--muted',
  'secondary-muted': 'theme--alternate-muted',
};
const DOT_COLOR_MAP = {
  primary: 'bg-secondary',
  secondary: 'bg-white',
  muted: 'bg-primary',
  'secondary-muted': 'bg-secondary',
};

const variants: Variants = {
  offscreen: (isReverse: number) => ({
    x: isReverse ? 100 : -100,
    opacity: 0,
  }),

  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const ColouredContainer = ({
  blok,
  color = 'primary',
  isReverse = false,
  className = '',
}: {
  blok: ColouredContainerStoryblok;
  color: 'primary' | 'secondary' | 'muted' | 'secondary-muted';
  isReverse?: boolean;
  className?: string;
}) => {
  const { content } = blok;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const translate = useTransform(scrollYProgress, [0, 1], [`0%`, `-50%`]);
  return (
    <motion.div
      className={cn(
        'sm:10 grid items-center gap-6 rounded-xl bg-background p-6 text-left text-foreground sm:grid-cols-4 md:gap-x-16 md:rounded-3xl lg:p-20',
        className,
        COLOUR_MAP[color]
      )}
      ref={ref}
      initial='offscreen'
      whileInView='onscreen'
      variants={variants}
      custom={isReverse}
    >
      <div
        className={cn(
          'mx-auto aspect-square w-full max-w-40 sm:max-w-full',
          isReverse && 'sm:order-1'
        )}
      >
        <div className='relative size-full overflow-hidden'>
          <motion.div
            className={cn(
              isReverse ? 'h-[200%] w-full' : 'flex h-full w-[200%]'
            )}
            style={isReverse ? { y: translate } : { x: translate }}
          >
            {[...Array(2)].map((_, index) => (
              <span
                className={cn(
                  'block aspect-square w-full rounded-full',
                  DOT_COLOR_MAP[color]
                )}
                key={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <RichText
        className='prose prose-lg md:prose-xl sm:col-span-3'
        content={content}
      />
    </motion.div>
  );
};
export default ColouredContainer;
