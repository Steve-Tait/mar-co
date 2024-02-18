import { storyblokEditable } from '@storyblok/react/rsc';
import Hero from '../Shared/Hero';
import ArticlesGrid from '../Shared/ArticlesGrid';
import Section from '../Shared/Section';
import Container from '../Shared/Container';
import SkeletonGrid from '../Shared/SkeletonGrid';
import { Suspense } from 'react';
import { CategoryStoryblok } from '@/component-types-sb';

const Category = (content: CategoryStoryblok) => {
  const { blok, id } = content;
  const { name, description } = blok;
  return (
    <div {...storyblokEditable(blok)}>
      <Hero title={name} excerpt={description} />
      <Section>
        <Container>
          <Suspense key={id} fallback={<SkeletonGrid tiles={6} />}>
            <ArticlesGrid categories={[id]} />
          </Suspense>
        </Container>
      </Section>
    </div>
  );
};

export default Category;
