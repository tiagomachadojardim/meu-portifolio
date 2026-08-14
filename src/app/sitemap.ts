import type { MetadataRoute } from 'next';

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const paths = ['', '/works', '/formacao', '/publicacoes', '/cv'];
  const routes: MetadataRoute.Sitemap = paths.map((path) => ({
    url: `${baseUrl}${path || '/'}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority:
      path === ''
        ? 1
        : path === '/works' || path === '/formacao' || path === '/publicacoes'
          ? 0.85
          : 0.7,
  }));

  return routes;
}
