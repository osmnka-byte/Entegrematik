import { MetadataRoute } from 'next';

// Statik export için zorunlu konfigürasyon
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: 'https://entegrematik.com/sitemap.xml',
  };
}