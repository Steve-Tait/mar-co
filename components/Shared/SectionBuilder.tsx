import React from 'react';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
import {
  AnimatedWordsSectionStoryblok,
  ArticlesSectionStoryblok,
  CaseStudiesSectionStoryblok,
  ChecklistSectionStoryblok,
  ColouredContainerSectionStoryblok,
  ContactSectionStoryblok,
  FaqsSectionStoryblok,
  FeatureSectionStoryblok,
  FullWidthImageSectionStoryblok,
  ImageSectionStoryblok,
  IntroSectionStoryblok,
  KeyFeaturesSectionStoryblok,
  LogoCarouselSectionStoryblok,
  StatsSectionStoryblok,
  TestimonialsSectionStoryblok,
  TextAndImageSectionStoryblok,
  TextOverImageSectionStoryblok,
  TextSectionStoryblok,
  TiktokSectionStoryblok,
} from '@/component-types-sb';

export default function SectionBuilder({
  body = [],
}: {
  body?: (
    | AnimatedWordsSectionStoryblok
    | ArticlesSectionStoryblok
    | CaseStudiesSectionStoryblok
    | ChecklistSectionStoryblok
    | ColouredContainerSectionStoryblok
    | ContactSectionStoryblok
    | FaqsSectionStoryblok
    | FeatureSectionStoryblok
    | FullWidthImageSectionStoryblok
    | ImageSectionStoryblok
    | IntroSectionStoryblok
    | KeyFeaturesSectionStoryblok
    | LogoCarouselSectionStoryblok
    | StatsSectionStoryblok
    | TestimonialsSectionStoryblok
    | TextAndImageSectionStoryblok
    | TextOverImageSectionStoryblok
    | TextSectionStoryblok
    | TiktokSectionStoryblok
  )[];
  className?: string;
}) {
  if (!body.length) return;

  return (
    <>
      {body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok.uuid} />
      ))}
    </>
  );
}
