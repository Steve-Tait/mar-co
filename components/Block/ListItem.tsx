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
        'mb-2 flex break-inside-avoid items-center gap-x-2 text-lg font-medium sm:mb-4 sm:gap-x-3 md:text-xl',
        className
      )}
      initial='offscreen'
      whileInView='onscreen'
      variants={variants}
    >
      <Check className='size-8 shrink-0 rounded-full bg-accent p-1 text-accent-foreground' />
      {text}
    </motion.li>
  );
};
export default ListItem;
