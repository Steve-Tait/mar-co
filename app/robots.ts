import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  );

  return process.env.VERCEL_ENV === 'production'
    ? {
        rules: {
          userAgent: '*',
          allow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
      }
    : {
        rules: {
          userAgent: '*',
          disallow: '/',
        },
      };
}
