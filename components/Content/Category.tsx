import {
  StoryblokServerComponent,
  storyblokEditable,
} from '@storyblok/react/rsc';
import ArticlesGrid from '../Shared/ArticlesGrid';
import Section from '../Shared/Section';
import Container from '../Shared/Container';
import SkeletonGrid from '../Shared/SkeletonGrid';
import { Suspense } from 'react';
import { CategoryStoryblok } from '@/component-types-sb';
import HeroWrap from '../Shared/HeroWrap';
import SectionBuilder from '../Shared/SectionBuilder';
import HeroSecondary from '../Shared/HeroSecondary';
import LayoutScaler from '../Shared/LayoutScaler';

const Category = (content: CategoryStoryblok) => {
  const { blok, uuid } = content;
  const { name, title, excerpt, image, body } = blok;
  return (
    <div {...storyblokEditable(blok)}>
      <LayoutScaler>
        <HeroSecondary title={title || name} {...{ excerpt, image }} />
        <Section>
          <Container>
            <Suspense key={uuid} fallback={<SkeletonGrid tiles={6} />}>
              <ArticlesGrid categories={[uuid]} />
            </Suspense>
          </Container>
        </Section>
        <SectionBuilder body={body} />
      </LayoutScaler>
    </div>
  );
};

export default Category;
