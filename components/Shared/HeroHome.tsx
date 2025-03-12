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
import ButtonGroup from './ButtonGroup';

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
        'theme--dark relative flex aspect-video min-h-[75svh] w-full flex-col justify-end bg-purple bg-cover pb-8 pt-24 text-white md:min-h-svh md:justify-center md:pb-24',
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
        {animated_title.length ? (
          <SentenceLoop className='h1 uppercase' sentences={animated_title} />
        ) : null}

        {subheading && (
          <p className='mx-auto mt-2 max-w-prose text-balance text-xl/relaxed font-bold md:text-2xl/relaxed'>
            {subheading}
          </p>
        )}
        <ButtonGroup buttons={buttons} className='mt-4 md:mt-8' />
      </Container>
    </section>
  );
};
export default HeroHome;
