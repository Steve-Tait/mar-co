import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import SectionWrap from '../Shared/SectionWrap';
import ArticlesGrid from '../Shared/ArticlesGrid';
import { Suspense } from 'react';
import SkeletonGrid from '../Shared/SkeletonGrid';
import { ArticlesSectionStoryblok } from '@/component-types-sb';

const ArticlesSection = ({ blok }: ArticlesSectionStoryblok) => {
  const {
    eyebrow,
    heading,
    body,
    articles,
    filter_by_category: categories,
  } = blok;
  return (
    <Section blok={blok} color='muted'>
      <Container>
        <SectionWrap {...{ eyebrow, heading, body }}>
          <Suspense fallback={<SkeletonGrid tiles={3} />}>
            <ArticlesGrid limit={3} {...{ articles, categories }} />
          </Suspense>
        </SectionWrap>
      </Container>
    </Section>
  );
};

export default ArticlesSection;
