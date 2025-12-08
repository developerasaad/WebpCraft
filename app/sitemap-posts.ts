import { MetadataRoute } from 'next'

export default function postsSitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webpcraft.vercel.app'
  
  // How-to guides (treated as posts/articles)
  const posts = [
    {
      url: `${baseUrl}/how-to/convert-jpg-to-webp`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-to/convert-png-to-webp`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-to/convert-gif-to-webp`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  return posts
}
