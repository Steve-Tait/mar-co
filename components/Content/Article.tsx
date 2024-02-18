import { storyblokEditable } from '@storyblok/react/rsc';
import Wysiwyg from '../Shared/Wysiwyg';
import Hero from '../Shared/Hero';
import ArticlesGrid from '../Shared/ArticlesGrid';
import Section from '../Shared/Section';
import Container from '../Shared/Container';
import { Suspense } from 'react';
import SkeletonGrid from '../Shared/SkeletonGrid';
import SectionWrap from '../Shared/SectionWrap';
import { ArticleStoryblok, CategoryStoryblok } from '@/component-types-sb';

type TArticleStoryblokWithRelations = ArticleStoryblok & {
  categories: CategoryStoryblok[];
};

const Article = ({ blok }: TArticleStoryblokWithRelations) => {
  const { title, image, excerpt, wysiwyg, categories } = blok;
  const categoryIds =
    categories?.map((category: CategoryStoryblok) => category?.uuid) || [];
  return (
    <div {...storyblokEditable(blok)}>
      <Hero
        title={title}
        excerpt={excerpt}
        image={image}
        categories={categories}
      />
      <Wysiwyg wysiwyg={wysiwyg} />
      <Section>
        <Container>
          <SectionWrap heading='Related articles'>
            <Suspense fallback={<SkeletonGrid tiles={6} />}>
              <ArticlesGrid limit={3} categories={categoryIds} />
            </Suspense>
          </SectionWrap>
        </Container>
      </Section>
    </div>
  );
};

export default Article;
