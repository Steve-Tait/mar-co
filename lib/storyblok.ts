import { storyblokInit, apiPlugin } from '@storyblok/js';
import { ISbStoriesParams, getStoryblokApi } from '@storyblok/react/rsc';
import { resolveRelations } from './consts';
import { Paths } from './types';
import {
  ArticleStoryblok,
  CaseStudyStoryblok,
  CategoryStoryblok,
} from '@/component-types-sb';

const { storyblokApi } = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

export async function getLinks() {
  if (!storyblokApi) {
    return;
  }
  const { data } = await storyblokApi.get('cdn/links', {
    version: (process.env.NEXT_PUBLIC_STORYBLOK_VERSION ?? 'draft') as
      | 'draft'
      | 'published',
  });
  const links = data ? data.links : null;
  return links;
}

export async function getStory(slug: string) {
  if (!storyblokApi) {
    return;
  }
  let story = undefined;
  try {
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
      version: (process.env.NEXT_PUBLIC_STORYBLOK_VERSION ?? 'draft') as
        | 'draft'
        | 'published',
      resolve_relations: resolveRelations,
    });
    story = data ? data.story : null;
  } catch (e) {}
  return story;
}

export async function getConfig() {
  return getStory('config');
}

export async function fetchData(params: Paths) {
  let slug = params?.slug ? params.slug.join('/') : 'home';
  return await getStory(slug);
}

export async function createMetaData(params: Paths) {
  const story = await fetchData(params);
  const { content, name } = story || {};
  const { title, excerpt, meta_title, meta_desc, image } = content || {};
  const theTitle = meta_title || title?.replace(/\**/g, '') || name;
  const theDescription = meta_desc || excerpt;
  return {
    title: theTitle,
    description: theDescription,
    openGraph: {
      title: theTitle,
      description: theDescription,
      images: image?.filename,
    },
  };
}

export const getArticles = async (
  categories: string[] = [],
  limit: number = 25,
  toExclude: string = ''
): Promise<ArticleStoryblok[]> => {
  const storyblokApi = getStoryblokApi();
  let options: ISbStoriesParams = {
    version: (process.env.NEXT_PUBLIC_STORYBLOK_VERSION ?? 'draft') as
      | 'draft'
      | 'published',
    starts_with: 'articles/',
    is_startpage: false,
    sort_by: 'created_at:desc',
    per_page: limit,
    resolve_relations: ['article.categories'],
  };
  if (categories?.length) {
    options['filter_query'] = {
      categories: {
        any_in_array: categories.join(),
      },
    };
  }
  if (toExclude) {
    options['excluding_ids'] = toExclude;
  }

  const { data } = await storyblokApi.get(`cdn/stories`, options);
  return data.stories.map((article: ArticleStoryblok) => {
    article.content.slug = article.slug;
    return article;
  });
};

export const getCategories = async (): Promise<CategoryStoryblok[]> => {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories`, {
    version: (process.env.NEXT_PUBLIC_STORYBLOK_VERSION ?? 'draft') as
      | 'draft'
      | 'published',
    starts_with: 'categories/',
    is_startpage: false,
  });
  return data.stories;
};

export const getCaseStudies = async (
  limit: number = 25,
  toExclude: string = ''
): Promise<CaseStudyStoryblok[]> => {
  const storyblokApi = getStoryblokApi();
  let options: ISbStoriesParams = {
    version: (process.env.NEXT_PUBLIC_STORYBLOK_VERSION ?? 'draft') as
      | 'draft'
      | 'published',
    starts_with: 'case-studies/',
    is_startpage: false,
    sort_by: 'created_at:desc',
    per_page: limit,
    resolve_relations: ['case-study.categories'],
  };
  if (toExclude) {
    options['excluding_ids'] = toExclude;
  }

  const { data } = await storyblokApi.get(`cdn/stories`, options);
  return data.stories.map((caseStudy: CaseStudyStoryblok) => {
    caseStudy.content.slug = caseStudy.slug;
    return caseStudy;
  });
};
