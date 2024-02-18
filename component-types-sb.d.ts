import { StoryblokStory } from 'storyblok-generate-ts';

export interface AnimatedWordStoryblok {
  word: string;
  _uid: string;
  component: 'animated-word';
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
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
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: 'asset' | 'url';
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: 'email';
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

export interface CaseStudyStoryblok {
  title?: string;
  categories?: (StoryblokStory<CategoryStoryblok> | string)[];
  meta_title?: string;
  meta_desc?: string;
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
  _uid: string;
  component: 'case-study';
  [k: string]: any;
}

export interface CaseStudyOverviewStoryblok {
  title?: string;
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

export interface ImageWysiwygStoryblok {
  image: AssetStoryblok;
  caption?: string;
  _uid: string;
  component: 'image-wysiwyg';
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
    | FaqsSectionStoryblok
    | FeatureSectionStoryblok
    | TestimonialsSectionStoryblok
    | TextAndImageSectionStoryblok
    | TextSectionStoryblok
  )[];
  meta_title?: string;
  meta_description?: string;
  _uid: string;
  component: 'page';
  uuid?: string;
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

export interface VideoWysiwygStoryblok {
  video: AssetStoryblok;
  _uid: string;
  component: 'video-wysiwyg';
  [k: string]: any;
}
