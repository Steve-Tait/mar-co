import { StoryblokStory } from '@storyblok/react/rsc';
import { createMetaData, fetchData } from '@/lib/storyblok';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';
import { MetaProps } from '@/lib/types';
import { resolveRelations } from '@/lib/consts';

export async function generateMetadata(
  props: MetaProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  return createMetaData(params);
}

export default async function Page(props: MetaProps) {
  const params = await props.params;
  const story = await fetchData(params);
  if (!story?.content) {
    notFound();
  }
  return (
    <StoryblokStory
      story={story}
      id={story.id}
      uuid={story.uuid}
      first_published_at={story.first_published_at}
      bridgeOptions={{ resolveRelations }}
    />
  );
}
