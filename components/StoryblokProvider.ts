import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import Page from './Content/Page';

import Article from './Content/Article';
import CaseStudy from './Content/Article';
import ArticleOverview from './Content/ArticleOverview';
import CaseStudyOverview from './Content/CaseStudyOverview';
import TextSection from './Sections/TextSection';
import TextAndImageSection from './Sections/TextAndImageSection';
import Button from './Block/Button';
import Testimonial from './Content/Testimonial';
import AnimatedWordsSection from './Sections/AnimatedWordsSection';
import Layout from '@/components/Shared/Layout';
import Category from './Content/Category';
import CategoryOverview from './Content/CategoryOverview';
import MenuLink from './Block/MenuLink';
import FaqsSection from './Sections/FaqsSection';
import TestimonialsSection from './Sections/TestimonialsSection';
import BannerWysiwyg from './Wysiwyg/BannerWysiwyg';
import GalleryWysiwyg from './Wysiwyg/GalleryWysiwyg';
import ImageWysiwyg from './Wysiwyg/ImageWysiwyg';
import TestimonialWysiwyg from './Wysiwyg/TestimonialWysiwyg';
import TextWysiwyg from './Wysiwyg/TextWysiwyg';
import ArticlesSection from './Sections/ArticlesSection';

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    article: Article,
    category: Category,
    'category-overview': CategoryOverview,
    'case-study': CaseStudy,
    config: Layout,
    'menu-link': MenuLink,
    'article-overview': ArticleOverview,
    'case-study-overview': CaseStudyOverview,
    'text-section': TextSection,
    'text-and-image-section': TextAndImageSection,
    'animated-words-section': AnimatedWordsSection,
    'testimonials-section': TestimonialsSection,
    'articles-section': ArticlesSection,
    'faqs-section': FaqsSection,
    testimonial: Testimonial,
    page: Page,
    button: Button,

    'banner-wysiwyg': BannerWysiwyg,
    'gallery-wysiwyg': GalleryWysiwyg,
    'text-wysiwyg': TextWysiwyg,
    'image-wysiwyg': ImageWysiwyg,
    'testimonial-wysiwyg': TestimonialWysiwyg,
  },
});

export default function StoryblokProvider({
  children,
}: {
  children: JSX.Element[];
}) {
  return children;
}
