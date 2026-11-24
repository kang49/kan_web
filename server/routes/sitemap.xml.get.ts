import { readdirSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

const SITE_URL = 'https://kankawee.uk';
const IMAGE_EXTENSIONS = new Set([
    '.png',
    '.jpg',
    '.jpeg',
    '.webp',
    '.gif',
    '.avif',
    '.svg',
]);

function escapeXml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function collectImages(dir: string, baseUrl: string, results: string[]) {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.name.startsWith('.') || entry.name === 'favicon') {
            continue;
        }
        const fullPath = join(dir, entry.name);
        const urlPath = `${baseUrl}/${entry.name}`;
        if (entry.isDirectory()) {
            collectImages(fullPath, urlPath, results);
        } else if (entry.isFile() && IMAGE_EXTENSIONS.has(extname(entry.name).toLowerCase())) {
            results.push(urlPath);
        }
    }
}

function collectBlogs(dir: string, baseSlug: string, results: Array<{ loc: string; lastmod?: string }>) {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.name.startsWith('.') || entry.name === 'test.md') {
            continue;
        }
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
            collectBlogs(fullPath, `${baseSlug}/${entry.name}`, results);
        } else if (entry.isFile() && entry.name.endsWith('.md')) {
            const slug = entry.name.slice(0, -3);
            const mtime = statSync(fullPath).mtime.toISOString().split('T')[0];
            results.push({ loc: `${SITE_URL}/blogs${baseSlug}/${slug}`, lastmod: mtime });
        }
    }
}

export default defineEventHandler((event) => {
    const staticRoutes = ['/', '/aboutme', '/blogs', '/tags'];

    const blogEntries: Array<{ loc: string; lastmod?: string }> = [];
    const blogsDir = resolve(process.cwd(), 'content', 'blogs');
    try {
        collectBlogs(blogsDir, '', blogEntries);
    } catch {
        // Ignore missing content/blogs directory
    }

    const images: string[] = [];
    const publicDir = resolve(process.cwd(), 'public');
    try {
        collectImages(publicDir, '', images);
    } catch {
        // Ignore missing public directory
    }
    images.sort();

    const staticXml = staticRoutes
        .map((route) => `  <url>\n    <loc>${escapeXml(`${SITE_URL}${route}`)}</loc>\n  </url>`)
        .join('\n');

    const blogXml = blogEntries
        .map(
            (post) =>
                `  <url>\n    <loc>${escapeXml(post.loc)}</loc>${post.lastmod ? `\n    <lastmod>${post.lastmod}</lastmod>` : ''}\n  </url>`,
        )
        .join('\n');

    const imageXml = images
        .map(
            (src) =>
                `    <image:image>\n      <image:loc>${escapeXml(`${SITE_URL}${src}`)}</image:loc>\n      <image:title>Kankawee Aramrak</image:title>\n    </image:image>`,
        )
        .join('\n');

    const galleryXml = `  <url>\n    <loc>${SITE_URL}/gallery</loc>\n${imageXml}\n  </url>`;

    setResponseHeader(event, 'content-type', 'application/xml; charset=utf-8');
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${staticXml}
${blogXml}
${galleryXml}
</urlset>`;
});
