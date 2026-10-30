import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://entegrematik.com';

  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/gizlilik', priority: 0.3, changeFrequency: 'monthly' as const },
    { url: '/kvkk', priority: 0.3, changeFrequency: 'monthly' as const },
    { url: '/kullanim-kosullari', priority: 0.3, changeFrequency: 'monthly' as const },
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`.trim(),
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}