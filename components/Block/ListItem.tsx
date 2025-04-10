'use client';
import { cn } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';
import { ListItemStoryblok } from '@/component-types-sb';
import { Check } from 'lucide-react';

const variants: Variants = {
  offscreen: {
    x: -20,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const ListItem = ({
  blok,
  className,
}: {
  blok: ListItemStoryblok;
  className?: string;
}) => {
  const { text } = blok;

  return (
    <motion.li
      className={cn(
        'mb-4 flex break-inside-avoid items-start gap-x-2 font-medium sm:gap-x-3 sm:text-lg md:text-xl',
        className
      )}
      initial='offscreen'
      whileInView='onscreen'
      variants={variants}
    >
      <Check className='size-6 shrink-0 rounded-full bg-accent p-0.5 text-accent-foreground sm:size-8 sm:p-1' />
      {text}
    </motion.li>
  );
};
export default ListItem;
