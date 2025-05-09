'use client';

import Link from 'next/link';
import Image from 'next/image';
import Badge from './Badge';
import { AssetStoryblok, CategoryStoryblok } from '@/component-types-sb';
import { ChevronRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

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

type TTileArticle = {
  article: {
    title: string;
    slug: string;
    excerpt: string;
    categories: CategoryStoryblok[];
    image: AssetStoryblok;
    date: Date;
  };
  index?: number;
};

export default function TileArticle({ article, index = 0 }: TTileArticle) {
  const { title, slug, excerpt, categories, image, date } = article || {};
  const formattedDate = date
    ? new Date(date).toLocaleString('default', {
        month: 'long',
        year: 'numeric',
      })
    : '';
  return (
    <motion.article
      className='group/tile relative flex snap-start snap-always flex-col overflow-hidden rounded-2xl'
      variants={variants}
      initial='offscreen'
      whileInView='onscreen'
      custom={index}
    >
      {image?.filename && (
        <div className='relative aspect-video w-full overflow-hidden'>
          <Image
            src={image.filename}
            alt={image.alt || image.title || ''}
            fill
            className='absolute inset-0 h-full w-full object-cover duration-1000 group-hover/tile:scale-[1.1]'
          />
        </div>
      )}

      <div className='relative flex grow flex-col items-start gap-y-2 bg-card p-4 text-card-foreground sm:gap-y-4 sm:p-8 xl:p-12'>
        {categories?.length ? (
          <div className='pointer-events-none mb-6 flex flex-wrap gap-2'>
            {categories.map((category) => (
              <Badge
                className='relative z-1'
                href={`/${category.full_slug}`}
                label={category.name}
                key={category.uuid}
              />
            ))}
          </div>
        ) : null}

        <div className='flex flex-col gap-y-2'>
          {formattedDate && <p className='eyebrow'>{formattedDate}</p>}

          <h5 className='line-clamp-2 font-bold' title={title}>
            {title}
          </h5>
        </div>
        <Link className='absolute inset-0' href={`/insights/${slug}/`}>
          <span className='sr-only'>Read more</span>
        </Link>
        <div className='flex w-full items-center justify-between gap-x-6'>
          <p className='line-clamp-3 text-sm' title={excerpt}>
            {excerpt}
          </p>
          <ChevronRight
            className='shrink-0 -translate-x-2 justify-self-end opacity-0 transition-[opacity,transform] group-hover/tile:translate-x-0 group-hover/tile:opacity-100'
            size={32}
          />
        </div>
      </div>
    </motion.article>
  );
}
