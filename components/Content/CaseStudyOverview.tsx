import { CaseStudyOverviewStoryblok } from '@/component-types-sb';
import Section from '../Shared/Section';
import Container from '../Shared/Container';
import { Suspense } from 'react';
import SkeletonGrid from '../Shared/SkeletonGrid';
import CaseStudies from '../Shared/CaseStudies';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
import HeroWrap from '../Shared/HeroWrap';

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
      {body &&
        body.map((nestedBlok: any) => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok.uuid} />
        ))}
    </HeroWrap>
  );
};

export default CaseStudiesOverview;
