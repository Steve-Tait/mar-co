import Hero from '../Shared/Hero';
import Section from '../Shared/Section';
import Container from '../Shared/Container';
import { Suspense } from 'react';
import ArticlesGrid from '../Shared/ArticlesGrid';
import Link from 'next/link';
import Heading from '../Shared/Heading';
import { CategoryOverviewStoryblok } from '@/component-types-sb';
import { getCategories } from '@/lib/storyblok';
import SkeletonGrid from '../Shared/SkeletonGrid';
import { StoryblokComponent } from '@storyblok/react';

const CategoryOverview = async ({
  blok,
  searchParams,
}: CategoryOverviewStoryblok) => {
  const categories = await getCategories();
  const { heading, description, image, body } = blok;
  return (
    <>
      <Hero
        title={heading ?? 'Categories'}
        excerpt={description}
        image={image}
      />
      <Section color='muted'>
        <Container className='grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start lg:grid-cols-4'>
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
                      category.uuid === searchParams.id ? 'font-bold' : ''
                    }
                  >
                    {category.content.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          <div className='md:col-span-2 lg:col-span-3'>
            <Suspense fallback={<SkeletonGrid tiles={3} />}>
              <ArticlesGrid categories={searchParams.id && [searchParams.id]} />
            </Suspense>
          </div>
        </Container>
      </Section>
      {body &&
        body.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok.uuid} />
        ))}
    </>
  );
};

export default CategoryOverview;
