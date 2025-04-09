import { ArticleOverviewStoryblok } from '@/component-types-sb';
import Section from '../Shared/Section';
import Container from '../Shared/Container';
import ArticlesGrid from '../Shared/ArticlesGrid';
import { Suspense } from 'react';
import SkeletonGrid from '../Shared/SkeletonGrid';
import { getCategories } from '@/lib/storyblok';
import Link from 'next/link';
import Heading from '../Shared/Heading';
import HeroWrap from '../Shared/HeroWrap';
import { cn } from '@/lib/utils';
import SectionBuilder from '../Shared/SectionBuilder';

export default async function ArticlesOverview({
  blok,
  searchParams,
}: ArticleOverviewStoryblok) {
  const categories = await getCategories();
  const { title, excerpt, image, button, showSort, body } = blok;
  return (
    <HeroWrap {...{ title, excerpt, image, button }}>
      <Section blok={blok}>
        <Container
          className={
            showSort
              ? 'grid grid-cols-1 gap-8'
              : 'md:grid-cols-3 md:items-start lg:grid-cols-4'
          }
        >
          {showSort && (
            <aside className='rounded-2xl bg-primary p-6 text-primary-foreground md:sticky md:top-28'>
              <Heading heading='Sort by' level={4} />
              <ul>
                {categories.map((category) => (
                  <li key={category.content.slug}>
                    <Link
                      href={`?${new URLSearchParams({ id: category.uuid })}`}
                      replace
                      scroll={false}
                      className={
                        searchParams?.id && category.uuid === searchParams.id
                          ? 'font-bold'
                          : ''
                      }
                    >
                      {category.content.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
          <div
            className={cn(
              showSort ? 'md:col-span-2 lg:col-span-3' : 'col-span-1'
            )}
          >
            <Suspense fallback={<SkeletonGrid />}>
              <ArticlesGrid
                categories={searchParams?.id && [searchParams.id]}
              />
            </Suspense>
          </div>
        </Container>
      </Section>
      <SectionBuilder body={body} />
    </HeroWrap>
  );
}
