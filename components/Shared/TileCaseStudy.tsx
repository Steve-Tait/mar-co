'use client';
import Link from 'next/link';

import { ISbRichtext } from '@storyblok/react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Badge from './Badge';
import { AssetStoryblok, IndustryStoryblok } from '@/component-types-sb';
import RichText from '../Block/RichText';
import { ArrowRight } from 'lucide-react';

const variants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.1,
      type: 'tween',
    },
  }),
};

type TTileCaseStudy = {
  index?: number;
  caseStudy: {
    title: string;
    slug: string;
    excerpt: ISbRichtext;
    industry: IndustryStoryblok[];
    image?: AssetStoryblok;
  };
};

export default function TileCaseStudy({
  caseStudy,
  index = 0,
}: TTileCaseStudy) {
  const { title, slug, excerpt, image, industry } = caseStudy || {};
  return (
    <motion.article
      className='group/tile relative flex snap-start snap-always overflow-hidden rounded-2xl bg-card text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground'
      variants={variants}
      initial='offscreen'
      whileInView='onscreen'
      custom={index}
    >
      {image?.filename && (
        <div className='pointer-events-none transition-opacity duration-500 after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/80 after:to-black/50 after:bg-blend-darken md:opacity-0 md:group-hover/tile:opacity-100'>
          <Image
            src={image.filename}
            alt={image.alt ?? ''}
            fill
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            className='object-cover'
          />
        </div>
      )}
      <div className='relative flex min-h-96 grow flex-col justify-between gap-y-4 p-6 sm:p-8 lg:gap-y-8 xl:px-12 xl:py-16'>
        <div className='flex flex-col items-start gap-y-2'>
          {industry?.length ? (
            <div className='pointer-events-none flex flex-wrap gap-2'>
              {industry.map((industry) => (
                <Badge
                  className='relative z-1'
                  href={`/${industry.full_slug}`}
                  label={industry.name}
                  key={industry.uuid}
                />
              ))}
            </div>
          ) : null}
          {title && <h6 className='text-sm font-light'>{title}</h6>}
        </div>
        <RichText
          className='grow text-balance font-bold uppercase'
          content={excerpt}
        />

        <Link href={`/case-studies/${slug}/`} passHref legacyBehavior>
          <motion.a className='btn btn--text-link max-w-16 origin-right justify-end self-end overflow-x-clip whitespace-nowrap duration-300 before:absolute before:inset-0 group-hover/tile:max-w-40'>
            <span className='opacity-0 transition-opacity group-hover/tile:opacity-100'>
              Read More
            </span>
            <ArrowRight className='size-4 shrink-0' size={20} />
          </motion.a>
        </Link>
      </div>
    </motion.article>
  );
}
