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

type TTestimonialsSectionWithRelations = TestimonialsSectionStoryblok & {
  testimonials: StoryblokStory<TestimonialStoryblok>[];
};

const TestimonialsSection = ({
  blok,
}: {
  blok: TTestimonialsSectionWithRelations;
}) => {
  const { eyebrow, heading, body, testimonials } = blok;
  return (
    <Section blok={blok}>
      <Container className='max-w-3xl'>
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
