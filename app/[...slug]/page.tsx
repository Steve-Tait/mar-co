import { StoryblokStory } from '@storyblok/react/rsc';
import { createMetaData, fetchData } from '@/lib/storyblok';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';
import { MetaProps } from '@/lib/types';
import { resolveRelations } from '@/lib/consts';

export async function generateMetadata(
  { params }: MetaProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return createMetaData(params);
}

export default async function Page({ params, searchParams }: MetaProps) {
  const story = await fetchData(params);
  if (!story?.content) {
    notFound();
  }
  return (
    <StoryblokStory
      story={story}
      id={story.id}
      first_published_at={story.first_published_at}
      bridgeOptions={{ resolveRelations }}
    />
  );
}
