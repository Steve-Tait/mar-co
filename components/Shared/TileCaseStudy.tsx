'use client';

import Link from 'next/link';

import { ISbRichtext } from '@storyblok/react';
import { render } from 'storyblok-rich-text-react-renderer';
import { motion, Variants } from 'framer-motion';
import Button from '../Block/Button';

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
  };
};

export default function TileCaseStudy({
  caseStudy,
  index = 0,
}: TTileCaseStudy) {
  const { title, slug, preview } = caseStudy || {};

  return (
    <motion.article
      className='group relative flex snap-start snap-always flex-col justify-between gap-y-4 overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground transition-colors hover:bg-popover hover:text-popover-foreground lg:gap-y-8 lg:p-10 xl:p-16'
      variants={variants}
      initial='offscreen'
      whileInView='onscreen'
      custom={index}
    >
      {title && <h6 className='text-sm font-light'>{title}</h6>}
      <div className='grow text-balance text-3xl font-black'>
        {render(preview)}
      </div>
      <Link className='absolute inset-0' href={`/case-studies/${slug}/`}>
        <span className='sr-only'>Read More</span>
      </Link>
      <Link href={`/case-studies/${slug}/`} passHref legacyBehavior>
        <motion.a className='btn btn--white self-end' whileTap={{ scale: 0.9 }}>
          Read More
        </motion.a>
      </Link>
    </motion.article>
  );
}
