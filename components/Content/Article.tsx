import {
  StoryblokServerComponent,
  storyblokEditable,
} from '@storyblok/react/rsc';
import Wysiwyg from '../Shared/Wysiwyg';
import Hero from '../Shared/Hero';
import ArticlesGrid from '../Shared/ArticlesGrid';
import Section from '../Shared/Section';
import Container from '../Shared/Container';
import { Suspense } from 'react';
import SkeletonGrid from '../Shared/SkeletonGrid';
import SectionWrap from '../Shared/SectionWrap';
import { ArticleStoryblok, CategoryStoryblok } from '@/component-types-sb';
import HeroWrap from '../Shared/HeroWrap';

type TArticleStoryblokWithRelations = ArticleStoryblok & {
  categories: CategoryStoryblok[];
};

const Article = ({ blok, id }: TArticleStoryblokWithRelations) => {
  const { title, image, excerpt, wysiwyg, body, categories } = blok;
  const categoryIds =
    categories?.map((category: CategoryStoryblok) => category?.uuid) || [];
  return (
    <div {...storyblokEditable(blok)}>
      <HeroWrap
        title={title}
        excerpt={excerpt}
        image={image}
        categories={categories}
      >
        <Wysiwyg wysiwyg={wysiwyg} />
        {body &&
          body.map((nestedBlok: any) => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        <Section blok={blok}>
          <Container>
            <SectionWrap heading='Related articles'>
              <Suspense fallback={<SkeletonGrid tiles={6} />}>
                <ArticlesGrid
                  limit={3}
                  categories={categoryIds}
                  toExclude={id.toString()}
                />
              </Suspense>
            </SectionWrap>
          </Container>
        </Section>
      </HeroWrap>
    </div>
  );
};

export default Article;
