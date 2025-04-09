import { storyblokEditable } from '@storyblok/react/rsc';
import Section from '../Shared/Section';
import Container from '../Shared/Container';
import SkeletonGrid from '../Shared/SkeletonGrid';
import { Suspense } from 'react';
import { IndustryStoryblok } from '@/component-types-sb';
import SectionBuilder from '../Shared/SectionBuilder';
import HeroSecondary from '../Shared/HeroSecondary';
import LayoutScaler from '../Shared/LayoutScaler';
import CaseStudies from '../Shared/CaseStudies';

const Industry = (content: IndustryStoryblok) => {
  const { blok, uuid } = content;
  const { name, title, excerpt, image, body } = blok;
  return (
    <div {...storyblokEditable(blok)}>
      <LayoutScaler>
        <HeroSecondary title={title || name} {...{ excerpt, image }} />
        <Section>
          <Container>
            <Suspense key={uuid} fallback={<SkeletonGrid tiles={6} />}>
              <CaseStudies industry={[uuid]} />
            </Suspense>
          </Container>
        </Section>
        <SectionBuilder body={body} />
      </LayoutScaler>
    </div>
  );
};

export default Industry;
