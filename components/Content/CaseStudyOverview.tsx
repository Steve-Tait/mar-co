import { CaseStudyOverviewStoryblok } from '@/component-types-sb';
import Section from '../Shared/Section';
import Container from '../Shared/Container';
import { Suspense } from 'react';
import SkeletonGrid from '../Shared/SkeletonGrid';
import CaseStudies from '../Shared/CaseStudies';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
import HeroWrap from '../Shared/HeroWrap';
import SectionBuilder from '../Shared/SectionBuilder';

const CaseStudiesOverview = async ({ blok }: CaseStudyOverviewStoryblok) => {
  const { title, excerpt, image, body } = blok;
  return (
    <HeroWrap title={title || 'Case Studies'} {...{ excerpt, image }}>
      <Section>
        <Container>
          <Suspense fallback={<SkeletonGrid />}>
            <CaseStudies />
          </Suspense>
        </Container>
      </Section>
      <SectionBuilder body={body} />
    </HeroWrap>
  );
};

export default CaseStudiesOverview;
