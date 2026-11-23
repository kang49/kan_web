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

export default defineEventHandler(() => {
    const publicDir = resolve(process.cwd(), 'public');
    const images: string[] = [];
    try {
        collectImages(publicDir, '', images);
    } catch {
        return { images: [] };
    }
    images.sort();
    return { images };
});
