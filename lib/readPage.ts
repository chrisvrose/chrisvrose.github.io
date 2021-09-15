import { parsify, Awaited } from './misc';

/**
 * Shape of matter.json
 */
export type matterType = Awaited<ReturnType<typeof readMatter>>;

/**
 * Read front matter and present it
 */
export async function readMatter() {
    return parsify((await import('../content/matter.json')).default);
}
