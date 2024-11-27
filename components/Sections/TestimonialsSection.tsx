'use client';
import {
  TestimonialStoryblok,
  TestimonialsSectionStoryblok,
} from '@/component-types-sb';
import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

import Testimonial from '../Block/Testimonial';
import SectionWrap from '../Shared/SectionWrap';
import { StoryblokStory } from 'storyblok-generate-ts';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type TTestimonialsSectionWithRelations = TestimonialsSectionStoryblok & {
  testimonials: StoryblokStory<TestimonialStoryblok>[];
};

const TestimonialsSection = ({
  blok,
}: {
  blok: TTestimonialsSectionWithRelations;
}) => {
  const { eyebrow, heading, body, testimonials } = blok;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const y = useTransform(scrollYProgress, [0.5, 1], ['100%', '0%']);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <Section className='relative overflow-hidden' blok={blok} ref={ref}>
      <div className='pointer-events-none absolute bottom-0 left-1/2 z-[-1] aspect-square h-[150%] -translate-x-1/2 translate-y-3/4 rounded-full bg-primary' />
      <motion.div
        style={{ y, opacity }}
        className='absolute top-1/2 mx-auto aspect-square w-full rounded-full bg-primary'
      ></motion.div>
      <Container className='relative max-w-3xl'>
        <SectionWrap {...{ eyebrow, heading, body }}>
          {testimonials && (
            <Carousel>
              <CarouselContent>
                {testimonials.map(
                  (
                    testimonial: StoryblokStory<TestimonialStoryblok>,
                    index
                  ) => (
                    <CarouselItem key={index}>
                      <Testimonial
                        className='h-full'
                        blok={testimonial.content}
                        key={testimonial.uuid}
                        isCard={true}
                      />
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
        </SectionWrap>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;
