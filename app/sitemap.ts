import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webpcraft.vercel.app'
  
  // Sitemap index - references other sitemaps
  const sitemapIndex = [
    {
      url: `${baseUrl}/sitemap-pages.xml`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/sitemap-posts.xml`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  return sitemapIndex
}
