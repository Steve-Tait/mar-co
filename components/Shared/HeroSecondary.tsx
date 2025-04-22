import {
  AssetStoryblok,
  CategoryStoryblok,
  IndustryStoryblok,
} from '@/component-types-sb';
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
  industry?: IndustryStoryblok[];
  date?: string;
  logo?: AssetStoryblok;
  className?: string;
};

const HeroSecondary = ({
  title,
  excerpt,
  image,
  categories = [],
  industry = [],
  date,
  disclaimer,
  logo,
  className = '',
  ...props
}: THero) => {
  const tags = [...categories, ...industry];
  return (
    <section
      className={cn(
        'relative flex w-full items-end overflow-hidden bg-primary bg-purple-900 pb-16 pt-72 text-primary-foreground sm:min-h-[75svh] sm:items-center sm:py-24 md:py-48'
      )}
      {...props}
    >
      <div className='absolute bottom-0 right-0 top-0 aspect-square w-72 overflow-hidden rounded-bl-full bg-accent sm:left-1/4 sm:w-auto md:left-1/3 lg:left-1/2'>
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
      <Container className='relative'>
        <div className='flex flex-col gap-y-6 sm:max-w-[50%]'>
          <div className='mb-4 flex items-end gap-x-4'>
            {date && <p className='eyebrow'>{date}</p>}
            {logo?.filename && (
              <Image
                className='w-24 brightness-0 invert md:w-32'
                src={logo.filename}
                alt={logo.alt || logo.title || ''}
                height={128}
                width={128}
              />
            )}
            {tags && (
              <div className='flex flex-wrap gap-x-2'>
                {tags.map((tag) => (
                  <Badge
                    href={`/${tag.full_slug}`}
                    label={tag.name}
                    key={tag.uuid}
                  />
                ))}
              </div>
            )}
          </div>
          {title && (
            <Heading className='text-balance' heading={title} level={1} />
          )}
          <div className='flex flex-col gap-y-2'>
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
        </div>
      </Container>
    </section>
  );
};
export default HeroSecondary;
