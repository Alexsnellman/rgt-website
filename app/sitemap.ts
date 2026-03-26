import { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { locations } from '@/data/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://rgt.fi'

  const servicePages = services.map((s) => ({
    url: `${base}/palvelut/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: s.featured ? 0.9 : 0.7,
  }))

  const cityPages = locations.map((l) => ({
    url: `${base}/alueet/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/yhteystiedot`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    ...servicePages,
    ...cityPages,
  ]
}
