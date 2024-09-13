import { storyblokEditable } from '@storyblok/react/rsc';
import Wysiwyg from '../Shared/Wysiwyg';
import Hero from '../Shared/Hero';
import Section from '../Shared/Section';
import Container from '../Shared/Container';
import { Suspense } from 'react';
import SkeletonGrid from '../Shared/SkeletonGrid';
import SectionWrap from '../Shared/SectionWrap';
import { CaseStudyStoryblok } from '@/component-types-sb';
import CaseStudies from '../Shared/CaseStudies';

const CaseStudy = ({ blok, id }: CaseStudyStoryblok) => {
  const { title, image, excerpt, wysiwyg } = blok;
  return (
    <div {...storyblokEditable(blok)}>
      <Hero {...{ title, excerpt, image }} />
      <Wysiwyg wysiwyg={wysiwyg} />
      <Section blok={blok} color='muted'>
        <Container>
          <SectionWrap heading='Other Case Studies'>
            <Suspense fallback={<SkeletonGrid tiles={6} />}>
              <CaseStudies limit={3} toExclude={id} />
            </Suspense>
          </SectionWrap>
        </Container>
      </Section>
    </div>
  );
};

export default CaseStudy;
