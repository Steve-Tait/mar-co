import Link from 'next/link';
import Image from 'next/image';
import Badge from './Badge';
import { AssetStoryblok, CategoryStoryblok } from '@/component-types-sb';
import { Arrow } from './Icons';

type TTileArticle = {
  article: {
    title: string;
    slug: string;
    excerpt: string;
    categories: CategoryStoryblok[];
    image: AssetStoryblok;
  };
  published_at: Date;
};

export default function TileArticle({ article, published_at }: TTileArticle) {
  const { title, slug, excerpt, categories, image } = article;
  const date = published_at
    ? new Date(published_at).toLocaleString('default', {
        month: 'long',
        year: 'numeric',
      })
    : '';
  return (
    <article className='group flex flex-col overflow-hidden rounded-2xl'>
      {image?.filename && (
        <div className='relative aspect-video w-full overflow-hidden'>
          <Link href={`articles/${slug}/`}>
            <Image
              src={image.filename}
              alt={image.alt || image.title || ''}
              fill
              className='absolute inset-0 h-full w-full object-cover duration-1000 group-hover:scale-[1.1]'
            />
          </Link>
          {categories?.length && (
            <div className='pointer-events-none absolute left-4 right-4 top-4 flex flex-wrap gap-2'>
              {categories.map((category) => (
                <Badge
                  href={`/${category.full_slug}`}
                  label={category.name}
                  key={category.uuid}
                />
              ))}
            </div>
          )}
        </div>
      )}
      <div className='hover:bg-pink-70 relative -mt-4 flex grow flex-col items-start rounded-2xl bg-purple-700 p-6 text-white duration-200 group-hover:bg-purple-700'>
        <div className='grow'>
          {date && <small className='block font-bold text-pink'>{date}</small>}
          <h5 className='mb-2 line-clamp-2 font-bold' title={title}>
            {title}
          </h5>
          <p className='line-clamp-3 text-sm' title={excerpt}>
            {excerpt}
          </p>
        </div>
        <Link
          href={`/articles/${slug}/`}
          className='group mt-8 inline-flex items-center gap-x-6 font-bold uppercase text-pink'
          title='Read more'
        >
          Read More
          <Arrow className='h-6 w-6 -translate-x-2 duration-200 group-hover:translate-x-0' />
        </Link>
      </div>
    </article>
  );
}
