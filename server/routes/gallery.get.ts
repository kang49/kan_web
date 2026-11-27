import { readdirSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

const IMAGE_EXTENSIONS = new Set([
    '.png',
    '.jpg',
    '.jpeg',
    '.webp',
    '.gif',
    '.avif',
    '.svg',
]);

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
let githubCache: { repo: string; urls: string[]; expiresAt: number } | null = null;

function collectLocalImages(dir: string, baseUrl: string, results: string[]) {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.name.startsWith('.') || entry.name === 'favicon') {
            continue;
        }
        const fullPath = join(dir, entry.name);
        const urlPath = `${baseUrl}/${entry.name}`;
        if (entry.isDirectory()) {
            collectLocalImages(fullPath, urlPath, results);
        } else if (entry.isFile() && IMAGE_EXTENSIONS.has(extname(entry.name).toLowerCase())) {
            results.push(urlPath);
        }
    }
}

async function fetchGithubImages(repo: string): Promise<string[]> {
    const now = Date.now();
    if (githubCache && githubCache.repo === repo && now < githubCache.expiresAt) {
        return githubCache.urls;
    }

    try {
        const items = await $fetch<Array<{ type: string; name: string; download_url: string | null }>>(
            `https://api.github.com/repos/${repo}/contents/`,
            { headers: { 'User-Agent': 'kan_web-gallery' } },
        );
        const urls = items
            .filter(
                (item) =>
                    item.type === 'file' &&
                    item.download_url &&
                    IMAGE_EXTENSIONS.has(extname(item.name).toLowerCase()),
            )
            .map((item) => item.download_url as string);

        githubCache = { repo, urls, expiresAt: now + CACHE_TTL_MS };
        return urls;
    } catch {
        return githubCache?.repo === repo ? githubCache.urls : [];
    }
}

export default defineEventHandler(async (event) => {
    const publicDir = resolve(process.cwd(), 'public');
    const images: string[] = [];
    try {
        collectLocalImages(publicDir, '', images);
    } catch {
        // Ignore missing public directory
    }
    images.sort();

    const githubRepo = process.env.GITHUB_GALLERY_REPO?.trim();
    if (githubRepo) {
        const remoteImages = await fetchGithubImages(githubRepo);
        images.push(...remoteImages);
    }

    const imgTags = images
        .map((src) => `<img src="${src}" alt="Kankawee Aramrak" loading="lazy" />`)
        .join('\n    ');

    setResponseHeader(event, 'content-type', 'text/html; charset=utf-8');
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Kankawee Aramrak - Gallery</title>
  <script>window.location.replace('/');</script>
</head>
<body>
  <main>
    <h1>Kankawee Aramrak</h1>
    ${imgTags}
  </main>
</body>
</html>`;
});
