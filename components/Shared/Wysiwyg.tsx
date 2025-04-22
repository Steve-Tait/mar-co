import React from 'react';
import Image from 'next/image';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
import {
  AuthorStoryblok,
  BannerWysiwygStoryblok,
  GalleryWysiwygStoryblok,
  ImageWysiwygStoryblok,
  TestimonialWysiwygStoryblok,
  TextWysiwygStoryblok,
  VideoWysiwygStoryblok,
} from '@/component-types-sb';
import Heading from './Heading';
import Author from './Author';

type TWysiwyg = {
  author?: AuthorStoryblok;
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
  author,
  wysiwyg = [],
  className = '',
  ...props
}: TWysiwyg) {
  if (!wysiwyg.length) return;

  return (
    <>
      {wysiwyg?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}

      {author && <Author author={author} />}
    </>
  );
}
