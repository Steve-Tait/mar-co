import React from 'react';
import TileArticle from './TileArticle';
import { ArticleStoryblok } from '@/component-types-sb';
import { getArticles } from '@/lib/storyblok';

type TArticlesGrid = {
  articles?: ArticleStoryblok[];
  categories?: string[];
  limit?: number;
};

const ArticlesGrid = async ({
  articles = [],
  categories = [],
  limit,
  ...props
}: TArticlesGrid) => {
  if (!articles?.length) {
    articles = await getArticles(categories, limit);
  }
  return (
    <div
      className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'
      {...props}
    >
      {articles.map((article) => (
        <TileArticle
          article={article.content}
          published_at={article.first_published_at}
          key={article.uuid}
        />
      ))}
    </div>
  );
};
export default ArticlesGrid;
