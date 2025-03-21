'use server';

import { getLinks } from '@/lib/storyblok';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `https://mar-co.digital`;

  const links = await getLinks();

  if (!links) {
    return [];
  }
  return Object.values(links).map((link) => ({
    url: `${url}${link.real_path}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  }));
}
