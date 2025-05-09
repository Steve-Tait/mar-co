import {StoryblokStory} from 'storyblok-generate-ts'

export interface AnimatedWordStoryblok {
  word: string;
  _uid: string;
  component: "animated-word";
  [k: string]: any;
}

export interface AnimatedWordsStoryblok {
  animated_words?: AnimatedWordStoryblok[];
  _uid: string;
  component: "animated-words";
  [k: string]: any;
}

export interface AssetStoryblok {
  _uid?: string;
  id: number | null;
  alt: string | null;
  name: string;
  focus: string | null;
  source: string | null;
  title: string | null;
  filename: string;
  copyright: string | null;
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
  animated_words: AnimatedWordStoryblok[];
  background?: AssetStoryblok;
  theme?: number | string;
  _uid: string;
  component: "animated-words-section";
  [k: string]: any;
}

export interface ArticleStoryblok {
  title?: string;
  excerpt?: string;
  image?: AssetStoryblok;
  categories?: (StoryblokStory<CategoryStoryblok> | string)[];
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
  author?: StoryblokStory<AuthorStoryblok> | string;
  _uid: string;
  component: "article";
  [k: string]: any;
}

export interface ArticleOverviewStoryblok {
  showSort: boolean;
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
  title?: string;
  meta_title?: string;
  meta_description?: string;
  excerpt?: string;
  image?: AssetStoryblok;
  button?: ButtonStoryblok[];
  _uid: string;
  component: "article-overview";
  [k: string]: any;
}

export interface ArticlesSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  body?: string;
  articles?: (StoryblokStory<ArticleStoryblok> | string)[];
  filter_by_category?: (StoryblokStory<CategoryStoryblok> | string)[];
  theme?: number | string;
  button?: ButtonStoryblok[];
  _uid: string;
  component: "articles-section";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      target?: "_self" | "_blank";
      [k: string]: any;
    };

export interface AuthorStoryblok {
  avatar?: AssetStoryblok;
  name: string;
  description?: string;
  linkedin?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "author";
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
  component: "banner-wysiwyg";
  [k: string]: any;
}

export interface ButtonStoryblok {
  link: Exclude<MultilinkStoryblok, {linktype?: "asset"}>;
  label: string;
  variant: "" | "primary" | "secondary" | "text-link";
  form_trigger: boolean;
  _uid: string;
  component: "button";
  [k: string]: any;
}

export interface CaseStudiesSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  body?: string;
  articles?: (StoryblokStory<CaseStudyStoryblok> | string)[];
  theme?: number | string;
  button?: ButtonStoryblok[];
  _uid: string;
  component: "case-studies-section";
  [k: string]: any;
}

export interface CaseStudyStoryblok {
  industry?: any[];
  wysiwyg?: (
    | BannerWysiwygStoryblok
    | GalleryWysiwygStoryblok
    | ImageWysiwygStoryblok
    | TestimonialWysiwygStoryblok
    | TextWysiwygStoryblok
    | VideoWysiwygStoryblok
  )[];
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
  logo?: AssetStoryblok;
  title?: string;
  excerpt?: RichtextStoryblok;
  image?: AssetStoryblok;
  disclaimer?: string;
  meta_title?: string;
  meta_desc?: string;
  _uid: string;
  component: "case-study";
  [k: string]: any;
}

export interface CaseStudyOverviewStoryblok {
  title?: string;
  excerpt?: string;
  image?: AssetStoryblok;
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
  meta_title?: string;
  button?: ButtonStoryblok[];
  _uid: string;
  component: "case-study-overview";
  [k: string]: any;
}

export interface CategoryStoryblok {
  title?: string;
  excerpt?: string;
  image?: AssetStoryblok;
  name: string;
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
  meta_title?: string;
  meta_description?: string;
  _uid: string;
  component: "category";
  [k: string]: any;
}

export interface CategoryOverviewStoryblok {
  _uid: string;
  component: "category-overview";
  [k: string]: any;
}

export interface ChecklistSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  checklist?: ListItemStoryblok[];
  button?: ButtonStoryblok[];
  theme?: number | string;
  _uid: string;
  component: "checklist-section";
  [k: string]: any;
}

export interface ColouredContainerStoryblok {
  content: RichtextStoryblok;
  _uid: string;
  component: "coloured-container";
  [k: string]: any;
}

export interface ColouredContainerSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  body?: RichtextStoryblok;
  sections?: ColouredContainerStoryblok[];
  theme?: number | string;
  button?: ButtonStoryblok[];
  _uid: string;
  component: "coloured-container-section";
  [k: string]: any;
}

export interface ConfigStoryblok {
  header: HeaderStoryblok[];
  footer: FooterStoryblok[];
  cookie?: CookieConsentStoryblok[];
  contact?: ContactStoryblok[];
  _uid: string;
  component: "config";
  [k: string]: any;
}

export interface ContactStoryblok {
  linkedin?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  email?: Exclude<MultilinkStoryblok, {linktype?: "asset"}>;
  phone?: string;
  address?: string;
  _uid: string;
  component: "contact";
  [k: string]: any;
}

export interface ContactSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  theme?: number | string;
  linkedin?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  email?: Exclude<MultilinkStoryblok, {linktype?: "asset"}>;
  phone?: string;
  address?: string;
  _uid: string;
  component: "contact-section";
  [k: string]: any;
}

export interface CookieConsentStoryblok {
  message?: RichtextStoryblok;
  _uid: string;
  component: "cookie-consent";
  [k: string]: any;
}

export interface FaqStoryblok {
  question: string;
  answer: RichtextStoryblok;
  meta_title?: string;
  meta_description?: string;
  _uid: string;
  component: "faq";
  [k: string]: any;
}

export interface FaqsSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  body?: string;
  faqs: (StoryblokStory<FaqStoryblok> | string)[];
  theme?: number | string;
  button?: ButtonStoryblok[];
  _uid: string;
  component: "faqs-section";
  [k: string]: any;
}

export interface FeatureSectionStoryblok {
  name?: string;
  theme?: number | string;
  _uid: string;
  component: "feature-section";
  [k: string]: any;
}

export interface FooterStoryblok {
  menu?: MenuSectionStoryblok[];
  body?: RichtextStoryblok;
  linkedin?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  mandatories?: LinkStoryblok[];
  _uid: string;
  component: "footer";
  [k: string]: any;
}

export interface FullWidthImageSectionStoryblok {
  image?: AssetStoryblok;
  _uid: string;
  component: "full-width-image-section";
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
  component: "gallery-wysiwyg";
  [k: string]: any;
}

export interface HeaderStoryblok {
  menu?: (MenuSectionStoryblok | MenuLinkStoryblok)[];
  buttons?: ButtonStoryblok[];
  phone?: string;
  _uid: string;
  component: "header";
  [k: string]: any;
}

export interface HomepageStoryblok {
  title: string;
  animated_title?: AnimatedWordStoryblok[];
  subheading?: string;
  buttons?: ButtonStoryblok[];
  image?: AssetStoryblok;
  excerpt?: string;
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
  meta_title?: string;
  meta_description?: string;
  _uid: string;
  component: "homepage";
  [k: string]: any;
}

export interface ImageSectionStoryblok {
  images?: MultiassetStoryblok;
  theme?: number | string;
  _uid: string;
  component: "image-section";
  [k: string]: any;
}

export interface ImageWysiwygStoryblok {
  image: AssetStoryblok;
  caption?: string;
  _uid: string;
  component: "image-wysiwyg";
  [k: string]: any;
}

export interface IndustryStoryblok {
  title?: string;
  excerpt?: string;
  image?: AssetStoryblok;
  name: string;
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
  meta_title?: string;
  meta_description?: string;
  _uid: string;
  component: "industry";
  [k: string]: any;
}

export interface IndustryOverviewStoryblok {
  _uid: string;
  component: "industry-overview";
  [k: string]: any;
}

export interface IntroSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  content?: RichtextStoryblok;
  theme?: number | string;
  button?: ButtonStoryblok[];
  _uid: string;
  component: "intro-section";
  [k: string]: any;
}

export interface KeyFeaturesSectionStoryblok {
  heading?: string;
  body?: RichtextStoryblok;
  buttons?: ButtonStoryblok[];
  isVertical: boolean;
  features?: KeyPointStoryblok[];
  theme?: number | string;
  _uid: string;
  component: "key-features-section";
  [k: string]: any;
}

export interface KeyPointStoryblok {
  icon?: string;
  heading: string;
  body?: RichtextStoryblok;
  button?: ButtonStoryblok[];
  _uid: string;
  component: "key-point";
  [k: string]: any;
}

export interface LinkStoryblok {
  label: string;
  link: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "link";
  [k: string]: any;
}

export interface ListItemStoryblok {
  text: string;
  _uid: string;
  component: "list-item";
  [k: string]: any;
}

export interface LogoCarouselSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  body?: string;
  logos: MultiassetStoryblok;
  theme?: number | string;
  _uid: string;
  component: "logo-carousel-section";
  [k: string]: any;
}

export interface MenuLinkStoryblok {
  label: string;
  description?: string;
  link: Exclude<MultilinkStoryblok, {linktype?: "asset"}>;
  _uid: string;
  component: "menu-link";
  [k: string]: any;
}

export interface MenuSectionStoryblok {
  heading: string;
  items?: MenuLinkStoryblok[];
  _uid: string;
  component: "menu-section";
  [k: string]: any;
}

export interface PageStoryblok {
  type?: "primary" | "secondary";
  title: string;
  excerpt?: string;
  image?: AssetStoryblok;
  button?: ButtonStoryblok[];
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
  meta_title?: string;
  meta_description?: string;
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface StatStoryblok {
  prefix?: string;
  value: string;
  suffix?: string;
  formatNumber: boolean;
  description: string;
  _uid: string;
  component: "stat";
  [k: string]: any;
}

export interface StatsSectionStoryblok {
  heading?: string;
  stats?: StatStoryblok[];
  theme?: number | string;
  countNumbers: boolean;
  _uid: string;
  component: "stats-section";
  [k: string]: any;
}

export interface TestimonialStoryblok {
  author?: string;
  role?: string;
  avatar?: AssetStoryblok;
  content?: string;
  company?: AssetStoryblok;
  _uid: string;
  component: "testimonial";
  [k: string]: any;
}

export interface TestimonialsSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  body?: string;
  testimonials: (StoryblokStory<TestimonialStoryblok> | string)[];
  theme?: number | string;
  _uid: string;
  component: "testimonials-section";
  [k: string]: any;
}

export interface TestimonialWysiwygStoryblok {
  testimonial: StoryblokStory<TestimonialStoryblok> | string;
  _uid: string;
  component: "testimonial-wysiwyg";
  [k: string]: any;
}

export interface TextAndImageSectionStoryblok {
  eyebrow?: string;
  is_reverse: boolean;
  heading?: string;
  body: RichtextStoryblok;
  buttons?: ButtonStoryblok[];
  image: AssetStoryblok;
  theme?: number | string;
  _uid: string;
  component: "text-and-image-section";
  [k: string]: any;
}

export interface TextOverImageSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  body: RichtextStoryblok;
  buttons?: ButtonStoryblok[];
  image: AssetStoryblok;
  isContained: boolean;
  _uid: string;
  component: "text-over-image-section";
  [k: string]: any;
}

export interface TextSectionStoryblok {
  eyebrow?: string;
  heading?: string;
  body: RichtextStoryblok;
  buttons?: ButtonStoryblok[];
  theme?: number | string;
  isCenter: boolean;
  _uid: string;
  component: "text-section";
  [k: string]: any;
}

export interface TextWysiwygStoryblok {
  richtext: RichtextStoryblok;
  _uid: string;
  component: "text-wysiwyg";
  [k: string]: any;
}

export interface TiktokStoryblok {
  url?: string;
  _uid: string;
  component: "tiktok";
  [k: string]: any;
}

export interface TiktokSectionStoryblok {
  eyebrow?: string;
  body?: string;
  heading?: string;
  theme?: number | string;
  _uid: string;
  component: "tiktok-section";
  [k: string]: any;
}

export interface VideoWysiwygStoryblok {
  video: AssetStoryblok;
  _uid: string;
  component: "video-wysiwyg";
  [k: string]: any;
}
