import { storyblokEditable } from '@storyblok/react/rsc';
import Wysiwyg from '../Shared/Wysiwyg';
import ArticlesGrid from '../Shared/ArticlesGrid';
import Section from '../Shared/Section';
import Container from '../Shared/Container';
import { Suspense } from 'react';
import SkeletonGrid from '../Shared/SkeletonGrid';
import SectionWrap from '../Shared/SectionWrap';
import { ArticleStoryblok, CategoryStoryblok } from '@/component-types-sb';
import SectionBuilder from '../Shared/SectionBuilder';
import LayoutScaler from '../Shared/LayoutScaler';
import HeroSecondary from '../Shared/HeroSecondary';

type TArticleStoryblokWithRelations = ArticleStoryblok & {
  categories: CategoryStoryblok[];
  first_published_at: Date;
};

const Article = ({
  blok,
  id,
  first_published_at,
}: TArticleStoryblokWithRelations) => {
  const date = first_published_at
    ? new Date(first_published_at).toLocaleString('default', {
        month: 'long',
        year: 'numeric',
      })
    : '';
  const { title, image, excerpt, wysiwyg, body, categories, author } = blok;
  const categoryIds =
    categories?.map((category: CategoryStoryblok) => category?.uuid) || [];
  return (
    <div {...storyblokEditable(blok)}>
      <LayoutScaler>
        <HeroSecondary {...{ title, excerpt, image, categories, date }} />
        <Wysiwyg wysiwyg={wysiwyg} author={author?.content} />
        <SectionBuilder body={body} />
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
      </LayoutScaler>
    </div>
  );
};

export default Article;
