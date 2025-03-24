import { storyblokEditable } from '@storyblok/react/rsc';
import Wysiwyg from '../Shared/Wysiwyg';
import Section from '../Shared/Section';
import Container from '../Shared/Container';
import { Suspense } from 'react';
import SkeletonGrid from '../Shared/SkeletonGrid';
import SectionWrap from '../Shared/SectionWrap';
import { CaseStudyStoryblok } from '@/component-types-sb';
import CaseStudies from '../Shared/CaseStudies';
import { StoryblokStory } from 'storyblok-generate-ts';
import SectionBuilder from '../Shared/SectionBuilder';
import HeroSecondary from '../Shared/HeroSecondary';
import LayoutScaler from '../Shared/LayoutScaler';

const CaseStudy = ({
  blok,
  id,
}: CaseStudyStoryblok & StoryblokStory<CaseStudyStoryblok>) => {
  const { title, image, excerpt, wysiwyg, disclaimer, logo, body } = blok;
  return (
    <main {...storyblokEditable(blok)}>
      <LayoutScaler>
        <HeroSecondary {...{ title, excerpt, image, disclaimer, logo }} />
        <Wysiwyg wysiwyg={wysiwyg} />
        <SectionBuilder body={body} />
        <Section blok={blok}>
          <Container>
            <SectionWrap heading='Related work'>
              <Suspense fallback={<SkeletonGrid tiles={6} />}>
                <CaseStudies limit={3} toExclude={id.toString()} />
              </Suspense>
            </SectionWrap>
          </Container>
        </Section>
      </LayoutScaler>
    </main>
  );
};

export default CaseStudy;
