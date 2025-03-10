'use client';
import TextTransition, { presets } from 'react-text-transition';
import { useEffect, useState } from 'react';
import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import { AnimatedWordsSectionStoryblok } from '@/component-types-sb';
import Heading from '../Shared/Heading';

export default function AnimatedWordsSection({
  blok,
}: AnimatedWordsSectionStoryblok) {
  const { heading, eyebrow, animated_words } = blok;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1500);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <Section blok={blok}>
      <Container className='text-center'>
        <h6 className='eyebrow mb-1 sm:mb-2'>{eyebrow}</h6>
        <Heading level={3} className='h1'>
          {heading}
          <TextTransition
            springConfig={presets.wobbly}
            className='justify-center text-highlight'
          >
            {animated_words[index % animated_words.length].word}
          </TextTransition>
        </Heading>
      </Container>
    </Section>
  );
}
