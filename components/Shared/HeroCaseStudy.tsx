import { AssetStoryblok, CategoryStoryblok } from '@/component-types-sb';
import React from 'react';
import Heading from './Heading';
import Container from './Container';
import Badge from './Badge';
import { cn } from '@/lib/utils';

type THero = {
  title?: string | undefined;
  excerpt?: string;
  image?: AssetStoryblok;
  categories?: CategoryStoryblok[];
  className?: string;
};

const HeroCaseStudy = ({
  title,
  excerpt,
  image,
  categories,
  className = '',
  ...props
}: THero) => {
  return (
    <section
      className={cn(
        'relative flex min-h-[75svh] w-full flex-col justify-center bg-primary bg-cover py-24 text-primary-foreground sm:py-48',
        image?.filename &&
          'before:absolute before:inset-0 before:bg-purple/50 before:backdrop-brightness-50'
      )}
      style={{ backgroundImage: `url(${image?.filename})` }}
      {...props}
    >
      <Container className='relative'>
        <div className='flex max-w-6xl flex-col items-center gap-y-6'>
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
            <Heading
              className='text-balance uppercase'
              heading={title}
              level={1}
            />
          )}
          {excerpt && (
            <p className='mt-2 max-w-prose text-balance text-lg md:text-xl'>
              {excerpt}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};
export default HeroCaseStudy;
