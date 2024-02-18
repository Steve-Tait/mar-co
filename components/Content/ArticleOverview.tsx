import { ArticleOverviewStoryblok } from '@/component-types-sb';
import Section from '../Shared/Section';
import Container from '../Shared/Container';
import Hero from '../Shared/Hero';
import ArticlesGrid from '../Shared/ArticlesGrid';
import { Suspense } from 'react';
import SkeletonGrid from '../Shared/SkeletonGrid';

export default async function ArticlesOverview({
  blok,
}: {
  blok: ArticleOverviewStoryblok;
}) {
  const { heading } = blok;

  return (
    <>
      <Hero title={heading} />
      <Section blok={blok}>
        <Container>
          <Suspense fallback={<SkeletonGrid tiles={6} />}>
            <ArticlesGrid />
          </Suspense>
        </Container>
      </Section>
    </>
  );
}
