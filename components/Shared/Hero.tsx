import {
  AssetStoryblok,
  ButtonStoryblok,
  CategoryStoryblok,
} from '@/component-types-sb';
import React from 'react';
import Heading from './Heading';
import Container from './Container';
import Badge from './Badge';
import { cn } from '@/lib/utils';
import Button from '../Block/Button';
import ButtonGroup from './ButtonGroup';

export type THero = {
  title?: string | undefined;
  excerpt?: string;
  image?: AssetStoryblok;
  categories?: CategoryStoryblok[];
  disclaimer?: string;
  className?: string;
  button?: ButtonStoryblok[];
};

const Hero = ({
  title,
  excerpt,
  image,
  categories,
  button,
  disclaimer,
  className,
  ...props
}: THero) => {
  return (
    <section
      className={cn(
        'relative flex aspect-video min-h-[75svh] w-full flex-col justify-end bg-purple bg-cover pb-8 pt-24 text-white md:h-screen md:justify-center md:pb-24',
        image?.filename
          ? 'theme--image before:absolute before:inset-0 before:bg-purple/50 before:backdrop-brightness-50'
          : 'theme--dark'
      )}
      style={{ backgroundImage: `url(${image?.filename})` }}
      {...props}
    >
      <Container className='relative flex flex-col items-center gap-y-2 text-center lg:gap-y-4'>
        {categories && (
          <div className='flex flex-wrap justify-center gap-x-2'>
            {categories.map((category) => (
              <Badge
                href={`/${category.full_slug}`}
                label={category.name}
                key={category.uuid}
              />
            ))}
          </div>
        )}
        {title && (
          <Heading className='text-balance' heading={title} level={1} />
        )}
        {excerpt && (
          <p className='max-w-prose text-balance text-lg md:text-xl'>
            {excerpt}
          </p>
        )}
        <ButtonGroup buttons={button} className='mt-4 lg:mt-8' />
      </Container>
      {disclaimer && (
        <p className='relative mt-8 text-center text-xs text-white/50 lg:absolute lg:bottom-4 lg:right-4 lg:mt-0 lg:text-right lg:text-sm'>
          {disclaimer}
        </p>
      )}
    </section>
  );
};
export default Hero;
