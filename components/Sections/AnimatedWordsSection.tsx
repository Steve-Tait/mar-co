'use client';
import TextTransition, { presets } from 'react-text-transition';
import { StoryblokComponent } from '@storyblok/react';
import { useEffect, useState } from 'react';
import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import { AnimatedWordsSectionStoryblok } from '@/component-types-sb';

export default function AnimatedWordsSection({
  blok,
}: AnimatedWordsSectionStoryblok) {
  const { heading, animated_words, buttons } = blok;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1500);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <Section blok={blok}>
      <Container className='text-center'>
        <h1>
          {heading}
          <TextTransition
            springConfig={presets.wobbly}
            className='justify-center text-pink'
          >
            {animated_words[index % animated_words.length].word}
          </TextTransition>
        </h1>
        {buttons &&
          buttons.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
      </Container>
    </Section>
  );
}
