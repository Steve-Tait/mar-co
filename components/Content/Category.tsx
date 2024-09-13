import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';
import Hero from '../Shared/Hero';
import ArticlesGrid from '../Shared/ArticlesGrid';
import Section from '../Shared/Section';
import Container from '../Shared/Container';
import SkeletonGrid from '../Shared/SkeletonGrid';
import { Suspense } from 'react';
import { CategoryStoryblok } from '@/component-types-sb';

const Category = (content: CategoryStoryblok) => {
  const { blok, uuid } = content;
  const { name, title, excerpt, image, body } = blok;
  return (
    <div {...storyblokEditable(blok)}>
      <Hero title={title || name} {...{ excerpt, image }} />
      <Section color='muted'>
        <Container>
          <Suspense key={uuid} fallback={<SkeletonGrid tiles={6} />}>
            <ArticlesGrid categories={[uuid]} />
          </Suspense>
        </Container>
      </Section>
      {body &&
        body.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok.uuid} />
        ))}
    </div>
  );
};

export default Category;
