import { parsify, Awaited } from './misc';

/**
 * Shape of matter.json
 */
export type matterType = Awaited<ReturnType<typeof readMatter>>;

/**
 * Read front matter and present it
 */
export async function readMatter() {
    const content = await import('../content/matter.json');
    return parsify(content.default);
}
