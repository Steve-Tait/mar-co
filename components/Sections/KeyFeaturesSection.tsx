'use client';
import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import Heading from '../Shared/Heading';
import { KeyFeaturesSectionStoryblok } from '@/component-types-sb';
import { cn } from '@/lib/utils';
import RichText from '../Block/RichText';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
import { motion, Variants } from 'framer-motion';

const variants: Variants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const variantsChild: Variants = {
  offscreen: (isVertical) => ({
    opacity: 0,
    x: isVertical ? 50 : 0,
    y: isVertical ? 0 : 50,
  }),
  onscreen: {
    scale: 1,
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
};

const KeyFeaturesSection = ({
  blok,
}: {
  blok: KeyFeaturesSectionStoryblok;
}) => {
  const { heading, body, buttons, features, isVertical } = blok || {};
  return (
    <Section blok={blok}>
      <Container
        className={cn(
          'grid grid-cols-1 gap-8 xl:gap-16',
          isVertical ? 'items-start md:grid-cols-3' : ''
        )}
      >
        <div
          className={cn(
            'col-span-1 flex flex-col gap-y-6',
            isVertical ? 'md:sticky md:top-28' : 'items-center text-center'
          )}
        >
          {heading && <Heading heading={heading} level={isVertical ? 3 : 2} />}
          {body && <RichText content={body} />}
          {buttons?.length ? (
            <div className='mt-4'>
              {buttons.map((button) => (
                <StoryblokServerComponent blok={button} key={button._uid} />
              ))}
            </div>
          ) : null}
        </div>
        <motion.div
          className={cn(
            'grid grid-cols-1 gap-8',
            isVertical
              ? 'col-span-2'
              : features?.length &&
                  !(features?.length % 2) &&
                  features?.length <= 4
                ? 'md:grid-cols-2'
                : 'text-center md:grid-cols-3'
          )}
          initial='offscreen'
          whileInView='onscreen'
          variants={variants}
        >
          {features?.length
            ? features.map((feature) => (
                <StoryblokServerComponent
                  blok={feature}
                  isVertical={isVertical}
                  key={feature._uid}
                  variants={variantsChild}
                  custom={isVertical}
                />
              ))
            : null}
        </motion.div>
      </Container>
    </Section>
  );
};

export default KeyFeaturesSection;
