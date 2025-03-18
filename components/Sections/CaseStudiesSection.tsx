import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import SectionWrap from '../Shared/SectionWrap';
import { Suspense } from 'react';
import SkeletonGrid from '../Shared/SkeletonGrid';
import { ArticlesSectionStoryblok } from '@/component-types-sb';
import CaseStudies from '../Shared/CaseStudies';

const CaseStudiesSection = ({ blok }: ArticlesSectionStoryblok) => {
  const {
    eyebrow,
    heading,
    body,
    articles,
    id: toExclude,
    filter_by_category: categories,
  } = blok;
  console.log('blok', blok);
  return (
    <Section blok={blok}>
      <Container>
        <SectionWrap {...{ eyebrow, heading, body }}>
          <Suspense fallback={<SkeletonGrid tiles={3} />}>
            <CaseStudies
              limit={3}
              {...{ caseStudies: articles, categories, toExclude }}
            />
          </Suspense>
        </SectionWrap>
      </Container>
    </Section>
  );
};

export default CaseStudiesSection;
