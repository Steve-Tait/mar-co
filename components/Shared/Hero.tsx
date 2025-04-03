import {
  AssetStoryblok,
  ButtonStoryblok,
  CategoryStoryblok,
} from '@/component-types-sb';
import Image from 'next/image';
import React from 'react';
import Heading from './Heading';
import Container from './Container';
import Badge from './Badge';
import { cn } from '@/lib/utils';
import ButtonGroup from './ButtonGroup';
import RichText from '../Block/RichText';

export type THero = {
  title?: string | undefined;
  excerpt?: string;
  image?: AssetStoryblok;
  categories?: CategoryStoryblok[];
  className?: string;
  button?: ButtonStoryblok[];
};

const Hero = ({
  title,
  excerpt,
  image,
  categories,
  button,
  className,
  ...props
}: THero) => {
  return (
    <section
      className={cn(
        'relative flex aspect-video min-h-[75svh] w-full flex-col justify-end bg-purple pb-8 pt-24 text-white md:h-screen md:justify-center md:pb-24',
        image?.filename ? 'theme--image' : 'theme--dark'
      )}
      {...props}
    >
      {image?.filename && (
        <>
          <Image
            className='pointer-events-none absolute inset-0 h-full w-full object-cover'
            src={image.filename}
            alt={image.alt || image.title || ''}
            fill
            priority
          />
          <div className='absolute inset-0 bg-purple/50 backdrop-brightness-50' />
        </>
      )}
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
          <RichText
            className='max-w-prose text-balance'
            large
            content={excerpt}
          />
        )}
        <ButtonGroup buttons={button} className='mt-4 lg:mt-8' />
      </Container>
    </section>
  );
};
export default Hero;
