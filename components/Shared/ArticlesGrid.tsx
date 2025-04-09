import React from 'react';
import TileArticle from './TileArticle';
import { ArticleStoryblok } from '@/component-types-sb';
import { getArticles } from '@/lib/storyblok';
import Heading from './Heading';

type TArticlesGrid = {
  articles?: ArticleStoryblok[];
  categories?: string[];
  limit?: number;
  toExclude?: string;
};

const ArticlesGrid = async ({
  articles = [],
  categories = [],
  limit,
  toExclude = '',
  ...props
}: TArticlesGrid) => {
  if (!articles?.length) {
    articles = await getArticles(categories, limit, toExclude);
  }

  if (!articles?.length)
    return (
      <Heading
        className='text-center'
        level={6}
        heading='Sorry, no results found'
      />
    );

  return (
    <div
      className='no-scrollbar grid snap-x snap-mandatory auto-cols-[minmax(75vw,_1fr)] grid-flow-col gap-4 overflow-x-auto overflow-y-clip sm:grid-flow-row sm:grid-cols-2 sm:gap-8 lg:grid-cols-3'
      {...props}
    >
      {articles.map((article, index) => (
        <TileArticle
          article={{ ...article.content, slug: article.slug }}
          index={index}
          published_at={article.first_published_at}
          key={article.uuid}
        />
      ))}
    </div>
  );
};
export default ArticlesGrid;
