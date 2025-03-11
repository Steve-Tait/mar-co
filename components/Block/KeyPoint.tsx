'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import RichText from './RichText';
import { KeyPointStoryblok } from '@/component-types-sb';
import Heading from '../Shared/Heading';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
import { CheckIcon, HomeIcon } from 'lucide-react';

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
      <div className='mb-4 rounded-xl bg-accent p-2 text-accent-foreground sm:mb-6'>
        <HomeIcon size={36} />
      </div>
      {heading && <Heading heading={heading} level={5} />}
      {body && <RichText content={body} />}
      {button?.length ? (
        <div className='mt-4'>
          {button.map((button) => (
            <StoryblokServerComponent blok={button} key={button._uid} />
          ))}
        </div>
      ) : null}
    </motion.div>
  );
};
export default KeyPoint;
