import Button from '@/components/Block/Button';
import ColouredContainer from '@/components/Block/ColouredContainer';
import MenuLink from '@/components/Block/MenuLink';
import Article from '@/components/Content/Article';
import ArticleOverview from '@/components/Content/ArticleOverview';
import CaseStudy from '@/components/Content/CaseStudy';
import CaseStudyOverview from '@/components/Content/CaseStudyOverview';
import Category from '@/components/Content/Category';
import CategoryOverview from '@/components/Content/CategoryOverview';
import Homepage from '@/components/Content/Homepage';
import Page from '@/components/Content/Page';
import Testimonial from '@/components/Content/Testimonial';
import AnimatedWordsSection from '@/components/Sections/AnimatedWordsSection';
import ArticlesSection from '@/components/Sections/ArticlesSection';
import CaseStudiesSection from '@/components/Sections/CaseStudiesSection';
import ColouredContainerSection from '@/components/Sections/ColouredContainerSection';
import FaqsSection from '@/components/Sections/FaqsSection';
import FullWidthImageSection from '@/components/Sections/FullWidthImageSection';
import ImageSection from '@/components/Sections/ImageSection';
import IntroSection from '@/components/Sections/IntroSection';
import LogoCarouselSection from '@/components/Sections/LogoCarouselSection';
import StatsSection from '@/components/Sections/StatsSection';
import TestimonialsSection from '@/components/Sections/TestimonialsSection';
import TextAndImageSection from '@/components/Sections/TextAndImageSection';
import TextOverImageSection from '@/components/Sections/TextOverImageSection';
import TextSection from '@/components/Sections/TextSection';
import TikTokSection from '@/components/Sections/TikTokSection';
import Layout from '@/components/Shared/Layout';
import BannerWysiwyg from '@/components/Wysiwyg/BannerWysiwyg';
import GalleryWysiwyg from '@/components/Wysiwyg/GalleryWysiwyg';
import ImageWysiwyg from '@/components/Wysiwyg/ImageWysiwyg';
import TestimonialWysiwyg from '@/components/Wysiwyg/TestimonialWysiwyg';
import TextWysiwyg from '@/components/Wysiwyg/TextWysiwyg';

export const COMPONENTS = {
  article: Article,
  category: Category,
  'category-overview': CategoryOverview,
  'case-study': CaseStudy,
  config: Layout,
  'menu-link': MenuLink,
  'article-overview': ArticleOverview,
  'case-study-overview': CaseStudyOverview,
  'text-section': TextSection,
  'intro-section': IntroSection,
  'image-section': ImageSection,
  'stats-section': StatsSection,
  'coloured-container-section': ColouredContainerSection,
  'full-width-image-section': FullWidthImageSection,
  'logo-carousel-section': LogoCarouselSection,
  'text-and-image-section': TextAndImageSection,
  'text-over-image-section': TextOverImageSection,
  'animated-words-section': AnimatedWordsSection,
  'case-studies-section': CaseStudiesSection,
  'testimonials-section': TestimonialsSection,
  'articles-section': ArticlesSection,
  'faqs-section': FaqsSection,
  'tiktok-section': TikTokSection,
  testimonial: Testimonial,
  homepage: Homepage,
  page: Page,
  button: Button,
  'coloured-container': ColouredContainer,

  'banner-wysiwyg': BannerWysiwyg,
  'gallery-wysiwyg': GalleryWysiwyg,
  'text-wysiwyg': TextWysiwyg,
  'image-wysiwyg': ImageWysiwyg,
  'testimonial-wysiwyg': TestimonialWysiwyg,
};
