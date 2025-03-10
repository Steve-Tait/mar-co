import {
  AnimatedWordStoryblok,
  AssetStoryblok,
  ButtonStoryblok,
} from '@/component-types-sb';
import React from 'react';
import Heading from './Heading';
import Container from './Container';
import { cn } from '@/lib/utils';
import SentenceLoop from './SentenceLoop';
import { StoryblokServerComponent } from '@storyblok/react/rsc';

export type THeroHome = {
  title?: string | undefined;
  subheading?: string;
  animated_title: AnimatedWordStoryblok[];
  excerpt?: string;
  image?: AssetStoryblok;
  buttons?: ButtonStoryblok[];
  className?: string;
};

const HeroHome = ({
  title,
  animated_title,
  subheading,
  image,
  buttons,
  className = '',
  ...props
}: THeroHome) => {
  return (
    <section
      className={cn(
        'theme--dark relative flex aspect-video h-svh w-full flex-col justify-center bg-purple bg-cover py-24 text-white',
        image?.filename &&
          'before:absolute before:inset-0 before:bg-purple/50 before:backdrop-brightness-50'
      )}
      style={{ backgroundImage: `url(${image?.filename})` }}
      {...props}
    >
      <Container className='relative text-center'>
        {title && (
          <Heading
            heading={title}
            level={1}
            className={cn(animated_title?.length && 'sr-only')}
          />
        )}
        {animated_title.length && (
          <SentenceLoop className='h1' sentences={animated_title} />
        )}

        {subheading && (
          <p className='mt-2 text-xl/relaxed font-bold md:text-2xl/relaxed'>
            {subheading}
          </p>
        )}
        {buttons && (
          <div className='mt-4 flex flex-col flex-wrap items-center justify-center gap-2 sm:flex-row md:mt-8'>
            {buttons.map((nestedBlok) => (
              <StoryblokServerComponent
                blok={nestedBlok}
                key={nestedBlok._uid}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};
export default HeroHome;
