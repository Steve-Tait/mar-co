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
import Container from './Container';
import Heading from './Heading';

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
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok.uuid} />
      ))}
      {author?.name && (
        <section className='theme--light bg-background py-8 text-foreground md:py-12 xl:py-16'>
          <div className='mx-auto flex max-w-prose gap-x-12 rounded-lg bg-card p-8 text-lg text-card-foreground'>
            <Image
              className='aspect-square size-32 rounded-full object-cover'
              src={author?.avatar?.filename || ''}
              alt={author?.name || 'Author Avatar'}
              width={256}
              height={256}
            />
            <div className='flex flex-col gap-y-1'>
              <p className='eyebrow'>About the Author</p>
              <Heading className='mb-2' level={5} heading={author?.name} />
              <p>{author?.description}</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
