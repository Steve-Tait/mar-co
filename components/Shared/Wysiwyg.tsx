import React from 'react';
import Section from './Section';
import Container from './Container';
import { StoryblokComponent } from '@storyblok/react';
import {
  BannerWysiwygStoryblok,
  GalleryWysiwygStoryblok,
  ImageWysiwygStoryblok,
  TestimonialWysiwygStoryblok,
  TextWysiwygStoryblok,
  VideoWysiwygStoryblok,
} from '@/component-types-sb';

type TWysiwyg = {
  wysiwyg?: (
    | BannerWysiwygStoryblok
    | GalleryWysiwygStoryblok
    | ImageWysiwygStoryblok
    | TestimonialWysiwygStoryblok
    | TextWysiwygStoryblok
    | VideoWysiwygStoryblok
  )[];
  className?: string;
};

export default function Wysiwyg({
  wysiwyg = [],
  className = '',
  ...props
}: TWysiwyg) {
  if (!wysiwyg.length) return;

  return (
    <Section className={`bg-white text-black ${className}`} {...props}>
      <Container className='grid grid-cols-1 justify-items-center gap-x-6 gap-y-8 md:grid-cols-12 md:gap-y-12 lg:gap-y-16'>
        {wysiwyg?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok.uuid} />
        ))}
      </Container>
    </Section>
  );
}
