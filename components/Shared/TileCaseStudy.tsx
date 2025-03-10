'use client';
import Link from 'next/link';

import { ISbRichtext } from '@storyblok/react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { AssetStoryblok } from '@/component-types-sb';
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
    preview: ISbRichtext;
    image?: AssetStoryblok;
  };
};

export default function TileCaseStudy({
  caseStudy,
  index = 0,
}: TTileCaseStudy) {
  const { title, slug, preview, image } = caseStudy || {};

  return (
    <motion.article
      className='group/tile relative flex snap-start snap-always overflow-hidden rounded-2xl bg-primary text-primary-foreground transition-colors hover:bg-popover hover:text-popover-foreground'
      variants={variants}
      initial='offscreen'
      whileInView='onscreen'
      custom={index}
    >
      {image?.filename && (
        <div className='pointer-events-none opacity-0 transition-opacity duration-500 after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/80 after:to-black/50 after:bg-blend-darken group-hover/tile:opacity-100'>
          <Image
            src={image.filename}
            alt={image.alt ?? ''}
            fill
            className='object-cover'
          />
        </div>
      )}
      <div className='relative flex grow flex-col justify-between gap-y-4 p-8 lg:gap-y-8 lg:p-10 xl:px-12 xl:py-16'>
        {title && <h6 className='text-sm font-light'>{title}</h6>}
        <RichText
          className='grow text-balance text-3xl font-black'
          content={preview}
        />

        <Link href={`/case-studies/${slug}/`} passHref legacyBehavior>
          <motion.a
            className='btn btn--white group-hover/tile:w-calc-content w-16 origin-right justify-end self-end overflow-x-clip whitespace-nowrap duration-300 before:absolute before:inset-0'
            whileTap={{ scale: 0.9 }}
          >
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
