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
        'theme--dark relative flex min-h-svh w-full flex-col justify-center bg-background bg-cover py-24 text-foreground sm:py-48',
        image?.filename &&
          'before:absolute before:inset-0 before:bg-purple/50 before:backdrop-brightness-50'
      )}
      style={{ backgroundImage: `url(${image?.filename})` }}
      {...props}
    >
      <Container className='relative flex max-w-prose flex-col gap-y-6 text-center'>
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
          <p className='mt-2 text-balance text-xl/relaxed font-bold md:text-2xl/relaxed'>
            {excerpt}
          </p>
        )}
        {button &&
          button.map((nestedBlok: ButtonStoryblok) => (
            <Button size='sm' blok={nestedBlok} key={nestedBlok._uid} />
          ))}
      </Container>
    </section>
  );
};
export default Hero;
