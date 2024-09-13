import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import StoryblokBridgeLoader from '@storyblok/react/bridge-loader';

import type { Metadata } from 'next';
import { Open_Sans, Poppins } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

import Button from '@/components/Block/Button';
import Article from '@/components/Content/Article';
import ArticleOverview from '@/components/Content/ArticleOverview';
import CaseStudy from '@/components/Content/CaseStudy';
import CaseStudyOverview from '@/components/Content/CaseStudyOverview';
import Testimonial from '@/components/Content/Testimonial';
import AnimatedWordsSection from '@/components/Sections/AnimatedWordsSection';
import CaseStudiesSection from '@/components/Sections/CaseStudiesSection';
import ColouredContainerSection from '@/components/Sections/ColouredContainerSection';
import TextAndImageSection from '@/components/Sections/TextAndImageSection';
import TextOverImageSection from '@/components/Sections/TextOverImageSection';
import TextSection from '@/components/Sections/TextSection';
import IntroSection from '@/components/Sections/IntroSection';
import LogoCarouselSection from '@/components/Sections/LogoCarouselSection';
import TestimonialsSection from '@/components/Sections/TestimonialsSection';
import ImageSection from '@/components/Sections/ImageSection';
import StatsSection from '@/components/Sections/StatsSection';
import ArticlesSection from '@/components/Sections/ArticlesSection';
import Page from '@/components/Content/Page';
import Homepage from '@/components/Content/Homepage';
import Layout from '@/components/Shared/Layout';
import MenuLink from '@/components/Block/MenuLink';
import Category from '@/components/Content/Category';
import FaqsSection from '@/components/Sections/FaqsSection';
import Scroll from '../components/Shared/Scroll';
import ColouredContainer from '@/components/Block/ColouredContainer';

import CategoryOverview from '@/components/Content/CategoryOverview';
import TikTokSection from '@/components/Sections/TikTokSection';
import BannerWysiwyg from '@/components/Wysiwyg/BannerWysiwyg';
import GalleryWysiwyg from '@/components/Wysiwyg/GalleryWysiwyg';
import TextWysiwyg from '@/components/Wysiwyg/TextWysiwyg';
import ImageWysiwyg from '@/components/Wysiwyg/ImageWysiwyg';
import TestimonialWysiwyg from '@/components/Wysiwyg/TestimonialWysiwyg';

import { resolveRelations } from '@/lib/consts';

const poppins = Poppins({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: {
    template: '%s | MAR-CO',
    default: 'MAR-CO',
  },
  openGraph: {
    images: '/logo.png',
  },
};

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
    'intro-section': IntroSection,
    'image-section': ImageSection,
    'stats-section': StatsSection,
    'coloured-container-section': ColouredContainerSection,
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
  },
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const bridgeOptions = {
    resolveRelations: resolveRelations,
  };

  return (
    <html lang='en'>
      <body
        className={cn(
          'font-sans flex min-h-screen flex-col bg-primary text-primary-foreground antialiased',
          openSans.variable,
          poppins.variable
        )}
      >
        <Scroll root>
          <Layout>{children}</Layout>
        </Scroll>
      </body>
      <StoryblokBridgeLoader options={bridgeOptions} />
    </html>
  );
}
