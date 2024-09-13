import { StoryblokStory } from 'storyblok-generate-ts';

export interface AnimatedWordStoryblok {
  word: string;
  _uid: string;
  component: 'animated-word';
  [k: string]: any;
}

export interface AnimatedWordsStoryblok {
  animated_words?: AnimatedWordStoryblok[];
  _uid: string;
  component: 'animated-words';
  [k: string]: any;
}

export interface AssetStoryblok {
  _uid?: string;
  id: number;
  alt?: string;
  name: string;
  focus?: string;
  source?: string;
  title?: string;
  filename: string;
  copyright?: string;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: any;
  };
  is_external_url?: boolean;
  [k: string]: any;
}

export interface AnimatedWordsSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  background?: AssetStoryblok;
  animated_words: AnimatedWordStoryblok[];
  _uid: string;
  component: 'animated-words-section';
  [k: string]: any;
}

export interface ArticleStoryblok {
  title?: string;
  categories?: (StoryblokStory<CategoryStoryblok> | string)[];
  image?: AssetStoryblok;
  excerpt?: string;
  wysiwyg?: (
    | BannerWysiwygStoryblok
    | GalleryWysiwygStoryblok
    | ImageWysiwygStoryblok
    | TestimonialWysiwygStoryblok
    | TextWysiwygStoryblok
    | VideoWysiwygStoryblok
  )[];
  meta_title?: string;
  meta_desc?: string;
  _uid: string;
  component: 'article';
  [k: string]: any;
}

export interface ArticleOverviewStoryblok {
  heading?: string;
  meta_title?: string;
  meta_description?: string;
  _uid: string;
  component: 'article-overview';
  [k: string]: any;
}

export interface ArticlesSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  body?: string;
  articles?: (StoryblokStory<ArticleStoryblok> | string)[];
  filter_by_category?: (StoryblokStory<CategoryStoryblok> | string)[];
  _uid: string;
  component: 'articles-section';
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface BannerWysiwygStoryblok {
  background?: number | string;
  richtext?: RichtextStoryblok;
  _uid: string;
  component: 'banner-wysiwyg';
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: 'story';
      target?: '_self' | '_blank';
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: 'asset' | 'url';
      target?: '_self' | '_blank';
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: 'email';
      target?: '_self' | '_blank';
      [k: string]: any;
    };

export interface ButtonStoryblok {
  link: Exclude<MultilinkStoryblok, { linktype?: 'asset' }>;
  label: string;
  variant: '' | 'pink' | 'purple' | 'white';
  form_trigger?: boolean;
  _uid: string;
  component: 'button';
  [k: string]: any;
}

export interface CaseStudiesSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  body?: string;
  articles?: (StoryblokStory<CaseStudyStoryblok> | string)[];
  _uid: string;
  component: 'case-studies-section';
  [k: string]: any;
}

export interface CaseStudyStoryblok {
  title?: string;
  preview: RichtextStoryblok;
  image?: AssetStoryblok;
  excerpt?: string;
  wysiwyg?: (
    | BannerWysiwygStoryblok
    | GalleryWysiwygStoryblok
    | ImageWysiwygStoryblok
    | TestimonialWysiwygStoryblok
    | TextWysiwygStoryblok
    | VideoWysiwygStoryblok
  )[];
  meta_title?: string;
  meta_desc?: string;
  _uid: string;
  component: 'case-study';
  [k: string]: any;
}

export interface CaseStudyOverviewStoryblok {
  heading?: string;
  meta_title?: string;
  _uid: string;
  component: 'case-study-overview';
  [k: string]: any;
}

export interface CategoryStoryblok {
  name: string;
  meta_title?: string;
  meta_description?: string;
  description?: string;
  _uid: string;
  component: 'category';
  [k: string]: any;
}

export interface CategoryOverviewStoryblok {
  _uid: string;
  component: 'category-overview';
  [k: string]: any;
}

export interface ColouredContainerStoryblok {
  content: RichtextStoryblok;
  _uid: string;
  component: 'coloured-container';
  [k: string]: any;
}

export interface ColouredContainerSectionStoryblok {
  sections?: ColouredContainerStoryblok[];
  _uid: string;
  component: 'coloured-container-section';
  [k: string]: any;
}

export interface ConfigStoryblok {
  header: HeaderStoryblok[];
  footer: FooterStoryblok[];
  _uid: string;
  component: 'config';
  [k: string]: any;
}

export interface FaqStoryblok {
  question: string;
  answer: RichtextStoryblok;
  meta_title?: string;
  meta_description?: string;
  _uid: string;
  component: 'faq';
  [k: string]: any;
}

export interface FaqsSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  body?: string;
  faqs: (StoryblokStory<FaqStoryblok> | string)[];
  _uid: string;
  component: 'faqs-section';
  [k: string]: any;
}

export interface FeatureSectionStoryblok {
  name?: string;
  _uid: string;
  component: 'feature-section';
  [k: string]: any;
}

export interface FooterStoryblok {
  menu?: MenuSectionStoryblok[];
  body?: RichtextStoryblok;
  _uid: string;
  component: 'footer';
  [k: string]: any;
}

export type MultiassetStoryblok = {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  [k: string]: any;
}[];

export interface GalleryWysiwygStoryblok {
  gallery: MultiassetStoryblok;
  _uid: string;
  component: 'gallery-wysiwyg';
  [k: string]: any;
}

export interface HeaderStoryblok {
  menu?: MenuSectionStoryblok[];
  buttons?: ButtonStoryblok[];
  _uid: string;
  component: 'header';
  [k: string]: any;
}

export interface HomepageStoryblok {
  title: string;
  subheading?: string;
  animated_title?: AnimatedWordStoryblok[];
  buttons?: ButtonStoryblok[];
  excerpt?: string;
  image?: AssetStoryblok;
  body?: (
    | AnimatedWordsSectionStoryblok
    | ArticlesSectionStoryblok
    | CaseStudiesSectionStoryblok
    | ColouredContainerSectionStoryblok
    | FaqsSectionStoryblok
    | FeatureSectionStoryblok
    | ImageSectionStoryblok
    | IntroSectionStoryblok
    | LogoCarouselSectionStoryblok
    | StatsSectionStoryblok
    | TestimonialsSectionStoryblok
    | TextAndImageSectionStoryblok
    | TextOverImageSectionStoryblok
    | TextSectionStoryblok
    | TiktokSectionStoryblok
  )[];
  meta_title?: string;
  meta_description?: string;
  _uid: string;
  component: 'homepage';
  [k: string]: any;
}

export interface ImageSectionStoryblok {
  images?: MultiassetStoryblok;
  _uid: string;
  component: 'image-section';
  [k: string]: any;
}

export interface ImageWysiwygStoryblok {
  image: AssetStoryblok;
  caption?: string;
  _uid: string;
  component: 'image-wysiwyg';
  [k: string]: any;
}

export interface IntroSectionStoryblok {
  heading?: string;
  content?: RichtextStoryblok;
  _uid: string;
  component: 'intro-section';
  [k: string]: any;
}

export interface LogoCarouselSectionStoryblok {
  heading?: string;
  eyebrow?: string;
  body?: string;
  logos: MultiassetStoryblok;
  _uid: string;
  component: 'logo-carousel-section';
  [k: string]: any;
}

export interface MenuLinkStoryblok {
  label: string;
  description?: string;
  link: Exclude<MultilinkStoryblok, { linktype?: 'asset' }>;
  _uid: string;
  component: 'menu-link';
  [k: string]: any;
}

export interface MenuSectionStoryblok {
  heading: string;
  items?: MenuLinkStoryblok[];
  _uid: string;
  component: 'menu-section';
  [k: string]: any;
}

export interface PageStoryblok {
  title: string;
  excerpt?: string;
  image?: AssetStoryblok;
  body?: (
    | AnimatedWordsSectionStoryblok
    | ArticlesSectionStoryblok
    | CaseStudiesSectionStoryblok
    | ColouredContainerSectionStoryblok
    | FaqsSectionStoryblok
    | FeatureSectionStoryblok
    | ImageSectionStoryblok
    | IntroSectionStoryblok
    | LogoCarouselSectionStoryblok
    | StatsSectionStoryblok
    | TestimonialsSectionStoryblok
    | TextAndImageSectionStoryblok
    | TextOverImageSectionStoryblok
    | TextSectionStoryblok
    | TiktokSectionStoryblok
  )[];
  meta_title?: string;
  meta_description?: string;
  _uid: string;
  component: 'page';
  uuid?: string;
  [k: string]: any;
}

export interface StatStoryblok {
  prefix?: string;
  value: string;
  suffix?: string;
  description: string;
  _uid: string;
  component: 'stat';
  [k: string]: any;
}

export interface StatsSectionStoryblok {
  heading?: string;
  stats?: StatStoryblok[];
  _uid: string;
  component: 'stats-section';
  [k: string]: any;
}

export interface TestimonialStoryblok {
  author?: string;
  role?: string;
  avatar?: AssetStoryblok;
  content?: string;
  company?: AssetStoryblok;
  _uid: string;
  component: 'testimonial';
  [k: string]: any;
}

export interface TestimonialsSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  body?: string;
  testimonials: (StoryblokStory<TestimonialStoryblok> | string)[];
  _uid: string;
  component: 'testimonials-section';
  [k: string]: any;
}

export interface TestimonialWysiwygStoryblok {
  testimonial: StoryblokStory<TestimonialStoryblok> | string;
  _uid: string;
  component: 'testimonial-wysiwyg';
  [k: string]: any;
}

export interface TextAndImageSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  body: string;
  buttons?: ButtonStoryblok[];
  image: AssetStoryblok;
  is_reverse?: boolean;
  _uid: string;
  component: 'text-and-image-section';
  [k: string]: any;
}

export interface TextOverImageSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  body: RichtextStoryblok;
  buttons?: ButtonStoryblok[];
  image: AssetStoryblok;
  _uid: string;
  component: 'text-over-image-section';
  [k: string]: any;
}

export interface TextSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  body: string;
  buttons?: ButtonStoryblok[];
  _uid: string;
  component: 'text-section';
  [k: string]: any;
}

export interface TextWysiwygStoryblok {
  richtext: RichtextStoryblok;
  _uid: string;
  component: 'text-wysiwyg';
  [k: string]: any;
}

export interface TiktokStoryblok {
  url?: string;
  _uid: string;
  component: 'tiktok';
  [k: string]: any;
}

export interface TiktokSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  body?: string;
  _uid: string;
  component: 'tiktok-section';
  [k: string]: any;
}

export interface VideoWysiwygStoryblok {
  video: AssetStoryblok;
  _uid: string;
  component: 'video-wysiwyg';
  [k: string]: any;
}
