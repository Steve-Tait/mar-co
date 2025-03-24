import { AssetStoryblok, CategoryStoryblok } from '@/component-types-sb';
import React from 'react';
import Heading from './Heading';
import Container from './Container';
import Badge from './Badge';
import { cn } from '@/lib/utils';
import RichText from '../Block/RichText';
import Image from 'next/image';

type THero = {
  title?: string | undefined;
  excerpt?: string;
  image?: AssetStoryblok;
  disclaimer?: string;
  categories?: CategoryStoryblok[];
  className?: string;
};

const HeroSecondary = ({
  title,
  excerpt,
  image,
  categories,
  disclaimer,
  className = '',
  ...props
}: THero) => {
  return (
    <section
      className={cn(
        'relative flex w-full items-end overflow-hidden bg-primary pb-24 pt-72 text-primary-foreground sm:min-h-[75svh] sm:items-center sm:py-24 md:py-48',
        image?.filename &&
          'before:absolute before:inset-0 before:bg-purple/50 before:backdrop-brightness-50'
      )}
      {...props}
    >
      <div className='absolute bottom-0 right-0 top-0 aspect-square w-72 overflow-hidden rounded-bl-full bg-accent sm:left-1/2 sm:w-auto'>
        {image?.filename && (
          <div className='relative size-full after:absolute after:inset-0 after:bg-black/50'>
            <Image
              className='pointer-events-none block size-full object-cover'
              src={image.filename}
              alt={image.alt || image.title || ''}
              fill
            />
          </div>
        )}
      </div>
      <Container className='relative p-4 sm:pt-0'>
        <div className='flex max-w-[50%] flex-col gap-y-6'>
          {categories && (
            <div className='flex flex-wrap gap-x-2'>
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
            <Heading
              className='text-balance uppercase'
              heading={title}
              level={1}
            />
          )}
          {excerpt && (
            <RichText
              className='max-w-prose text-balance'
              large
              content={excerpt}
            />
          )}
          {disclaimer && (
            <p className='text-xs text-primary-foreground/50'>{disclaimer}</p>
          )}
        </div>
      </Container>
    </section>
  );
};
export default HeroSecondary;
