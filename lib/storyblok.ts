import {
  apiPlugin,
  storyblokInit,
  ISbStoriesParams,
  StoryblokClient,
} from '@storyblok/react/rsc';
import { resolveRelations } from './consts';
import { Paths } from './types';
import {
  ArticleStoryblok,
  CaseStudyStoryblok,
  CategoryStoryblok,
} from '@/component-types-sb';
import { COMPONENTS } from './components';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
  },
  components: COMPONENTS,
});

const storyblokApi: StoryblokClient = getStoryblokApi();

export async function getLinks() {
  if (!storyblokApi) {
    return;
  }
  const { data } = await storyblokApi.get('cdn/links', {
    version: (process.env.STORYBLOK_VERSION ?? 'draft') as
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
    const { data } = await storyblokApi.get(
      `cdn/stories/${slug}`,
      {
        version: (process.env.STORYBLOK_VERSION ?? 'draft') as
          | 'draft'
          | 'published',
        resolve_relations: resolveRelations,
      },
      { cache: 'no-store' }
    );

    story = data?.story ?? null;
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
  const { content, name, full_slug } = story || {};
  const { title, excerpt, meta_title, meta_desc, image } = content || {};
  const theTitle = meta_title || title?.replace(/\**/g, '') || name;
  const theDescription = meta_desc || excerpt;
  const baseUrl = new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  );
  return {
    title: theTitle,
    description: theDescription,
    openGraph: {
      title: theTitle,
      description: theDescription,
      images: image?.filename,
    },
    alternates: {
      canonical: `${baseUrl}${full_slug}/`,
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
    version: (process.env.STORYBLOK_VERSION ?? 'draft') as
      | 'draft'
      | 'published',
    starts_with: 'insights/',
    is_startpage: false,
    sort_by: 'position:asc',
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
  const { data } = await storyblokApi.get(
    `cdn/stories`,
    {
      version: (process.env.STORYBLOK_VERSION ?? 'draft') as
        | 'draft'
        | 'published',
      starts_with: 'categories/',
      is_startpage: false,
    },
    {
      cache: 'no-store',
    }
  );
  return data.stories;
};

export const getIndustries = async (): Promise<CategoryStoryblok[]> => {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(
    `cdn/stories`,
    {
      version: (process.env.STORYBLOK_VERSION ?? 'draft') as
        | 'draft'
        | 'published',
      starts_with: 'industry/',
      is_startpage: false,
    },
    {
      cache: 'no-store',
    }
  );
  return data.stories;
};
export const getCaseStudies = async (
  industry: string[] = [],
  limit: number = 25,
  toExclude: string = ''
): Promise<CaseStudyStoryblok[]> => {
  const storyblokApi = getStoryblokApi();
  let options: ISbStoriesParams = {
    version: (process.env.STORYBLOK_VERSION ?? 'draft') as
      | 'draft'
      | 'published',
    starts_with: 'case-studies/',
    is_startpage: false,
    sort_by: 'position:asc',
    per_page: limit,
    resolve_relations: ['case-study.industry'],
  };
  if (industry?.length) {
    options['filter_query'] = {
      industry: {
        any_in_array: industry.join(),
      },
    };
  }
  if (toExclude) {
    options['excluding_ids'] = toExclude;
  }
  const { data } = await storyblokApi.get(`cdn/stories`, options);
  return data.stories.map((caseStudy: CaseStudyStoryblok) => {
    caseStudy.content.slug = caseStudy.slug;
    return caseStudy;
  });
};
