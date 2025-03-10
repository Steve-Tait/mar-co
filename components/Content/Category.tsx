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

const Category = (content: CategoryStoryblok) => {
  const { blok, uuid } = content;
  const { name, title, excerpt, image, body } = blok;
  return (
    <div {...storyblokEditable(blok)}>
      <HeroWrap title={title || name} {...{ excerpt, image }}>
        <Section>
          <Container>
            <Suspense key={uuid} fallback={<SkeletonGrid tiles={6} />}>
              <ArticlesGrid categories={[uuid]} />
            </Suspense>
          </Container>
        </Section>
        {body &&
          body.map((nestedBlok: any) => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok.uuid} />
          ))}
      </HeroWrap>
    </div>
  );
};

export default Category;
