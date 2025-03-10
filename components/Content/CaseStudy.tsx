import { storyblokEditable } from '@storyblok/react/rsc';
import Wysiwyg from '../Shared/Wysiwyg';
import HeroCaseStudy from '../Shared/HeroCaseStudy';
import Section from '../Shared/Section';
import Container from '../Shared/Container';
import { Suspense } from 'react';
import SkeletonGrid from '../Shared/SkeletonGrid';
import SectionWrap from '../Shared/SectionWrap';
import { CaseStudyStoryblok } from '@/component-types-sb';
import CaseStudies from '../Shared/CaseStudies';
import HeroWrap from '../Shared/HeroWrap';

const CaseStudy = ({ blok, id }: CaseStudyStoryblok) => {
  const { title, image, excerpt, wysiwyg } = blok;
  return (
    <main {...storyblokEditable(blok)}>
      <HeroWrap {...{ title, excerpt, image }}>
        <Wysiwyg wysiwyg={wysiwyg} />
        <Section blok={blok}>
          <Container>
            <SectionWrap heading='Other Case Studies'>
              <Suspense fallback={<SkeletonGrid tiles={6} />}>
                <CaseStudies limit={3} toExclude={id} />
              </Suspense>
            </SectionWrap>
          </Container>
        </Section>
      </HeroWrap>
    </main>
  );
};

export default CaseStudy;
