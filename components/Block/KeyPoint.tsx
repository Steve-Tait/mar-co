'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import RichText from './RichText';
import { KeyPointStoryblok } from '@/component-types-sb';
import Heading from '../Shared/Heading';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
import { HomeIcon } from 'lucide-react';
import ButtonGroup from '../Shared/ButtonGroup';

const KeyPoint = ({
  blok,
  className = '',
  isVertical = false,
  ...props
}: {
  blok: KeyPointStoryblok;
  isVertical?: boolean;
  className?: string;
}) => {
  const { heading, body, button } = blok;
  return (
    <motion.div
      className={cn(
        'flex flex-col items-start gap-y-4 rounded-2xl bg-card p-4 text-left text-card-foreground sm:p-6',
        className
      )}
      {...props}
    >
      <div className='mb-4 rounded-xl bg-secondary p-2 text-secondary-foreground sm:mb-6'>
        <HomeIcon size={36} />
      </div>
      {heading && <Heading heading={heading} level={5} />}
      {body && <RichText content={body} />}
      <ButtonGroup buttons={button} className='mt-4' />
    </motion.div>
  );
};
export default KeyPoint;
