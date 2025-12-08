import { MetadataRoute } from 'next'

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://webpcraft.vercel.app';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/_next/',
          '/node_modules/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/_next/',
          '/node_modules/',
        ],
        crawlDelay: 1,
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
    ],
  };
}