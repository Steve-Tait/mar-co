import { CaseStudyOverviewStoryblok } from '@/component-types-sb';
import Hero from '../Shared/Hero';
import Section from '../Shared/Section';
import Container from '../Shared/Container';
import { Suspense } from 'react';
import SkeletonGrid from '../Shared/SkeletonGrid';
import CaseStudies from '../Shared/CaseStudies';
import { StoryblokComponent } from '@storyblok/react';

const CaseStudiesOverview = async ({ blok }: CaseStudyOverviewStoryblok) => {
  const { title, excerpt, image, body } = blok;
  return (
    <>
      <Hero title={title || 'Case Studies'} {...{ excerpt, image }} />
      <Section color='muted'>
        <Container>
          <Suspense fallback={<SkeletonGrid />}>
            <CaseStudies />
          </Suspense>
        </Container>
      </Section>
      {body &&
        body.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok.uuid} />
        ))}
    </>
  );
};

export default CaseStudiesOverview;
