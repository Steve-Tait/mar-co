import { StoryblokComponent } from '@storyblok/react/rsc';
import { createMetaData, fetchData } from '@/lib/storyblok';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';
import { MetaProps } from '@/lib/types';

export async function generateMetadata(
  { params }: MetaProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return createMetaData({ slug: ['home'] });
}

export default async function Home({ params, searchParams }: MetaProps) {
  const story = await fetchData({ slug: ['home'] });
  if (!story?.content) {
    notFound();
  }
  return (
    <StoryblokComponent
      blok={story?.content}
      id={story.uuid}
      {...{ params, searchParams }}
    />
  );
}
