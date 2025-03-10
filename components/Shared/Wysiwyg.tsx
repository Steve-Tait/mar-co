import React from 'react';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
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
    <>
      {wysiwyg?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok.uuid} />
      ))}
    </>
  );
}
