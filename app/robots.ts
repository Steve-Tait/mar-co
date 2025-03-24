import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  );
  return {
    rules:
      process.env.VERCEL_ENV === 'production'
        ? {
            userAgent: '*',
            allow: '/',
          }
        : {
            userAgent: '*',
            disallow: '/',
          },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
