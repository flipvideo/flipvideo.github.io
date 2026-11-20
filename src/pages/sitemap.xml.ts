import type { APIRoute } from 'astro';
import {
  SUPPORTED_LANGUAGES,
  getCanonicalUrl,
} from '../i18n/translations';

const ROUTES: Array<'' | 'how-to-use/' | 'hire-me/'> = [
  '',
  'how-to-use/',
  'hire-me/',
];

export const GET: APIRoute = () => {
  const lastmod = '2026-11-20';

  const urlEntries: string[] = [];

  for (const route of ROUTES) {
    const priority = route === '' ? '1.0' : '0.8';
    const changefreq = route === '' ? 'weekly' : 'monthly';
    const xDefaultUrl = getCanonicalUrl('en', route);

    const alternateLinks = SUPPORTED_LANGUAGES.map(
      (lang) =>
        `    <xhtml:link rel="alternate" hreflang="${lang.code}" href="${getCanonicalUrl(lang.code, route)}" />`
    ).join('\n');

    for (const lang of SUPPORTED_LANGUAGES) {
      const loc = getCanonicalUrl(lang.code, route);
      urlEntries.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alternateLinks}
    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultUrl}" />
  </url>`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>
`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
