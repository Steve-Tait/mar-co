import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import SectionWrap from '../Shared/SectionWrap';
import { Suspense } from 'react';
import SkeletonGrid from '../Shared/SkeletonGrid';
import { ArticlesSectionStoryblok } from '@/component-types-sb';
import CaseStudiesCarousel from '../Shared/CaseStudiesCarousel';

const CaseStudiesSection = ({ blok }: ArticlesSectionStoryblok) => {
  const {
    eyebrow,
    heading,
    body,
    caseStudies,
    id: toExclude,
    filter_by_category: categories,
  } = blok;
  return (
    <Section blok={blok}>
      <Container>
        <SectionWrap {...{ eyebrow, heading, body }}>
          <Suspense fallback={<SkeletonGrid tiles={3} />}>
            <CaseStudiesCarousel
              limit={3}
              {...{ caseStudies, categories, toExclude }}
            />
          </Suspense>
        </SectionWrap>
      </Container>
    </Section>
  );
};

export default CaseStudiesSection;
